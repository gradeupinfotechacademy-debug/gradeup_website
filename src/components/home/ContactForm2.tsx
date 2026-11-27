'use client';

import React, { useState } from 'react';
import { ContactForm2Data, ContactForm2Props } from '@/types/courseTypes';
import { CONTACT_FORM_2_COURSES } from '@/data/courseData';

const INITIAL_FORM_STATE: ContactForm2Data = {
  fullName: '',
  email: '',
  phone: '',
  course: '',
  message: '',
};

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#dc2626] transition-colors';

const LABEL_CLASS =
  'block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2';

/**
 * Counselor inquiry form card with course selector and navy-to-red gradient submit CTA.
 */
export default function ContactForm2({
  title = 'Speak with an Expert counselor',
  subtitle = 'Fill out the inquiry form below and our professional counselor will coordinate an assessment call with you.',
  courses = CONTACT_FORM_2_COURSES,
  className = '',
  onSubmitSuccess,
}: ContactForm2Props) {
  const [formData, setFormData] =
    useState<ContactForm2Data>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitSuccess?.(formData);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setSubmitted(false);
  };

  return (
    <div
      className={`w-full max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 ${className}`.trim()}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
          {title}
        </h2>
        <p className="mt-2.5 text-sm sm:text-[15px] text-slate-500 max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            ✓
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Inquiry Request Received!
          </h3>
          <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
            Thank you, {formData.fullName}. Our counselor will reach out shortly
            {formData.course ? ` regarding ${formData.course}` : ''}.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-6 text-sm font-semibold text-[#dc2626] hover:underline cursor-pointer"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Full Name & Email Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cf2-full-name" className={LABEL_CLASS}>
                FULL NAME
              </label>
              <input
                id="cf2-full-name"
                type="text"
                required
                placeholder="Enter Your Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="cf2-email" className={LABEL_CLASS}>
                EMAIL ADDRESS
              </label>
              <input
                id="cf2-email"
                type="email"
                required
                placeholder="gradeup@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={INPUT_CLASS}
              />
            </div>
          </div>

          {/* Row 2: Phone Number & Course */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cf2-phone" className={LABEL_CLASS}>
                PHONE NUMBER
              </label>
              <div className="flex items-center rounded-lg border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-red-500/20 focus-within:border-[#dc2626] transition-colors">
                <span className="pl-4 pr-2.5 text-sm font-semibold text-slate-700 select-none">
                  +91
                </span>
                <input
                  id="cf2-phone"
                  type="tel"
                  required
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="flex-1 py-3 pr-4 bg-transparent text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cf2-course" className={LABEL_CLASS}>
                COURSE
              </label>
              <div className="relative">
                <select
                  id="cf2-course"
                  required
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  className={`${INPUT_CLASS} appearance-none pr-10 cursor-pointer ${
                    formData.course ? 'text-slate-800' : 'text-slate-700'
                  }`}
                >
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Row 3: Optional Message */}
          <div>
            <label htmlFor="cf2-message" className={LABEL_CLASS}>
              MESSAGE (OPTIONAL)
            </label>
            <textarea
              id="cf2-message"
              rows={4}
              placeholder="Let us know what career transitions you are targeting..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${INPUT_CLASS} resize-y`}
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#020066] via-[#8b0029] to-[#ff0000] hover:brightness-110 active:brightness-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/20 transition-all duration-200 cursor-pointer"
            >
              Send Inquiry Request
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
