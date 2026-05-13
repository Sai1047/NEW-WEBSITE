/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectSlider } from './components/ProjectSlider';
import { Mission } from './components/Mission';
import { AboutExperience } from './components/AboutExperience';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { TeamAndCapabilities } from './components/TeamAndCapabilities';
import { ContactAndFooter } from './components/ContactAndFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background ambient stars/particles effect (static layer for now) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main>
          <div id="product"><Hero /></div>
          <div id="solution"><ProjectSlider /></div>
          <Mission />
          <div id="about"><AboutExperience /></div>
          <div id="service"><Services /></div>
          <WhyChoose />
          <div id="outsourcing"><TeamAndCapabilities /></div>
          <div id="contact"><ContactAndFooter /></div>
        </main>
      </div>
    </div>
  );
}

