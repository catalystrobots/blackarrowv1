import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cog, Printer, Rocket, Cpu, Zap, Bot } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://videos.ctfassets.net/23aumh6u8s0i/4VZlGgSnwonL6IBfxNkjl4/c4e8d7f671c24e1a5888f7c7b36b0824/hero-background.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Engineering Dreams<br />Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              From robotics prototypes to custom mechanical parts, we're your partner in innovation.
              Fast turnaround, precision manufacturing, and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate('/quote')}
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Cog className="w-5 h-5" />
                <span>Request CNC Quote</span>
              </button>
              <button
                onClick={() => navigate('/instant-quote')}
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Printer className="w-5 h-5" />
                <span>Get Instant 3D Print Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Perfect for Your Next Project</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Rocket}
              title="Robotics Prototypes"
              description="From custom brackets to specialized end effectors, we help bring your robotics projects to life with precision parts."
            />
            <FeatureCard
              icon={Bot}
              title="Custom Automation"
              description="Building an automated system? Get custom-designed components that perfectly fit your specifications."
            />
            <FeatureCard
              icon={Cpu}
              title="Rapid Prototyping"
              description="Test your ideas quickly with our fast turnaround times on both CNC and 3D printed parts."
            />
            <FeatureCard
              icon={Cog}
              title="Precision CNC Machining"
              description="High-precision parts machined from aluminum, steel, and other metals with tolerances down to 0.001 inches."
            />
            <FeatureCard
              icon={Printer}
              title="Advanced 3D Printing"
              description="Professional-grade 3D printing with a wide range of materials including PLA, ABS, PETG, and Nylon."
            />
            <FeatureCard
              icon={Zap}
              title="Quick Turnaround"
              description="Get your parts fast with our streamlined quoting and manufacturing process."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're working on a robotics competition, a startup prototype, or an engineering project,
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => navigate('/quote')}
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Request CNC Quote
            </button>
            <button
              onClick={() => navigate('/instant-quote')}
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Get Instant 3D Print Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}