'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white flex justify-start items-center overflow-hidden">
      {/* Left Image Section - Only visible on large screens */}
      <div className="hidden lg:flex flex-1 h-screen relative">
        <div className="absolute inset-0 bg-indigo-300/25" />
        <Image
          src="/images/login.jpg"
          alt="Login background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-indigo-300/25" />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:flex-1 self-stretch px-10 py-12 inline-flex flex-col justify-start items-center gap-12 overflow-hidden">
        {/* Header Navigation */}
        <div className="self-stretch px-2.5 py-1 inline-flex justify-between items-start overflow-hidden">
          <Link href="/" className="rounded-lg flex justify-center items-center gap-1 overflow-hidden hover:gap-2 transition-all duration-200">
            <div className="w-5 h-5 relative overflow-hidden">
              <svg className="w-full h-full text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="justify-start text-neutral-600 text-sm font-medium font-['Manrope']">Back</div>
          </Link>
          <Link href="/signup" className="text-center justify-start text-teal-500 text-sm font-semibold font-['Manrope'] leading-tight hover:text-teal-600 transition-colors duration-200">
            Get Started
          </Link>
        </div>

        {/* Main Form Container */}
        <div className="w-full max-w-[500px] p-6 flex flex-col justify-start items-start gap-14 overflow-hidden">
          {/* Header Section */}
          <div className="self-stretch flex flex-col justify-start items-center gap-6 overflow-hidden">
            {/* Logo */}
            <div className="inline-flex justify-center items-center gap-2.5 overflow-hidden">
              <Image
                src="/logoBlack.svg"
                alt="Penthry Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <div className="w-full max-w-[452px] text-center justify-start text-zinc-800 text-3xl font-semibold font-['Manrope'] leading-10">
                Login to Penthry
              </div>
              <div className="w-full max-w-[452px] text-center justify-start text-zinc-500 text-base font-normal font-['Manrope'] leading-normal">
                Welcome back. Let&apos;s get you into your workspace.
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="self-stretch  flex flex-col justify-start items-center gap-8">
            <div className="w-full max-w-[452px] flex-1 flex-col justify-start items-center gap-4">
              {/* Input Fields */}
              <div className="flex flex-col justify-start items-start gap-6">
                {/* Email Input */}
                <div className="w-full max-w-[452px] flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-offset-[-1px] outline-gray-400 inline-flex justify-start items-center gap-2 overflow-hidden focus-within:outline-teal-500 focus-within:outline-2 transition-all duration-200">
                      <div className="flex-1 flex justify-start items-center gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your work email"
                          required
                          className="flex-1 text-zinc-800 text-base font-normal font-['Manrope'] leading-normal bg-transparent border-none outline-none placeholder:text-zinc-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="w-full max-w-[452px] flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch  flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch px-3.5 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-offset-[-1px] outline-gray-400 inline-flex justify-start items-center gap-2 overflow-hidden focus-within:outline-teal-500 focus-within:outline-2 transition-all duration-200">
                      <div className="flex-1 flex justify-start items-center gap-2">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                          className="flex-1 text-zinc-800 text-base font-normal font-['Manrope'] w-full leading-normal bg-transparent border-none outline-none placeholder:text-zinc-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="w-5 h-5 relative overflow-hidden text-zinc-500 hover:text-zinc-700 transition-colors duration-200"
                        >
                          {showPassword ? (
                            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          ) : (
                            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button and Forgot Password */}
              <div className="self-stretch flex flex-col justify-start items-start mt-8 gap-4">
                <button
                  type="submit"
                  className="w-full max-w-[452px] h-11 px-6 py-3 bg-teal-400 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-teal-500 transition-colors duration-200"
                >
                  <div className="justify-start text-zinc-800 text-sm font-medium font-['Manrope']">Let&apos;s Go</div>
                </button>
                <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                  <Link href="/forgot-password" className="justify-start text-teal-500 text-sm font-medium font-['Manrope'] hover:text-teal-600 transition-colors duration-200">
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="self-stretch inline-flex justify-center items-center gap-3">
              <div className="flex-1 h-px relative bg-zinc-300" />
              <div className="text-center justify-start text-zinc-500 text-xs font-medium font-['Manrope'] leading-none">OR</div>
              <div className="flex-1 h-px relative bg-zinc-300" />
            </div>

            {/* Social Login Buttons */}
            <div className="self-stretch flex flex-col justify-start items-start gap-6 overflow-hidden">
              {/* Google Login */}
              <button
                type="button"
                className="self-stretch px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-400 inline-flex justify-center items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-6 h-6 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="justify-start text-neutral-600 text-base font-medium font-['Manrope'] leading-normal">Continue with Google</div>
              </button>

              {/* Microsoft Login */}
              <button
                type="button"
                className="self-stretch px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-offset-[-1px] outline-gray-400 inline-flex justify-center items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-5 h-5 relative">
                  <svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f25022" d="M1 1h10v10H1z"/>
                    <path fill="#00a4ef" d="M1 12h10v10H1z"/>
                    <path fill="#7fba00" d="M12 1h10v10H12z"/>
                    <path fill="#ffb900" d="M12 12h10v10H12z"/>
                  </svg>
                </div>
                <div className="justify-start text-neutral-600 text-base font-medium font-['Manrope'] leading-normal">Continue with Microsoft</div>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="text-center justify-start text-neutral-600 text-sm font-medium font-['Manrope'] leading-tight">Don&apos;t have an account?</div>
              <Link href="/signup" className="text-center justify-start text-teal-500 text-sm font-semibold font-['Manrope'] leading-tight hover:text-teal-600 transition-colors duration-200">
                Sign up instead
              </Link>
            </div>
          </form>

          {/* Security Notice */}
          <div className="self-stretch py-2 bg-zinc-100 rounded-lg inline-flex justify-center items-center gap-2.5">
            <div className="w-full max-w-[452px] text-center justify-start text-zinc-600 text-xs font-medium font-['Manrope'] leading-none">
              We&apos;ll never spam you. Your data stays safe.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 