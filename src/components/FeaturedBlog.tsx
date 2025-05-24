import React from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  readMoreLink: string;
}

export default function FeaturedBlog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Ways to Streamline Your Finance Ops with Penthry",
      description: "Explore practical ways to reduce overhead and automate recurring payments.",
      category: "Finance Management",
      image: "/images/bp1.jpg",
      readMoreLink: "/blog/streamline-finance-ops"
    },
    {
      id: 2,
      title: "Building Better HR Workflows with Penthry",
      description: "Discover how to automate performance tracking and improve team visibility.",
      category: "HR Tools",
      image: "/images/bp2.jpg",
      readMoreLink: "/blog/better-hr-workflows"
    },
    {
      id: 3,
      title: "Creating Dashboards That Drive Decisions",
      description: "Learn how to set up real-time dashboards that power business growth.",
      category: "Smart Data Tools",
      image: "/images/bp3.jpg",
      readMoreLink: "/blog/dashboard-decisions"
    },
    {
      id: 4,
      title: "Centralizing Feedback with Penthry CRM",
      description: "See how teams are using Penthry to improve retention and customer satisfaction.",
      category: "Customer CRM",
      image: "/images/bp4.jpg",
      readMoreLink: "/blog/centralizing-feedback"
    }
  ];

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <div className="flex-1 min-w-[300px] flex flex-col gap-8">
      {/* Image Section with Overlay */}
      <div className="relative h-72 rounded-t-2xl shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.25)] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" />
        
        {/* Category Badge */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-white/50 backdrop-blur-md" />
          <div className="p-6 bg-white/30 backdrop-blur-md">
            <div className="text-white text-sm font-semibold font-['Manrope'] leading-tight">
              {post.category}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-neutral-700 text-xl md:text-2xl font-semibold font-['Manrope'] leading-7 md:leading-9">
            {post.title}
          </h3>
          <p className="text-zinc-500 text-base font-normal font-['Manrope'] leading-normal">
            {post.description}
          </p>
        </div>
        
        {/* Read More Link */}
        <a 
          href={post.readMoreLink}
          className="inline-flex items-center gap-2 rounded-lg overflow-hidden hover:gap-3 transition-all duration-200 group w-fit"
        >
          <span className="text-teal-500 text-base font-medium font-['Manrope']">
            Read More
          </span>
          <div className="w-4 h-4 relative overflow-hidden">
            <svg 
              className="w-full h-full text-teal-500 group-hover:translate-x-0.5 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <section className="w-full p-6 md:p-12 flex flex-col items-center gap-8">
      <div className="w-full max-w-[1000px] flex flex-col gap-16">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <BlogCard post={blogPosts[0]} />
          <BlogCard post={blogPosts[1]} />
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <BlogCard post={blogPosts[2]} />
          <BlogCard post={blogPosts[3]} />
        </div>
      </div>
    </section>
  );
} 