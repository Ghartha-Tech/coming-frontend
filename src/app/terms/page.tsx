import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | Ghartha",
  description: "Ghartha's terms of service.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-sand text-forest selection:bg-terracotta selection:text-sand">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-10 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icon.svg" alt="Ghartha Logo" width={32} height={32} className="w-8 h-8 rounded-sm" />
          <span className="font-display text-2xl font-bold tracking-wider uppercase text-forest">Ghartha</span>
        </Link>
      </header>

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-display text-5xl md:text-6xl font-medium mb-12">Terms of Service</h1>
        
        <div className="space-y-8 text-forest/80 font-light leading-relaxed text-lg">
          <p>
            Welcome to Ghartha. By accessing or using our website and services, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="font-display text-3xl font-medium text-forest pt-8">1. Acceptance of Terms</h2>
          <p>
            By registering for and/or using Ghartha in any manner, including but not limited to visiting or browsing the Site, you agree to these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.
          </p>

          <h2 className="font-display text-3xl font-medium text-forest pt-8">2. Description of Service</h2>
          <p>
            Ghartha provides a financial operating system for shared living, enabling users to split bills, track shared expenses, and manage PG/hostel rent. We do not hold user funds. Payment processing and UPI mandates are handled by third-party licensed entities (e.g., Razorpay).
          </p>

          <h2 className="font-display text-3xl font-medium text-forest pt-8">3. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use the service only for lawful purposes and in accordance with these Terms.
          </p>

          <h2 className="font-display text-3xl font-medium text-forest pt-8">4. Limitation of Liability</h2>
          <p>
            Ghartha provides the platform "as is" and shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use the services.
          </p>

          <p className="pt-12 text-sm text-forest/60">
            Last updated: April 2026. For questions regarding these terms, contact hello@ghartha.in.
          </p>
        </div>
      </main>
    </div>
  );
}
