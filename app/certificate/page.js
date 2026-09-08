"use client";
import { useState, useEffect } from "react";
import PlaxLayout from "@/layouts/PlaxLayout";
import { X, FileText, Award, Shield } from "lucide-react";

export default function CertificatePage() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <PlaxLayout>
      <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: '#F3F7FD' }}>
        {/* Hero Section */}
        <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E7F1FA', marginBottom: '24px' }}>
              <Award size={40} style={{ color: '#002C51' }} />
            </div>
            <h1 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: '700', color: '#002C51', marginBottom: '16px' }}>
              Our Certifications
            </h1>
            <p style={{ fontSize: isMobile ? '16px' : '18px', color: '#6b7280', maxWidth: '700px', margin: '0 auto 32px', lineHeight: '1.6' }}>
              We are proud to hold professional certifications that demonstrate our commitment to excellence and regulatory compliance in the financial advisory industry.
            </p>
          </div>
        </section>

        {/* Certificate Info Section */}
        <section style={{ padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
              {/* Info Card 1 */}
              <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#E7F1FA', marginBottom: '20px' }}>
                  <Shield size={28} style={{ color: '#1F9A32' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#002C51', marginBottom: '12px' }}>
                  SEBI Registered
                </h3>
                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6' }}>
                  Our firm is registered with the Securities and Exchange Board of India (SEBI), ensuring compliance with regulatory standards.
                </p>
              </div>

              {/* Info Card 2 */}
              <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#E7F1FA', marginBottom: '20px' }}>
                  <FileText size={28} style={{ color: '#1F9A32' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#002C51', marginBottom: '12px' }}>
                  Verified Credentials
                </h3>
                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6' }}>
                  All our professional certifications are verified and authenticated by the relevant regulatory authorities.
                </p>
              </div>

              {/* Info Card 3 */}
              <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#E7F1FA', marginBottom: '20px' }}>
                  <Award size={28} style={{ color: '#1F9A32' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#002C51', marginBottom: '12px' }}>
                  Industry Standards
                </h3>
                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6' }}>
                  We maintain the highest standards of professional conduct and ethical practices in financial advisory services.
                </p>
              </div>
            </div>

            {/* View Certificate Button */}
            <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '48px 32px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
              <h2 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: '700', color: '#002C51', marginBottom: '16px' }}>
                View Our Official Certificate
              </h2>
              <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                Click the button below to view our official certification. The certificate is protected and cannot be downloaded to maintain document security.
              </p>
              <button
                onClick={() => setShowCertificate(true)}
                style={{
                  padding: '16px 48px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white',
                  backgroundColor: '#1F9A32',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(31, 154, 50, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#1a8229';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(31, 154, 50, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#1F9A32';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(31, 154, 50, 0.3)';
                }}
              >
                <FileText size={20} />
                View Certificate
              </button>
              <p style={{ fontSize: '13px', color: '#92ADCB', marginTop: '16px', fontStyle: 'italic' }}>
                * Certificate viewing only - download functionality is disabled for security purposes
              </p>
            </div>
          </div>
        </section>

        {/* Certificate Modal */}
        {showCertificate && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setShowCertificate(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCertificate(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                zIndex: 10000,
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <X size={24} style={{ color: '#002C51' }} />
            </button>

            {/* Certificate Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative'
              }}
            >
              {/* PDF Viewer - Disabling download */}
              <iframe
                src="/img/certificate/Certificate.pdf#toolbar=0&navpanes=0&scrollbar=0"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                title="Certificate"
                onContextMenu={(e) => e.preventDefault()}
              />
              
              {/* Watermark overlay to prevent screenshots */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: 'none',
                  background: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(31, 154, 50, 0.02) 100px, rgba(31, 154, 50, 0.02) 200px)'
                }}
              />
            </div>

            {/* Info Text */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#002C51',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Shield size={18} style={{ color: '#1F9A32' }} />
              Certificate is view-only and protected from download
            </div>
          </div>
        )}
      </div>
    </PlaxLayout>
  );
}
