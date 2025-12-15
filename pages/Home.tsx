import React from 'react';
import Scene from '../components/Scene';
import { ArrowRight, Coffee, Globe, Bean, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden relative">
      {/* 3D Scene Background */}
      <Scene />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-coffee-50 to-coffee-100 -z-20" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-coffee-200 text-coffee-900 rounded-full text-xs font-bold tracking-widest uppercase">
              The Basics
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-coffee-950 leading-[1.1]">
              Coffee Beans <br />
              <span className="text-coffee-600 italic">Overview</span>
            </h1>
            <p className="text-lg md:text-xl text-coffee-800/80 leading-relaxed max-w-lg">
              Explore the seed behind the drink. From the cherry to the cup, discover what makes coffee the world's favorite ritual.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/brew" className="bg-coffee-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-coffee-900 transition-all flex items-center gap-2 shadow-xl shadow-coffee-900/10">
                How to Brew <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          {/* Spacer for 3D Bean */}
          <div className="hidden md:block h-[500px]" />
        </div>
      </section>

      {/* What Are Coffee Beans? & Why Drink */}
      <section className="py-24 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          
          {/* What Are Coffee Beans? */}
          <div className="space-y-6">
            <div className="bg-coffee-100 w-12 h-12 flex items-center justify-center rounded-xl text-coffee-800 mb-4">
              <Bean size={24} />
            </div>
            <h2 className="font-serif text-4xl font-bold text-coffee-900">What Are Coffee Beans?</h2>
            <div className="prose prose-lg text-coffee-700 leading-relaxed">
              <p>
                Coffee beans are the seeds of coffee cherries that grow on coffee plants.
                After harvesting, the beans are dried, roasted, and ground to make coffee.
                Although we call them "beans," they are actually seeds from a fruit.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1552346988-18632616a67f?q=80&w=800&auto=format&fit=crop" 
              alt="Coffee Cherries" 
              className="rounded-2xl shadow-xl w-full h-64 object-cover mt-6"
            />
          </div>

          {/* Why Do People Drink Coffee? */}
          <div className="space-y-6 md:mt-24">
            <div className="bg-coffee-100 w-12 h-12 flex items-center justify-center rounded-xl text-coffee-800 mb-4">
              <Coffee size={24} />
            </div>
            <h2 className="font-serif text-4xl font-bold text-coffee-900">Why Do People Drink Coffee?</h2>
            <div className="prose prose-lg text-coffee-700 leading-relaxed">
              <p>
                People all over the world drink coffee every day.
                Some people enjoy coffee for its rich aroma and deep flavor, while others drink it to feel more awake.
              </p>
              <p className="mt-4">
                Coffee is also part of daily life and culture.
                Many people drink coffee in the morning, during work breaks, or while relaxing with friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Coffee Beans & Map */}
      <section className="py-24 bg-coffee-900 text-coffee-50 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Types of Coffee Beans</h2>
            <p className="text-coffee-200 text-lg leading-relaxed">
              There are two main types of coffee beans: Arabica and Robusta. Understanding the difference is the first step to finding your perfect cup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-coffee-800/50 p-8 rounded-2xl border border-coffee-700">
              <h3 className="font-serif text-2xl font-bold text-coffee-100 mb-4">Arabica</h3>
              <p className="text-coffee-300 leading-relaxed">
                Arabica beans have a smooth aroma and mild acidity.
                They are popular and often considered high quality. They grow at higher altitudes and require more care.
              </p>
            </div>
            <div className="bg-coffee-800/50 p-8 rounded-2xl border border-coffee-700">
              <h3 className="font-serif text-2xl font-bold text-coffee-100 mb-4">Robusta</h3>
              <p className="text-coffee-300 leading-relaxed">
                Robusta beans have a stronger, more bitter taste and contain more caffeine.
                They are commonly used for espresso and instant coffee due to their hardiness and rich crema.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl mb-24">
            <div className="p-6 bg-coffee-100 border-b border-coffee-200">
              <h3 className="font-serif text-2xl font-bold text-coffee-900 flex items-center gap-2">
                <Globe size={24} /> Coffee Beans Comparison
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-coffee-50 text-coffee-800 text-sm uppercase tracking-wider">
                    <th className="p-4 md:p-6 border-b border-coffee-200">Type</th>
                    <th className="p-4 md:p-6 border-b border-coffee-200">Taste</th>
                    <th className="p-4 md:p-6 border-b border-coffee-200">Aroma</th>
                    <th className="p-4 md:p-6 border-b border-coffee-200">Caffeine</th>
                    <th className="p-4 md:p-6 border-b border-coffee-200">Main Countries</th>
                  </tr>
                </thead>
                <tbody className="text-coffee-900">
                  <tr className="border-b border-coffee-100 hover:bg-coffee-50/50 transition-colors">
                    <td className="p-4 md:p-6 font-bold font-serif text-lg">Arabica</td>
                    <td className="p-4 md:p-6">Mild, acidic</td>
                    <td className="p-4 md:p-6">Smooth, rich</td>
                    <td className="p-4 md:p-6"><span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold">Low</span></td>
                    <td className="p-4 md:p-6 font-medium text-coffee-700">Brazil, Ethiopia</td>
                  </tr>
                  <tr className="hover:bg-coffee-50/50 transition-colors">
                    <td className="p-4 md:p-6 font-bold font-serif text-lg">Robusta</td>
                    <td className="p-4 md:p-6">Bitter</td>
                    <td className="p-4 md:p-6">Strong</td>
                    <td className="p-4 md:p-6"><span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">High</span></td>
                    <td className="p-4 md:p-6 font-medium text-coffee-700">Vietnam, India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* World Map Section */}
          <div className="relative rounded-2xl overflow-hidden bg-coffee-800/80 border border-coffee-700 p-8">
             <h3 className="font-serif text-center text-2xl font-bold text-white mb-8">Major Origins</h3>
             <div className="relative w-full aspect-[16/9] bg-[#2a3b4c] rounded-xl overflow-hidden shadow-inner">
                {/* Simplified SVG Map Background */}
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                  alt="World Map" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 invert"
                />
                
                {/* Pins */}
                {/* Brazil */}
                <div className="absolute top-[65%] left-[32%] group">
                  <MapPin className="text-coffee-400 fill-coffee-400 animate-bounce" size={24} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-coffee-900 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Brazil (Arabica)</span>
                </div>

                {/* Ethiopia */}
                <div className="absolute top-[55%] left-[56%] group">
                  <MapPin className="text-coffee-400 fill-coffee-400 animate-bounce delay-100" size={24} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-coffee-900 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Ethiopia (Arabica)</span>
                </div>

                {/* India */}
                <div className="absolute top-[48%] left-[70%] group">
                  <MapPin className="text-orange-400 fill-orange-400 animate-bounce delay-200" size={24} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-coffee-900 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">India (Robusta)</span>
                </div>

                {/* Vietnam */}
                <div className="absolute top-[52%] left-[78%] group">
                  <MapPin className="text-orange-400 fill-orange-400 animate-bounce delay-300" size={24} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-coffee-900 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Vietnam (Robusta)</span>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-coffee-50 relative z-10 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-coffee-900 mb-6">Ready to Taste the Difference?</h2>
          <p className="text-coffee-700 text-lg mb-8">
            Now that you know the beans, learn how to extract their best flavors.
          </p>
          <Link to="/brew" className="inline-flex items-center gap-2 bg-coffee-800 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-coffee-900 hover:scale-105 transition-all shadow-xl">
            Learn How to Brew Coffee <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;