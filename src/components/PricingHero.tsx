import React from 'react';
import Image from 'next/image';

export default function PricingHero() {
  const PricingCard = ({ 
    price, 
    planName, 
    description, 
    features, 
    buttonText
  }: {
    price: string;
    planName: string;
    description: string;
    features: string[];
    buttonText: string;
  }) => (
    <div className="flex-1 min-w-[320px] max-w-md mx-auto lg:mx-0 bg-indigo-50 rounded-3xl border border-neutral-400 flex flex-col">
      <div className="px-8 pt-10 flex flex-col items-center gap-4">
        <div className="text-center text-indigo-950 text-3xl md:text-4xl font-semibold font-['Manrope'] leading-[48px] md:leading-[58px]">
          {price}
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-center text-indigo-900 text-xl font-semibold font-['Manrope'] leading-7">
            {planName}
          </div>
          <div className="text-center text-indigo-700 text-base font-normal font-['Manrope'] leading-normal">
            {description}
          </div>
        </div>
      </div>
      
      <div className="px-8 pt-8 pb-10 flex flex-col gap-6 flex-grow">
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 flex-shrink-0">
                <Image
                  src="/icons/check.svg"
                  alt="Check mark"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </div>
              <div className="flex-1">
                <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
                  {feature}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-8 pb-8 mt-auto">
        <button className="w-full px-6 py-3 bg-teal-400 rounded-lg flex justify-center items-center hover:bg-teal-500 transition-colors">
          <span className="text-zinc-800 text-base font-medium font-['Manrope']">
            {buttonText}
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <section className="w-full py-20 md:py-32 bg-[#1D1E55] rounded-b-4xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-2.5 flex flex-col items-center gap-12">
            {/* Header Section */}
            <div className="max-w-[906px] p-2.5 flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-2.5">
                <h1 className="max-w-[906px] text-center text-indigo-50 text-4xl md:text-5xl font-semibold font-['Manrope'] leading-[55px] md:leading-[69.60px] tracking-wide">
                  Simple, Transparent Pricing
                </h1>
              </div>
              <p className="max-w-[788px] text-center text-gray-400 text-lg md:text-xl font-normal font-['Manrope'] leading-6 md:leading-7">
                No hidden charges. Choose a plan that fits your growth.
              </p>
            </div>

            {/* Pricing Cards Section */}
            <div className="w-full max-w-[1220px] px-4 md:px-8 relative flex flex-col gap-8">
              <div className="flex justify-center items-stretch gap-6 lg:gap-8 flex-wrap lg:flex-nowrap">
                {/* Starter Plan */}
                <PricingCard
                  price="₦0 / month"
                  planName="Starter"
                  description="For small teams getting started."
                  features={[
                    "Access to all basic features",
                    "Up to 5 team members",
                    "Basic dashboards",
                    "Email support",
                    "Limited integrations"
                  ]}
                  buttonText="Get started"
                />

                {/* Growth Plan */}
                <PricingCard
                  price="₦15,000 / month"
                  planName="Growth"
                  description="Best for scaling teams."
                  features={[
                    "Access to all premium features",
                    "Up to 25 team members",
                    "Advanced reports & CRM",
                    "Slack + Typeform integration",
                    "Role-based permissions"
                  ]}
                  buttonText="Try Free for 14 Days"
                />

                {/* Enterprise Plan */}
                <PricingCard
                  price="Custom pricing"
                  planName="Enterprise"
                  description="Custom solutions for large teams."
                  features={[
                    "Access to all features",
                    "Unlimited users",
                    "Dedicated success manager",
                    "Custom workflows",
                    "Priority support"
                  ]}
                  buttonText="Contact Sales"
                />
              </div>

              {/* Popular Badge - Only visible on large screens */}
              <div className="hidden xl:block absolute w-40 h-20 left-1/2 transform -translate-x-1/2 top-[-48px]">
                <div className="absolute left-[39px] top-[17px] text-right text-teal-400 text-sm font-medium font-['Manrope'] leading-tight whitespace-nowrap">
                  Most popular!
                </div>
                <div className="absolute left-[68.66px] top-[47.98px] w-16 h-7 origin-top-left rotate-[150deg]">
                  <Image
                    src="/icons/handDrawn.svg"
                    alt="Hand drawn arrow pointing to most popular plan"
                    width={64}
                    height={28}
                    className="w-full h-full"
                  />
                </div>
              </div>
              
              {/* Mobile Popular Badge */}
              <div className="xl:hidden flex justify-center">
                <div className="text-teal-400 text-sm font-medium font-['Manrope'] bg-indigo-900/50 px-3 py-1 rounded-full">
                  Most popular: Growth Plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 