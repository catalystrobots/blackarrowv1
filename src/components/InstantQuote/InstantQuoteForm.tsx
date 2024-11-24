import React from 'react';
import { MultiFileUploader } from './MultiFileUploader';

export function InstantQuoteForm() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Instant 3D Printing Quote
            </h1>
            <p className="mt-2 text-gray-600">
              Upload your 3D files to get an instant quote
            </p>
          </div>

          <MultiFileUploader />
        </div>
      </div>
    </div>
  );
}