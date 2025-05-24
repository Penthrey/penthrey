import React from 'react';  
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

export default function FAQ() {
  const faqData: FAQItem[] = [
    {
      question: "Is there a free trial?",
      answer: "Yes! You can try the Growth plan free for 14 days—no credit card required.",
      icon: "/icons/heart.svg"
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely. You can upgrade, downgrade, or cancel your plan anytime from your account settings.",
      icon: "/icons/repeat.svg"
    },
    {
      question: "What happens when I hit my plan limit?",
      answer: "We'll notify you in advance. You'll have the option to upgrade or manage your usage.",
      icon: "/icons/bell.svg"
    },
    {
      question: "Are there any setup or hidden fees?",
      answer: "No hidden fees. What you see on the pricing page is what you pay.",
      icon: "/icons/moneyBag.svg"
    },
    {
      question: "Do you offer discounts?",
      answer: "Yes, we offer special pricing for eligible nonprofits and early-stage startups. Contact us for details.",
      icon: "/icons/discount.svg"
    },
    {
      question: "Is my payment information secure?",
      answer: "100%. We use industry-standard encryption and our payments are processed via Paystack.",
      icon: "/icons/securityIC.svg"
    }
  ];

  const FAQCard = ({ question, answer, icon }: FAQItem) => (
    <div className="flex-1 p-6 bg-indigo-50 rounded-3xl shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] flex flex-col gap-6">
      <div className="py-2.5 w-12 bg-indigo-900 rounded-lg flex flex-col justify-center items-center gap-2.5 overflow-hidden">
        <div className="w-6 h-6 relative overflow-hidden">
          <Image src={icon} alt="FAQ" width={24} height={24} className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-neutral-700 text-xl font-semibold font-['Manrope'] leading-7">
          {question}
        </div>
        <div className="text-zinc-600 text-base font-normal font-['Manrope'] leading-normal">
          {answer}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="container mx-auto flex flex-col gap-8 overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col gap-4 overflow-hidden">
          <div className="flex flex-col gap-2.5">
            <div className="max-w-[596px] text-indigo-700 text-xl font-semibold font-['Manrope'] leading-7">
              FAQ
            </div>
            <div className="max-w-[596px] text-zinc-800 text-3xl md:text-4xl font-semibold font-['Manrope'] leading-[45px] md:leading-[52.20px]">
              Answers to Your Top Questions
            </div>
            <div className="text-zinc-600 text-lg md:text-xl font-normal font-['Manrope'] leading-6 md:leading-7">
              Get the details on pricing, billing, and plan flexibility—so you can get started with confidence.
            </div>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col gap-6 overflow-hidden">
          {/* First Row */}
          <div className="flex flex-col lg:flex-row gap-6">
            <FAQCard question={faqData[0].question} answer={faqData[0].answer} icon={faqData[0].icon} />
            <FAQCard question={faqData[1].question} answer={faqData[1].answer} icon={faqData[1].icon} />
            <FAQCard question={faqData[2].question} answer={faqData[2].answer} icon={faqData[2].icon} />
          </div>
          
          {/* Second Row */}
          <div className="flex flex-col lg:flex-row gap-6">
            <FAQCard question={faqData[3].question} answer={faqData[3].answer} icon={faqData[3].icon} />
            <FAQCard question={faqData[4].question} answer={faqData[4].answer} icon={faqData[4].icon} />
            <FAQCard question={faqData[5].question} answer={faqData[5].answer} icon={faqData[5].icon} />
          </div>
        </div>
      </div>
    </section>
  );
} 