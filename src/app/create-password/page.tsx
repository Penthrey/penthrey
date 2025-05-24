import { Metadata } from 'next';
import CreatePasswordForm from '@/components/CreatePasswordForm';

export const metadata: Metadata = {
  title: 'Create Password - Penthry | Secure Your Account',
  description: 'Create a strong password for your Penthry account. Set up secure access to protect your business data and workspace.',
  keywords: 'create password, set password, password security, account setup, Penthry',
};

export default function CreatePassword() {
  return <CreatePasswordForm />;
} 