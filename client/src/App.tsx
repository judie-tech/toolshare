import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BrowseToolsPage from './pages/BrowseToolsPage';
import LendToolPage from './pages/LendToolPage';
import ToolDetailPage from './pages/ToolDetailPage';
import DashboardPage from './pages/DashboardPage';
import NotificationsPage from './pages/NotificationsPage';
import HowItWorksPage from './pages/HowItWorksPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tools" element={<BrowseToolsPage />} />
              <Route path="/tools/:id" element={<ToolDetailPage />} />
              <Route path="/lend" element={<LendToolPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/ussd" element={<DashboardPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;