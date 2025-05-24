'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from './CtaSection';

interface BlogPostDetailProps {
  slug: string;
}

export default function BlogPostDetail({ slug }: BlogPostDetailProps) {
  // This would typically fetch blog data based on the slug
  // For now, we'll use static data matching the figma content
  console.log('Blog slug:', slug); // Prevent unused parameter warning
  
  return (
    <main className="min-h-screen bg-zinc-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-[#1D1E55] rounded-b-4xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="p-2.5 flex flex-col items-center gap-12 overflow-hidden">
              {/* Header Section */}
              <div className="max-w-[906px] p-2.5 flex flex-col items-center gap-4 overflow-hidden">
                <div className="flex flex-col items-center gap-2.5">
                  <h1 className="max-w-[906px] text-center text-indigo-50 text-4xl md:text-5xl font-semibold font-['Manrope'] leading-[55px] md:leading-[69.60px] tracking-wide">
                    5 Ways to Streamline Your Finance Ops with Penthry
                  </h1>
                </div>
                <p className="max-w-[662px] text-center text-gray-400 text-lg md:text-xl font-normal font-['Manrope'] leading-6 md:leading-7">
                  Explore practical ways to reduce overhead and automate recurring payments.
                </p>
              </div>

              {/* Hero Image Section */}
              <div className="w-full max-w-[1000px] h-[500px] p-2.5 relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/bp1.jpg"
                  alt="Finance Operations with Penthry"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="bg-white self-center">
        <div className="self-stretch flex flex-col justify-start items-center gap-12 py-12">
          <div className="w-full max-w-[720px] flex flex-col justify-start items-start gap-12">
            {/* Introduction */}
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch justify-start text-zinc-500 text-xl font-normal font-['Manrope'] leading-7">
                Managing finances shouldn&apos;t be complicated. Yet, for many growing businesses, financial processes become time-consuming, error-prone, and siloed. Penthry is designed to simplify the chaos—bringing automation, clarity, and efficiency to your finance operations.<br/><br/>Let&apos;s dive into five key ways Penthry helps streamline your finance operations and empower your team to focus on what truly matters: growth.
              </div>
              <div className="self-stretch h-px bg-zinc-300" />
            </div>

            {/* Introduction Section */}
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start text-zinc-800 text-3xl font-semibold font-['Manrope'] leading-10">
                Introduction
              </div>
              <div className="self-stretch justify-start text-zinc-500 text-lg font-normal font-['Manrope'] leading-relaxed">
                Managing finances shouldn&apos;t be complicated. Yet, for many growing businesses, financial processes become time-consuming, error-prone, and siloed. Penthry is designed to simplify the chaos—bringing automation, clarity, and efficiency to your finance operations.<br/><br/>Let&apos;s dive into five key ways Penthry helps streamline your finance operations and empower your team to focus on what truly matters: growth.
              </div>
            </div>

            {/* Content Image */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch h-[480px] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/bp2.jpg"
                  alt="Financial dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="self-stretch justify-start">
                <span className="text-zinc-500 text-sm font-normal font-['Manrope'] leading-tight">Image courtesy of Laura Davidson via </span>
                <span className="text-zinc-500 text-sm font-normal font-['Manrope'] underline leading-tight">Unsplash</span>
              </div>
            </div>

            {/* Quote Section */}
            <div className="self-stretch inline-flex justify-start items-start gap-5">
              <div className="w-0.5 self-stretch bg-indigo-400" />
              <div className="flex-1 py-2 inline-flex flex-col justify-start items-start gap-8">
                <div className="self-stretch justify-start text-zinc-800 text-2xl font-medium font-['Inter'] leading-9">
                  &quot;Penthry is designed to simplify the chaos—bringing automation, clarity, and efficiency to your finance operations.&quot;
                </div>
                <div className="self-stretch justify-start text-zinc-500 text-base font-normal font-['Manrope'] leading-normal">
                  — Ijeoma Candy Obi, Product Designer
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-zinc-800 text-2xl font-semibold font-['Manrope'] leading-loose">
                1. Automate Recurring Payments
              </div>
              <div className="self-stretch justify-start text-zinc-500 text-lg font-normal font-['Manrope'] leading-7">
                Say goodbye to manual entries and missed payment cycles. With Penthry&apos;s automation tools, you can schedule recurring salaries, vendor payments, and subscription expenses. This not only improves consistency but ensures accuracy and accountability in every transaction.
              </div>
              <div className="self-stretch justify-start">
                <span className="text-neutral-600 text-lg font-semibold font-['Manrope'] leading-7">Pro Tip: </span>
                <span className="text-neutral-600 text-lg font-normal font-['Manrope'] leading-7">Set up payment workflows tied to approvals, ensuring oversight without bottlenecks.</span>
              </div>
            </div>

            {/* Content Image 2 */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch h-[480px] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/bp3.jpg"
                  alt="Automated payments dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="self-stretch justify-start">
                <span className="text-zinc-500 text-sm font-normal font-['Manrope'] leading-tight">Image courtesy of Leon via </span>
                <span className="text-zinc-500 text-sm font-normal font-['Manrope'] underline leading-tight">Unsplash</span>
              </div>
            </div>

            {/* Section 2 */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-zinc-800 text-2xl font-semibold font-['Manrope'] leading-loose">
                Real Time Budget Tracking
              </div>
              <div className="self-stretch justify-start text-zinc-500 text-lg font-normal font-['Manrope'] leading-7">
                Track spending in real time. Penthry allows finance teams to set departmental budgets and monitor usage against them. Alerts notify you when you&apos;re nearing thresholds, helping you stay proactive instead of reactive.
              </div>
              <div className="self-stretch justify-start">
                <span className="text-neutral-600 text-lg font-semibold font-['Manrope'] leading-7">Insight: </span>
                <span className="text-neutral-600 text-lg font-normal font-['Manrope'] leading-7">Budget variances are tracked automatically, highlighting areas for optimization.</span>
              </div>
            </div>

            {/* Conclusion */}
            <div className="self-stretch px-8 pt-8 pb-10 bg-zinc-100 rounded-2xl flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start text-zinc-800 text-3xl font-semibold font-['Manrope'] leading-9">
                Conclusion
              </div>
              <div className="self-stretch justify-start text-zinc-500 text-lg font-normal font-['Manrope'] leading-7">
                Financial efficiency isn&apos;t just a goal—it&apos;s a competitive advantage. Penthry helps you move faster, make smarter decisions, and reduce human error, all while maintaining full control over your financial landscape.
              </div>
            </div>

            {/* Tags and Social Sharing */}
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch h-px bg-zinc-300" />
              <div className="self-stretch inline-flex justify-start items-start gap-6">
                <div className="flex-1 flex justify-start items-start gap-2">
                  <div className="mix-blend-multiply flex justify-start items-start">
                    <div className="px-2.5 py-0.5 bg-indigo-50 rounded-2xl flex justify-center items-center">
                      <div className="text-center justify-start text-indigo-400 text-sm font-medium font-['Manrope'] leading-tight">
                        Finance Management
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start gap-3">
                  {/* Copy Link Button */}
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      // Optional: Add a toast notification here
                    }}
                    className="px-4 py-2.5 cursor-pointer bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline-1 outline-offset-[-1px] outline-gray-400 flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="w-5 h-5 relative overflow-hidden">
                      <svg className="w-full h-full text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.67} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="justify-start text-neutral-600 text-sm font-medium font-['Inter'] leading-tight">Copy link</div>
                  </button>

                  {/* Social Share Buttons */}
                  <button className="p-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline-1 outline-offset-[-1px] outline-gray-400 flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-5 h-5 relative overflow-hidden">
                      <svg className="w-full h-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                  </button>

                  <button className="p-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-400 flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-5 h-5 relative overflow-hidden">
                      <svg className="w-full h-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                  </button>

                  <button className="p-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-400 flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-5 h-5 relative overflow-hidden">
                      <svg className="w-full h-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More from Blog Section */}
      <section className="bg-white">
        <div className="self-stretch px-6 py-12 inline-flex justify-between items-start overflow-hidden">
          <div className="w-full max-w-[500px] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch justify-start text-zinc-600 text-xl font-normal font-['Manrope'] leading-7">
                Latest
              </div>
              <div className="self-stretch justify-start text-zinc-800 text-4xl font-semibold font-['Manrope'] leading-[58px]">
                From the blog
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-start gap-8">
            {/* Blog Post 1 */}
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
              <div className="self-stretch h-72 rounded-tl-2xl rounded-tr-2xl shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.25)] relative overflow-hidden">
                <Image
                  src="/images/bp1.jpg"
                  alt="Finance Management"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-b from-black/0 to-black/40">
                  <div className="self-stretch h-px bg-white/50 backdrop-blur-md" />
                  <div className="self-stretch p-6 bg-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch flex flex-col justify-start items-start gap-6">
                      <div className="justify-start text-white text-sm font-semibold font-['Manrope'] leading-tight">
                        Finance Management
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch justify-start text-neutral-700 text-2xl font-semibold font-['Manrope'] leading-9">
                    5 Ways to Streamline Your Finance Ops with Penthry
                  </div>
                  <div className="self-stretch justify-start text-zinc-500 text-base font-normal font-['Manrope'] leading-normal">
                    Explore practical ways to reduce overhead and automate recurring payments.
                  </div>
                </div>
                <Link href="/blog/streamline-finance-ops" className="rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden hover:gap-3 transition-all duration-200 group">
                  <div className="justify-start text-teal-500 text-base font-medium font-['Manrope']">Read More</div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <svg className="w-full h-full text-teal-500 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
              <div className="self-stretch h-72 rounded-tl-2xl rounded-tr-2xl shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.25)] relative overflow-hidden">
                <Image
                  src="/images/bp2.jpg"
                  alt="HR Tools"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-b from-black/0 to-black/40">
                  <div className="self-stretch h-px bg-white/50 backdrop-blur-md" />
                  <div className="self-stretch p-6 bg-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch flex flex-col justify-start items-start gap-6">
                      <div className="justify-start text-white text-sm font-semibold font-['Manrope'] leading-tight">
                        HR Tools
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch justify-start text-neutral-700 text-2xl font-semibold font-['Manrope'] leading-9">
                    Building Better HR Workflows with Penthry
                  </div>
                  <div className="self-stretch justify-start text-zinc-500 text-base font-normal font-['Manrope'] leading-normal">
                    Discover how to automate performance tracking and improve team visibility.
                  </div>
                </div>
                <Link href="/blog/better-hr-workflows" className="rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden hover:gap-3 transition-all duration-200 group">
                  <div className="justify-start text-teal-500 text-base font-medium font-['Manrope']">Read More</div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <svg className="w-full h-full text-teal-500 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CtaSection/>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Footer />
      </div>
    </main>
  );
} 