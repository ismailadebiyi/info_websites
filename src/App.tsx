import { useState } from 'react';
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValuePillars from "./components/ValuePillars";
import About from "./components/About";
import Services from "./components/Services";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ValuePillars />
        <About />
        <Services />
        <News />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      
      {/* Admin Panel - Hidden behind authentication */}
      <Unauthenticated>
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="bg-martimma-blue text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            title="Admin Login"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </button>
        </div>
        
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Admin Login</h3>
              <button
                onClick={() => document.getElementById('admin-modal')?.classList.add('hidden')}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SignInForm />
          </div>
        </div>
      </Unauthenticated>

      <Authenticated>
        <div className="fixed top-4 right-4 z-50">
          <SignOutButton />
        </div>
      </Authenticated>
    </div>
  );
}
