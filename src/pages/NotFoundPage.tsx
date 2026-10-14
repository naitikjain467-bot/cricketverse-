import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, BookOpen } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#102A43] text-[#86EFAC] mx-auto flex items-center justify-center text-2xl font-bold font-mono">
        404
      </div>
      <h1 className="font-heading text-4xl font-bold text-white uppercase tracking-wide">
        Outside the Boundary
      </h1>
      <p className="text-sm text-[#B8C7D9] leading-relaxed">
        The page or article you are looking for does not exist or has been shifted to a new crease.
      </p>
      <div className="flex items-center justify-center gap-4 pt-2">
        <Link
          to="/"
          className="px-5 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <Link
          to="/blogs"
          className="px-5 py-2.5 rounded-xl bg-[#12283D] border border-[#1E3A5F] hover:bg-[#102A43] text-[#86EFAC] text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Browse All Blogs</span>
        </Link>
      </div>
    </div>
  );
};
