import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Ghartha",
  description: "Ghartha's privacy policy and data protection guidelines.",
};

export default function PrivacyPolicy() {
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
        <h1 className="font-display text-5xl md:text-6xl font-medium mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 text-forest/80 font-light leading-relaxed text-lg">
          <p>
            At Ghartha, we take your privacy and data security seriously. We are building the financial operating system for shared living in India, and trust is the foundation of our platform.
          </p>

          <h2 className="font-display text-3xl font-medium text-forest pt-8">1. Information We Collect</h2>
          <p>
            When you use Ghartha, we collect information you provide directly to us (such as when you create an account, split a bill, or set up a UPI mandate) and information we collect automatically (such as log data and usage information).
          </p>

          <h2 className="font-display text-3xl font-medium text-forest pt-8">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services. Specifically, we use it to process your splits, manage your PG/hostel rent records, and ensure your UPI mandates are executed securely.
          </p>

          <h2 className="font-display text-3xl font-medium text-forest pt-8">3. Data Sharing and Security</h2>
          <p>
            We do not sell your personal data. We only share information with trusted third-party providers (like Razorpay for UPI Autopay) strictly for processing transactions you have authorized. All data is encrypted at rest and in transit.
          </p>

          <h2 className="font-display text-3xl font-medium text-forest pt-8">4. Digital Personal Data Protection Act (DPDPA)</h2>
          <p>
            Ghartha operates in full compliance with India&apos;s Digital Personal Data Protection Act. You have the right to access, correct, or request the deletion of your personal data at any time.
          </p>

          <p className="pt-12 text-sm text-forest/60">
            Last updated: April 2026. For privacy inquiries, contact ghartha.tech@gmail.com.
          </p>
        </div>
      </main>
    </div>
  );
}
