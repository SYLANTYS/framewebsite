// pages/terms.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-900 dark:text-zinc-100">
        <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Last updated: July 23, 2025
        </p>

        <p className="mb-6">
          Please read these Terms and Conditions carefully before using the
          FRAME desktop application.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Acknowledgment</h2>
        <p className="mb-4">
          These Terms govern your access to and use of FRAME (&quot;the
          Service&quot;). By creating an account or using the app, you agree to
          be bound by these Terms.
        </p>
        <p className="mb-6">
          The Service is available only to individuals over the age of 18. If
          you do not agree to these Terms, you may not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Accounts and Access
        </h2>
        <p className="mb-4">
          An account may be required to access some features of FRAME. Users must
          register with a valid email and password. Access is not available
          without login.
        </p>
        <p className="mb-6">
          If you choose to use your own API keys, they are stored only on your
          device and are not uploaded by FRAME.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Termination</h2>
        <p className="mb-4">
          You may request deletion of your account via email. FRAME may
          suspend access if malicious behavior is detected, such as attempts to
          attack our systems or abuse third-party providers.
        </p>
        <p className="mb-6">
          We reserve the right to revoke access to the Service if these Terms
          are violated.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          To the fullest extent permitted by law, FRAME is not liable for any
          indirect, incidental, or consequential damages. Our total liability is
          limited to $100.
        </p>
        <p className="mb-6">
          The Service is provided &quot;as is&quot; and &quot;as available&quot;
          without warranty of any kind. FRAME is not responsible for bugs,
          errors, or interruptions and does not guarantee any specific
          functionality or uptime.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Governing Law</h2>
        <p className="mb-6">
          These Terms shall be governed by the laws of the State of Maine,
          excluding its conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Dispute Resolution
        </h2>
        <p className="mb-6">
          If you have a concern or dispute regarding the Service, please contact
          us first at <strong>psylantys@gmail.com</strong> to resolve it
          informally before pursuing legal action.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Modifications to Terms
        </h2>
        <p className="mb-6">
          We reserve the right to update these Terms at any time. Changes will
          be posted on this page. Continued use of the Service after updates
          constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-2">
          If you have questions or need support regarding these Terms and
          Conditions, contact us:
        </p>
        <p className="font-semibold">psylantys@gmail.com</p>
      </main>
      <Footer />
    </div>
  );
}
