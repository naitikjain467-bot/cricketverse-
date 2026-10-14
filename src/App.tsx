import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BookmarkProvider } from './context/BookmarkContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AllBlogsPage } from './pages/AllBlogsPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CricketBasicsPage } from './pages/CricketBasicsPage';
import { PlayersPage } from './pages/PlayersPage';
import { TournamentsPage } from './pages/TournamentsPage';
import { RecordsPage } from './pages/RecordsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SavedArticlesPage } from './pages/SavedArticlesPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route transition
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BookmarkProvider>
      <BrowserRouter>
        <ScrollToTopOnRoute />
        <div className="flex flex-col min-h-screen bg-[#071A2B] text-[#F8FAFC]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<AllBlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogPostPage />} />
              <Route path="/basics" element={<CricketBasicsPage />} />
              <Route path="/players" element={<PlayersPage />} />
              <Route path="/tournaments" element={<TournamentsPage />} />
              <Route path="/records" element={<RecordsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/saved" element={<SavedArticlesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </BookmarkProvider>
  );
}
