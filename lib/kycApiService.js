/**
 * KYC API Service for Growsin Next.js
 * Fetches dynamic KYC templates from Python backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_KYC_API_URL || 'https://api.growsin.com';

class KYCApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Fetch all KYC templates
   * @param {string} templateType - Filter by type (personal, address, professional, etc.)
   * @returns {Promise<Array>} Array of templates
   */
  async getTemplates(templateType = null) {
    try {
      const url = templateType 
        ? `${this.baseURL}/api/kyc/templates?template_type=${templateType}`
        : `${this.baseURL}/api/kyc/templates`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // Always fetch fresh templates
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch templates: ${response.statusText}`);
      }

      const data = await response.json();
      return data.templates || [];
    } catch (error) {
      console.error('Error fetching KYC templates:', error);
      throw error;
    }
  }

  /**
   * Fetch specific template by ID
   * @param {string} templateId - Template identifier
   * @returns {Promise<Object>} Template object
   */
  async getTemplate(templateId) {
    try {
      const response = await fetch(`${this.baseURL}/api/kyc/templates/${templateId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch template: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching template ${templateId}:`, error);
      throw error;
    }
  }

  /**
   * Submit KYC data
   * @param {string} userId - User identifier
   * @param {string} templateId - Template identifier
   * @param {Object} data - Form data to submit
   * @returns {Promise<Object>} Submission response
   */
  async submitKYC(userId, templateId, data) {
    try {
      const response = await fetch(`${this.baseURL}/api/kyc/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          template_id: templateId,
          data: data,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit KYC: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting KYC:', error);
      throw error;
    }
  }

  /**
   * Get user's KYC submissions
   * @param {string} userId - User identifier
   * @param {string} templateId - Optional template filter
   * @returns {Promise<Object>} User submissions
   */
  async getUserSubmission(userId, templateId = null) {
    try {
      const url = templateId
        ? `${this.baseURL}/api/kyc/submission/${userId}/${templateId}`
        : `${this.baseURL}/api/kyc/submission/${userId}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch submissions: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching submissions:', error);
      throw error;
    }
  }

  /**
   * Check API health
   * @returns {Promise<Object>} Health status
   */
  async checkHealth() {
    try {
      const response = await fetch(`${this.baseURL}/api/health`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('API is unhealthy');
      }

      return await response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const kycApiService = new KYCApiService();
export default kycApiService;
