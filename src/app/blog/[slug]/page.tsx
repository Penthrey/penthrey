import { Metadata } from 'next';
import BlogPostDetail from '@/components/BlogPostDetail';

export const metadata: Metadata = {
  title: '5 Ways to Streamline Your Finance Ops with Penthry | Penthry Blog',
  description: 'Explore practical ways to reduce overhead and automate recurring payments with Penthry. Learn key strategies for financial efficiency.',
  keywords: 'finance operations, automation, recurring payments, budget tracking, financial efficiency, Penthry',
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostDetail slug={slug} />;
} 