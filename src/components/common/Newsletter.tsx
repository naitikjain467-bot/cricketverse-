import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Front-end demonstration mode per PRD requirement
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-r from-[#102A43] via-[#0D2339] to-[#071A2B] border border-[#1E3A5F] rounded-2xl p-8 lg:p-12 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#16A34A]/20 text-[#86EFAC] mb-2">
          <Mail className="w-6 h-6" />
        </div>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-wide uppercase">
          Stay Ahead of the Game
        </h2>
        <p className="text-sm text-[#B8C7D9] leading-relaxed">
          Receive curated cricket essays, tactical analysis, tournament retrospectives, and verified historical records directly in your inbox.
        </p>

        {status === 'success' ? (
          <div className="p-4 rounded-xl bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#86EFAC] text-sm flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
            <span>
              <strong>Thank you for joining CricketVerse!</strong> (Demo mode: In production, configure an email service like SendGrid, Mailchimp, or Formspree).
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your college or personal email..."
                className="w-full sm:flex-grow px-4 py-3 rounded-xl bg-[#071A2B] border border-[#1E3A5F] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#16A34A] transition-colors"
                aria-label="Email subscription input"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm transition-colors whitespace-nowrap shadow-lg shadow-[#16A34A]/20"
              >
                Subscribe Free
              </button>
            </div>
            {status === 'error' && (
              <p className="text-xs text-rose-400 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errorMessage}
              </p>
            )}
            <p className="text-[11px] text-[#64748B]">
              No spam guaranteed. Unsubscribe at any time. Demonstration form ready for backend connection.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
