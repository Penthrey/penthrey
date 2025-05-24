import { Metadata } from 'next';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Forgot Password - Penthry | Reset Your Password',
  description: 'Reset your Penthry account password. Enter your email to receive a secure reset link and regain access to your workspace.',
  keywords: 'forgot password, reset password, password recovery, account recovery, Penthry',
};

export default function ForgotPassword() {
  return <ForgotPasswordForm />;
} 