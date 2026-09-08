"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { kycApiService } from '@/lib/kycApiService';

export async function generateStaticParams() {
  return [
    { type: 'personal' },
    { type: 'professional' },
    { type: 'address' },
    { type: 'bank' },
    { type: 'documents' }
  ];
}

export default function DynamicKYCForm({ params }) {
  const router = useRouter();
  const templateType = params.type; // personal, professional, address, etc.

  const [template, setTemplate] = useState(null);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    loadTemplate();
  }, [templateType]);

  const loadTemplate = async () => {
    try {
      setLoading(true);
      const templates = await kycApiService.getTemplates(templateType);

      if (templates.length > 0) {
        setTemplate(templates[0]);
        // Initialize form data
        const initialData = {};
        templates[0].sections?.forEach(section => {
          section.fields?.forEach(field => {
            initialData[field.fieldName] = '';
          });
        });
        setFormData(initialData);
      }
    } catch (err) {
      console.error('Error loading template:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear error when user types
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: null
      }));
    }
  };

  const validateField = (field, value) => {
    const validation = field.validation;

    if (validation.required && !value) {
      return `${field.label} is required`;
    }

    if (validation.pattern && value) {
      const regex = new RegExp(validation.pattern);
      if (!regex.test(value)) {
        return `Invalid ${field.label} format`;
      }
    }

    if (validation.minLength && value.length < validation.minLength) {
      return `${field.label} must be at least ${validation.minLength} characters`;
    }

    if (validation.maxLength && value.length > validation.maxLength) {
      return `${field.label} must not exceed ${validation.maxLength} characters`;
    }

    return null;
  };

  const validateSection = (section) => {
    const newErrors = {};
    let isValid = true;

    section.fields.forEach(field => {
      const error = validateField(field, formData[field.fieldName]);
      if (error) {
        newErrors[field.fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    const currentSectionData = template.sections[currentSection];
    if (validateSection(currentSectionData)) {
      if (currentSection < template.sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      // Mock user ID - in production, get from auth
      const userId = 'user_' + Date.now();

      await kycApiService.submitKYC(userId, template.templateId, formData);

      alert('KYC submitted successfully!');
      router.push('/kyc');
    } catch (err) {
      console.error('Submission error:', err);
      alert('Failed to submit KYC. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Template Not Found</h2>
          <button
            onClick={() => router.push('/kyc')}
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg"
          >
            Back to KYC
          </button>
        </div>
      </div>
    );
  }

  const section = template.sections[currentSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentSection + 1} of {template.sections.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(((currentSection + 1) / template.sections.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / template.sections.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{template.templateName}</h2>
          <h3 className="text-xl font-semibold text-indigo-600 mb-6">{section.title}</h3>
          {section.description && (
            <p className="text-gray-600 mb-8">{section.description}</p>
          )}

          {/* Dynamic Form Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            {section.fields.map((field) => (
              <div
                key={field.fieldId}
                className={`${field.grid?.xs === 12 ? 'md:col-span-2' : ''}`}
              >
                <FormField
                  field={field}
                  value={formData[field.fieldName]}
                  onChange={(value) => handleChange(field.fieldName, value)}
                  error={errors[field.fieldName]}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`py-3 px-8 rounded-lg font-semibold transition ${currentSection === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={submitting}
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {currentSection === template.sections.length - 1 ? (
                submitting ? 'Submitting...' : 'Submit'
              ) : (
                'Next →'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({ field, value, onChange, error }) {
  const commonClasses = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";
  const errorClasses = error ? "border-red-500" : "border-gray-300";

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {field.label}
        {field.validation?.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {field.fieldType === 'select' && (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${commonClasses} ${errorClasses}`}
        >
          <option value="">Select {field.label}</option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {field.fieldType === 'radio' && (
        <div className="space-y-2">
          {field.options?.map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(e.target.value)}
                className="mr-2"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}

      {field.fieldType === 'textarea' && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          rows={4}
          className={`${commonClasses} ${errorClasses}`}
        />
      )}

      {['text', 'email', 'tel', 'number', 'date'].includes(field.fieldType) && (
        <input
          type={field.fieldType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={`${commonClasses} ${errorClasses}`}
        />
      )}

      {field.helpText && !error && (
        <p className="mt-1 text-sm text-gray-500">{field.helpText}</p>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
