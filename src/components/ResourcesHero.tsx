'use client';
import React from 'react';
import Image from 'next/image';

export default function ResourcesHero() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#1D1E55] rounded-b-4xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-2.5 flex flex-col items-center gap-12 overflow-hidden">
            {/* Header Section */}
            <div className="max-w-[906px] p-2.5 flex flex-col items-center gap-4 overflow-hidden">
              <div className="flex flex-col items-center gap-2.5">
                <h1 className="max-w-[906px] text-center text-indigo-50 text-4xl md:text-5xl font-semibold font-['Manrope'] leading-[55px] md:leading-[69.60px] tracking-wide">
                  Your Knowledge Hub
                </h1>
              </div>
              <p className="max-w-[662px] text-center text-gray-400 text-lg md:text-xl font-normal font-['Manrope'] leading-6 md:leading-7">
                Learn how to get the most out of Penthry—explore tips, guides, webinars, and expert insights built to help your team thrive.
              </p>
            </div>

            {/* Image Gallery Section */}
            <div className="w-full max-w-[848px] relative">
              {/* Desktop Layout - Absolute positioned cards with animations */}
              <div className="hidden lg:block w-full h-80 relative overflow-hidden">
                {/* First Image Card */}
                <div className="w-48 h-64 absolute left-0 top-0  rounded-3xl p-2.5 overflow-hidden animate-bounce" 
                     style={{
                       animation: 'float 6s ease-in-out infinite',
                       animationDelay: '0s'
                     }}>
                  <div className="w-full h-full relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/res1.jpg"
                      alt="Resource card 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Second Image Card */}
                <div className="w-48 h-64 absolute left-[216px] top-[58px]  rounded-3xl p-2.5 overflow-hidden"
                     style={{
                       animation: 'float 4s ease-in-out infinite',
                       animationDelay: '1s'
                     }}>
                  <div className="w-full h-full relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/res2.jpg"
                      alt="Resource card 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Third Image Card */}
                <div className="w-48 h-64 absolute left-[432px] top-0  rounded-3xl p-2.5 overflow-hidden"
                     style={{
                       animation: 'float 5s ease-in-out infinite',
                       animationDelay: '2s'
                     }}>
                  <div className="w-full h-full relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/res3.jpg"
                      alt="Resource card 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Fourth Image Card */}
                <div className="w-48 h-64 absolute left-[648px] top-[58px]  rounded-3xl p-2.5 overflow-hidden"
                     style={{
                       animation: 'float 7s ease-in-out infinite',
                       animationDelay: '0.5s'
                     }}>
                  <div className="w-full h-full relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/res4.jpg"
                      alt="Resource card 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Responsive Grid with animations */}
              <div className="block lg:hidden w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className=" rounded-3xl p-2.5 aspect-[3/4]"
                       style={{
                         animation: 'float 5s ease-in-out infinite',
                         animationDelay: '0s'
                       }}>
                    <div className="w-full h-full relative rounded-2xl overflow-hidden">
                      <Image
                        src="/images/res1.jpg"
                        alt="Resource card 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-2.5 aspect-[3/4]"
                       style={{
                         animation: 'float 6s ease-in-out infinite',
                         animationDelay: '1.5s'
                       }}>
                    <div className="w-full h-full relative rounded-2xl overflow-hidden">
                      <Image
                        src="/images/res2.jpg"
                        alt="Resource card 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-2.5 aspect-[3/4]"
                       style={{
                         animation: 'float 4.5s ease-in-out infinite',
                         animationDelay: '3s'
                       }}>
                    <div className="w-full h-full relative rounded-2xl overflow-hidden">
                      <Image
                        src="/images/res3.jpg"
                        alt="Resource card 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-2.5 aspect-[3/4]"
                       style={{
                         animation: 'float 5.5s ease-in-out infinite',
                         animationDelay: '2.5s'
                       }}>
                    <div className="w-full h-full relative rounded-2xl overflow-hidden">
                      <Image
                        src="/images/res4.jpg"
                        alt="Resource card 4"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
} 