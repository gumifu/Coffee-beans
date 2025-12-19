'use client';

import React from 'react';
import { Clock, Thermometer, Droplets, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BrewGuide() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-coffee-900 mb-6">How to Brew Coffee</h1>
        <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
          The way you brew changes the taste. A pour over highlights acidity, while a french press creates a rich body.
        </p>
      </div>

      {/* Methods Comparison */}
      <section className="bg-coffee-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Pour Over Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-coffee-100 hover:shadow-xl transition-all">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-coffee-100">
              <Image
                src="https://images.unsplash.com/photo-1517080319016-52c676d18a1a?q=80&w=600&auto=format&fit=crop"
                alt="Pour Over"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-2">Pour Over</h2>
            <p className="text-coffee-500 font-medium uppercase tracking-wider text-sm mb-4">V60 / Kalita / Chemex</p>
            <p className="text-coffee-700 leading-relaxed mb-6">
              Produces a clean, nuanced cup that highlights acidity and floral notes. Best for high-quality light roast Arabica beans.
            </p>
            <a href="#recipe-pour-over" className="text-coffee-800 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Recipe <ChevronDown size={16} />
            </a>
          </div>

          {/* French Press Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-coffee-100 hover:shadow-xl transition-all">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-coffee-100">
              <Image
                src="https://images.unsplash.com/photo-1502421715651-7c98083833d7?q=80&w=600&auto=format&fit=crop"
                alt="French Press"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-2">French Press</h2>
            <p className="text-coffee-500 font-medium uppercase tracking-wider text-sm mb-4">Plunger Pot</p>
            <p className="text-coffee-700 leading-relaxed mb-6">
              Full immersion brewing that results in a heavy body and rich mouthfeel. Great for those who love bold flavors and want a simple process.
            </p>
            <a href="#recipe-french-press" className="text-coffee-800 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Recipe <ChevronDown size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Recipe: Pour Over */}
      <section id="recipe-pour-over" className="py-20 max-w-5xl mx-auto px-6 border-b border-coffee-100">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="order-2 md:order-1">
             <div className="flex items-center gap-2 mb-2 text-coffee-500 font-semibold uppercase tracking-widest text-sm">
              Method 01
            </div>
            <h2 className="font-serif text-4xl font-bold text-coffee-900 mb-6">V60 Pour Over</h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-coffee-50 p-4 rounded-lg text-center">
                <Clock className="mx-auto text-coffee-600 mb-2" size={20} />
                <span className="block font-bold text-coffee-900">3:00</span>
                <span className="text-xs text-coffee-500 uppercase">Time</span>
              </div>
              <div className="bg-coffee-50 p-4 rounded-lg text-center">
                <Thermometer className="mx-auto text-coffee-600 mb-2" size={20} />
                <span className="block font-bold text-coffee-900">93°C</span>
                <span className="text-xs text-coffee-500 uppercase">Temp</span>
              </div>
              <div className="bg-coffee-50 p-4 rounded-lg text-center">
                <Droplets className="mx-auto text-coffee-600 mb-2" size={20} />
                <span className="block font-bold text-coffee-900">1:16</span>
                <span className="text-xs text-coffee-500 uppercase">Ratio</span>
              </div>
            </div>

            {/* Steps */}
            <ol className="space-y-8 relative border-l-2 border-coffee-100 ml-4 pl-8">
              <li className="relative">
                <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-coffee-800 text-white flex items-center justify-center font-bold text-sm shadow-md">1</span>
                <h3 className="font-serif text-xl font-bold text-coffee-800 mb-2">The Prep</h3>
                <p className="text-coffee-600">Weigh 20g of coffee. Grind to a medium-fine consistency (like sea salt). Rinse filter.</p>
              </li>
              <li className="relative">
                 <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-coffee-800 text-white flex items-center justify-center font-bold text-sm shadow-md">2</span>
                <h3 className="font-serif text-xl font-bold text-coffee-800 mb-2">The Bloom</h3>
                <p className="text-coffee-600">Pour 60g of hot water aggressively. Let it sit for 45 seconds to release gas (blooming).</p>
              </li>
              <li className="relative">
                 <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-coffee-800 text-white flex items-center justify-center font-bold text-sm shadow-md">3</span>
                <h3 className="font-serif text-xl font-bold text-coffee-800 mb-2">The Pour</h3>
                <p className="text-coffee-600">Slowly pour remaining water in circles up to 320g total weight. Finish pouring by 1:45.</p>
              </li>
              <li className="relative">
                 <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-coffee-800 text-white flex items-center justify-center font-bold text-sm shadow-md">4</span>
                <h3 className="font-serif text-xl font-bold text-coffee-800 mb-2">The Wait</h3>
                <p className="text-coffee-600">Wait for the water to drain completely. Enjoy your clean, aromatic cup.</p>
              </li>
            </ol>
          </div>
           <div className="order-1 md:order-2 h-full">
             <div className="relative w-full h-[600px] rounded-2xl shadow-2xl overflow-hidden sticky top-24">
               <Image
                 src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=800&auto=format&fit=crop"
                 alt="Pouring V60"
                 fill
                 className="object-cover"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Recipe: French Press */}
      <section id="recipe-french-press" className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
           <div>
             <div className="relative w-full h-[600px] rounded-2xl shadow-2xl overflow-hidden sticky top-24">
               <Image
                 src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
                 alt="French Press"
                 fill
                 className="object-cover"
               />
             </div>
          </div>
          <div>
             <div className="flex items-center gap-2 mb-2 text-coffee-500 font-semibold uppercase tracking-widest text-sm">
              Method 02
            </div>
            <h2 className="font-serif text-4xl font-bold text-coffee-900 mb-6">Classic French Press</h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-coffee-50 p-4 rounded-lg text-center">
                <Clock className="mx-auto text-coffee-600 mb-2" size={20} />
                <span className="block font-bold text-coffee-900">4:00</span>
                <span className="text-xs text-coffee-500 uppercase">Time</span>
              </div>
              <div className="bg-coffee-50 p-4 rounded-lg text-center">
                <Thermometer className="mx-auto text-coffee-600 mb-2" size={20} />
                <span className="block font-bold text-coffee-900">95°C</span>
                <span className="text-xs text-coffee-500 uppercase">Temp</span>
              </div>
              <div className="bg-coffee-50 p-4 rounded-lg text-center">
                <Droplets className="mx-auto text-coffee-600 mb-2" size={20} />
                <span className="block font-bold text-coffee-900">1:15</span>
                <span className="text-xs text-coffee-500 uppercase">Ratio</span>
              </div>
            </div>

            {/* Steps */}
            <ol className="space-y-8 relative border-l-2 border-coffee-100 ml-4 pl-8">
              <li className="relative">
                 <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-coffee-800 text-white flex items-center justify-center font-bold text-sm shadow-md">1</span>
                <h3 className="font-serif text-xl font-bold text-coffee-800 mb-2">Coarse Grind</h3>
                <p className="text-coffee-600">Use 30g of coffee ground coarsely (like breadcrumbs). Put it in the press.</p>
              </li>
              <li className="relative">
                 <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-coffee-800 text-white flex items-center justify-center font-bold text-sm shadow-md">2</span>
                <h3 className="font-serif text-xl font-bold text-coffee-800 mb-2">Add Water</h3>
                <p className="text-coffee-600">Pour 450g of hot water. Make sure all grounds are wet.</p>
              </li>
              <li className="relative">
                 <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-coffee-800 text-white flex items-center justify-center font-bold text-sm shadow-md">3</span>
                <h3 className="font-serif text-xl font-bold text-coffee-800 mb-2">Steep</h3>
                <p className="text-coffee-600">Place the lid on but don't plunge. Wait 4 minutes.</p>
              </li>
              <li className="relative">
                 <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-coffee-800 text-white flex items-center justify-center font-bold text-sm shadow-md">4</span>
                <h3 className="font-serif text-xl font-bold text-coffee-800 mb-2">Plunge & Serve</h3>
                <p className="text-coffee-600">Gently press the plunger down. Pour immediately to stop extraction.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-coffee-900 text-coffee-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">Tips for Better Coffee</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-coffee-800/50 p-6 rounded-xl border border-coffee-700">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2"><CheckCircle2 className="text-green-400" size={20}/> Grind Fresh</h4>
              <p className="text-coffee-200/80">Coffee loses flavor minutes after grinding. Always grind right before you brew.</p>
            </div>
            <div className="bg-coffee-800/50 p-6 rounded-xl border border-coffee-700">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2"><CheckCircle2 className="text-green-400" size={20}/> Check Water Temp</h4>
              <p className="text-coffee-200/80">Boiling water burns coffee. Wait 30 seconds off boil (aim for 90-96°C).</p>
            </div>
            <div className="bg-coffee-800/50 p-6 rounded-xl border border-coffee-700">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2"><CheckCircle2 className="text-green-400" size={20}/> Use Scales</h4>
              <p className="text-coffee-200/80">Precision is key. Measuring by weight (grams) is much more accurate than spoons.</p>
            </div>
            <div className="bg-coffee-800/50 p-6 rounded-xl border border-coffee-700">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2"><CheckCircle2 className="text-green-400" size={20}/> Quality Beans</h4>
              <p className="text-coffee-200/80">No brewing method can fix bad beans. Buy fresh roasted beans from local roasters.</p>
            </div>
          </div>

           <div className="mt-12">
            <Link href="/" className="inline-block text-coffee-200 border-b border-coffee-200 pb-1 hover:text-white hover:border-white transition-colors">
              Back to Coffee Beans Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


