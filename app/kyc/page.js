"use client";

import { useEffect } from 'react';

const ONBOARD_URL = process.env.NEXT_PUBLIC_ONBOARD_URL || 'http://localhost:5173';

export default function KYCOnboardRedirect() {
  useEffect(() => {
    window.location.href = ONBOARD_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="text-xl font-semibold text-gray-800">Redirecting to KYC...</div>
        <p className="text-gray-600">If you are not redirected automatically, <a className="text-indigo-600 font-semibold" href={ONBOARD_URL}>click here</a>.</p>
      </div>
    </div>
  );
}
