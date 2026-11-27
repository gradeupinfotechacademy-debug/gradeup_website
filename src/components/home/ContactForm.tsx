'use client';

import React, { useState } from 'react';
import { ContactFormData, ContactFormProps } from '@/types/courseTypes';

const INITIAL_FORM_STATE: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

/**
 * Standard contact query form extracted from ContactSection.
 */
export default function ContactForm({
  className = '',
  onSubmitSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitSuccess?.(formData);
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-200 ${className}`.trim()}
    >
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Thank you for reaching out!
          </h3>
          <p className="text-slate-600 mt-2">
            We have received your message and will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <input
                type="text"
                required
                placeholder="Enter Name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-white border-2 border-[#3c4dc9] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3c4dc9]/30 rounded-md text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                required
                placeholder="Enter Email..."
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-white border-2 border-[#3c4dc9] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3c4dc9]/30 rounded-md text-sm"
              />
            </div>
            <div>
              <input
                type="tel"
                required
                placeholder="Enter Phone..."
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-white border-2 border-[#3c4dc9] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3c4dc9]/30 rounded-md text-sm"
              />
            </div>
          </div>

          <div>
            <textarea
              required
              rows={4}
              placeholder="Enter Your Message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3.5 bg-white border-2 border-[#3c4dc9] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3c4dc9]/30 rounded-md text-sm"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-[#3c4dc9] hover:bg-[#2b37a8] text-white font-semibold text-base px-12 py-3 rounded-md shadow-md transition-all duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
