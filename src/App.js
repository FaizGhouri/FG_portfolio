import React, { useState } from 'react';
import './App.css';
import WebHeader from './Components/Header/Header';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Project";
import Contact from "./Pages/Contact/Contact";
import Loader from './Components/Loader/Loader';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <Analytics />

      {!loading && (
        <div className="App space-bg">
          <WebHeader />

          {/* We use main for standard smooth scrolling */}
          <main className="flex flex-col">
            <Home />
            <About />
            <Project />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="py-8 text-center border-t border-white/5 bg-space-900/50 backdrop-blur-md relative z-10 w-full mt-20">
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
              © {new Date().getFullYear()} Faiz Ghouri. System Online.
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
