import React from 'react';
import Image from 'next/image';

interface PlanFeature {
  name: string;
  starter: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
}

export default function ComparePlans() {
  const features: PlanFeature[] = [
    {
      name: "Users",
      starter: "5",
      growth: "Up to 25",
      enterprise: "Unlimited"
    },
    {
      name: "Role-based Access",
      starter: true,
      growth: true,
      enterprise: true
    },
    {
      name: "Finance Management",
      starter: "Basic",
      growth: "Full",
      enterprise: "Full + Custom Rules"
    },
    {
      name: "HR Scorecard",
      starter: false,
      growth: true,
      enterprise: true
    },
    {
      name: "Customer CRM",
      starter: false,
      growth: true,
      enterprise: true
    },
    {
      name: "Market Analysis Tools",
      starter: false,
      growth: true,
      enterprise: "✓ + API Access"
    },
    {
      name: "Data Storage & Backup",
      starter: "500MB",
      growth: "10GB",
      enterprise: "100GB + Encryption"
    },
    {
      name: "Integrations (Zoom, Stripe)",
      starter: "Limited",
      growth: "Standard",
      enterprise: "All + Custom"
    },
    {
      name: "BI Dashboards",
      starter: false,
      growth: "Standard",
      enterprise: "Advanced"
    },
    {
      name: "Support",
      starter: "Community Forum",
      growth: "Email Support",
      enterprise: "Priority Support"
    }
  ];

  const plans = [
    {
      name: "Starter",
      buttonText: "Get started",
      key: "starter" as keyof PlanFeature
    },
    {
      name: "Growth",
      buttonText: "Try Free for 14 Days",
      key: "growth" as keyof PlanFeature
    },
    {
      name: "Enterprise",
      buttonText: "Contact Sales",
      key: "enterprise" as keyof PlanFeature
    }
  ];

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="w-4 h-4 flex-shrink-0">
          <Image
            src="/icons/check.svg"
            alt="Included"
            width={16}
            height={16}
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
          <div className="w-3 h-0.5 bg-gray-400 rounded"></div>
        </div>
      );
    }
    return <span className="text-zinc-800 text-sm font-medium font-['Manrope'] leading-tight">{value}</span>;
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-6 pt-12 pb-6 flex flex-col items-center gap-8">
          {/* Header */}
          <div className="w-full px-2.5 flex justify-start items-start gap-2.5 overflow-hidden">
            <h2 className="flex-1 text-zinc-800 text-3xl md:text-4xl font-semibold font-['Manrope'] leading-[45px] md:leading-[52.20px]">
              Compare Plans
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="w-full p-6 bg-white rounded-3xl border border-zinc-300 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[800px] flex">
                {/* Features Column */}
                <div className="flex-1 min-w-[200px] flex flex-col">
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                      {/* Features Header */}
                      <div className="px-6 pb-4 flex items-center gap-3">
                        <div className="text-indigo-700 text-sm font-medium font-['Manrope'] leading-tight">
                          Features
                        </div>
                      </div>
                      
                      {/* Feature Rows */}
                      {features.map((feature, index) => (
                        <div 
                          key={feature.name}
                          className={`h-16 px-6 flex items-center gap-3 ${
                            index % 2 === 0 ? 'bg-indigo-50' : ''
                          }`}
                        >
                          <div className="flex-1 flex items-center gap-1">
                            <div className="text-zinc-800 text-sm font-medium font-['Manrope'] leading-tight">
                              {feature.name}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Action Row */}
                      <div className="h-16 px-6 flex items-center gap-3"></div>
                    </div>
                  </div>
                </div>

                {/* Plan Columns */}
                {plans.map((plan) => (
                  <div key={plan.name} className="flex-1 min-w-[180px] flex flex-col">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col items-center">
                        {/* Plan Header */}
                        <div className="w-full px-6 pb-4 flex items-center gap-3">
                          <div className="text-indigo-700 text-sm font-semibold font-['Manrope'] leading-tight">
                            {plan.name} Plan
                          </div>
                        </div>
                        
                        {/* Feature Values */}
                        {features.map((feature, index) => (
                          <div 
                            key={feature.name}
                            className={`w-full h-16 px-6 flex items-center gap-3 ${
                              index % 2 === 0 ? 'bg-indigo-50' : ''
                            }`}
                          >
                            <div className="flex-1 flex items-center gap-1">
                              {renderFeatureValue(feature[plan.key])}
                            </div>
                          </div>
                        ))}
                        
                        {/* Action Button */}
                        <div className="w-full h-16 px-6 flex items-center gap-3">
                          <div className="flex-1 flex flex-col gap-3">
                            <button className="w-full px-6 py-3 bg-teal-400 rounded-lg flex justify-center items-center gap-2 hover:bg-teal-500 transition-colors">
                              <span className="text-zinc-800 text-sm font-medium font-['Manrope']">
                                {plan.buttonText}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 