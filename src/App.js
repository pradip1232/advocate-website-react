import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AppConfigProvider } from './context/AppConfigContext';
import Layout from "./components/Layout";
import DashboardLayout from './layouts/DashboardLayout';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Expertise from "./Pages/Expertise";
import OurTeam from "./Pages/OurTeam";
import NewsAndInsights from "./Pages/NewsAndInsights";
import Careers from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";
import CriminalLawDetails from "./Pages/CriminalLawDetails";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Pages/NotFound";
import ErrorBoundary from './components/ErrorBoundary';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

function App() {
  const isLoggedIn = !!localStorage.getItem("admin"); 

  return (
    <ErrorBoundary>
      <AppConfigProvider>
        <Router>
          <Routes>
            {/* Public Pages with Header & Footer */}
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/expertise" element={<Expertise />} />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/news-and-insights" element={<NewsAndInsights />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/criminal-law-details/:id" element={<CriminalLawDetails />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              }
            />

            {/* Auth Pages */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Dashboard Pages */}
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />}
            >
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </AppConfigProvider>
    </ErrorBoundary>
  );
}

export default App;
