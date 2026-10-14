import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, MessageSquare, Send, ShieldAlert } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a message of at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="border-b border-[#102A43] pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A] block mb-1">
          Editorial Desk
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
          Contact CricketVerse
        </h1>
        <p className="text-sm sm:text-base text-[#B8C7D9] mt-2 leading-relaxed">
          Have an inquiry, historical fact correction, article suggestion, or feedback for our editorial research team? We welcome your correspondence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Information Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#12283D] border border-[#1E3A5F] space-y-4">
            <h3 className="font-heading text-xl font-bold text-white uppercase">
              Editorial Contacts
            </h3>
            <div className="space-y-3 text-xs text-[#CBD5E1]">
              <div>
                <span className="text-[#86EFAC] font-semibold block uppercase">General Inquiries:</span>
                <span className="font-mono text-white">editorial@cricketverse.example.com</span>
                <span className="text-[10px] text-[#64748B] block mt-0.5">(Configurable placeholder address)</span>
              </div>
              <div>
                <span className="text-[#86EFAC] font-semibold block uppercase">Fact Checking & Corrections:</span>
                <span className="font-mono text-white">corrections@cricketverse.example.com</span>
              </div>
              <div>
                <span className="text-[#86EFAC] font-semibold block uppercase">Research Office:</span>
                <span className="text-white">New Delhi · London · Melbourne</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#091F33] border border-[#102A43] text-xs text-[#8FA2B7] space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#16A34A]" />
              Submission Guidelines
            </span>
            <p className="leading-relaxed">
              When submitting statistical corrections, please cite the specific match date, venue, and official scorebook source from ICC or national boards.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-2xl bg-[#12283D] border border-[#1E3A5F]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#16A34A]/20 text-[#86EFAC] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white uppercase">
                  Message Recorded (Demo Mode)
                </h3>
                <p className="text-xs sm:text-sm text-[#B8C7D9] leading-relaxed max-w-sm mx-auto">
                  Thank you for your feedback! This form operates in client-side demonstration mode per the assignment PRD. In production, connect Formspree, Resend, or your email API.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#16A34A] text-white text-xs font-semibold hover:bg-[#15803D] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-white uppercase mb-2">
                  Send a Message
                </h3>

                {/* Name field */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1">
                    Your Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-[#16A34A]"
                  />
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-[#16A34A]"
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Question on 1983 World Cup scorecards"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-[#16A34A]"
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your detailed inquiry or correction here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-[#16A34A] resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#16A34A]/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Message</span>
                </button>

                <p className="text-[10px] text-[#64748B] text-center pt-1">
                  Demonstration mode: No external server transmission without configured provider credentials.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
