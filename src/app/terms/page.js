import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportEmail = "psylantys@gmail.com";

export default function TermsPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-100">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Effective Date: July 9, 2026
        </p>

        <p className="mb-6">
          Welcome to FRAME. These Terms of Service govern your access to and use
          of the FRAME mobile application, website, services, subscriptions,
          feedback features, and related content. By using FRAME, you agree to
          these Terms. If you do not agree, do not use the service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          What FRAME Provides
        </h2>
        <p className="mb-4">
          FRAME is a speaking practice and feedback app. It allows users to
          record or upload videos, generate transcripts, receive AI-assisted
          feedback, review selected clips, track scores, set practice goals, and
          monitor progress over time.
        </p>
        <p className="mb-6">
          FRAME may provide feedback on areas such as engagement, clarity,
          confidence, pacing, delivery, speaking style, and communication
          effectiveness. Feedback is generated using automated systems and
          should be treated as guidance, not as a guarantee of performance
          improvement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Eligibility</h2>
        <p className="mb-6">
          You must be legally able to use digital services in your jurisdiction.
          If you are under the age required to consent to these Terms, you may
          use FRAME only with permission from a parent or legal guardian.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Accounts</h2>
        <p className="mb-4">
          You may use FRAME through supported sign-in methods, including Apple,
          Google, or anonymous account creation where available. You are
          responsible for maintaining access to your account and device.
        </p>
        <p className="mb-6">
          If you use anonymous sign-in and do not later connect Apple or Google,
          you may lose access to your progress if your device data is deleted,
          the app is removed, or the anonymous account cannot be recovered. You
          agree to provide accurate information when creating or updating your
          profile, and you are responsible for all activity under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">User Content</h2>
        <p className="mb-4">
          FRAME allows you to create, upload, import, save, analyze, and share
          content, including videos, audio, transcripts, feedback, clip data,
          and related metadata. You retain ownership of your own content.
        </p>
        <p className="mb-4">
          By using FRAME, you give FRAME permission to process your content as
          needed to operate the service. This includes recording, storing
          locally on your device, extracting audio, generating transcripts,
          selecting clips, creating preview frames, producing scores, generating
          feedback, saving results, and displaying or exporting feedback.
        </p>
        <p className="mb-6">
          You represent that you have the rights necessary to upload or record
          any content you submit to FRAME and that your use of that content does
          not violate another person&apos;s rights.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Acceptable Use</h2>
        <p className="mb-4">You agree not to misuse FRAME. You may not:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            Upload content that is unlawful, harmful, abusive, harassing,
            exploitative, or invasive of another person&apos;s privacy.
          </li>
          <li>
            Record or upload another person without any consent required by law.
          </li>
          <li>
            Attempt to reverse engineer, disrupt, overload, or interfere with
            the service.
          </li>
          <li>
            Use the service to generate or distribute misleading, defamatory, or
            harmful content.
          </li>
          <li>
            Circumvent subscription limits, security controls, usage limits, or
            account restrictions.
          </li>
          <li>
            Use FRAME in a way that violates applicable laws or third-party
            rights.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          AI Feedback Disclaimer
        </h2>
        <p className="mb-4">
          FRAME uses automated and AI-assisted systems to generate feedback. AI
          feedback may be incomplete, inaccurate, subjective, or not suitable
          for every context. FRAME does not guarantee that scores, tips,
          transcripts, clip selections, or recommendations will be perfect.
        </p>
        <p className="mb-6">
          FRAME is not a substitute for professional coaching, therapy, medical
          advice, legal advice, hiring advice, academic evaluation, or any other
          professional service. You are responsible for deciding how to use the
          feedback.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Subscriptions and Payments
        </h2>
        <p className="mb-4">
          FRAME may offer paid subscriptions, free trials, promotional offers,
          or premium features. Purchases are processed through Apple&apos;s App
          Store and are subject to Apple&apos;s payment terms and subscription
          rules.
        </p>
        <p className="mb-4">
          Subscription pricing, trial availability, renewal timing, and included
          features are shown at the time of purchase. Unless canceled before
          renewal, subscriptions may automatically renew. You can manage or
          cancel your subscription through your Apple account settings.
        </p>
        <p className="mb-6">
          FRAME does not directly control App Store billing, refunds, or payment
          disputes. Refund requests are handled by Apple according to Apple&apos;s
          policies.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Apple Standard EULA
        </h2>
        <p className="mb-6">
          If you download FRAME through Apple&apos;s App Store, your use of the
          app is also subject to Apple&apos;s Standard End User License Agreement,
          available at{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="font-semibold underline underline-offset-4"
          >
            https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Usage Limits</h2>
        <p className="mb-6">
          FRAME may apply usage limits to protect service performance and manage
          costs. For example, AI video analysis may be limited by video length,
          file size, subscription status, or daily usage limits. Limits may
          change over time.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Notifications</h2>
        <p className="mb-6">
          If you enable notifications, FRAME may send reminders related to
          practice goals, streaks, video review completion, or trial/subscription
          timing. You can control notifications through the app settings or your
          device settings.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Privacy</h2>
        <p className="mb-6">
          Your use of FRAME is also governed by our Privacy Policy. The Privacy
          Policy explains what information we collect, how we use it, and the
          choices you have.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Account Deletion
        </h2>
        <p className="mb-6">
          You may request or perform account deletion where available in the
          app. Deleting your account may delete your cloud profile and reset
          local app data on the device. Some information may be retained where
          required for legal, security, billing, fraud prevention, or operational
          reasons.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Service Availability
        </h2>
        <p className="mb-6">
          FRAME may change, suspend, or discontinue features at any time. We may
          update the app, change how feedback works, modify subscription
          offerings, or adjust usage limits. We do not guarantee that the
          service will always be available, uninterrupted, error-free, or
          compatible with every device.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Intellectual Property
        </h2>
        <p className="mb-6">
          FRAME, including its design, branding, software, interface, scoring
          system, feedback structure, graphics, and other app materials, is
          owned by FRAME or its licensors. You may not copy, modify, distribute,
          sell, or reverse engineer FRAME except as allowed by law.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Third-Party Services
        </h2>
        <p className="mb-6">
          FRAME may rely on third-party providers for authentication, cloud
          infrastructure, analytics, AI processing, subscriptions, paywalls, and
          other services. Your use of those services may also be subject to
          their own terms and policies.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Termination</h2>
        <p className="mb-6">
          We may suspend or terminate access to FRAME if you violate these
          Terms, misuse the service, create risk for other users or the service,
          or if required by law. You may stop using FRAME at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Limitation of Liability
        </h2>
        <p className="mb-6">
          To the maximum extent permitted by law, FRAME is not liable for
          indirect, incidental, special, consequential, or punitive damages, or
          for lost profits, lost data, lost opportunities, or reliance on
          AI-generated feedback.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">No Warranties</h2>
        <p className="mb-6">
          FRAME is provided &quot;as is&quot; and &quot;as available.&quot; We do
          not make warranties about accuracy, reliability, availability, fitness
          for a particular purpose, or specific results from using the app.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Changes to These Terms
        </h2>
        <p className="mb-6">
          We may update these Terms from time to time. If changes are
          significant, we may notify you through the app, website, or other
          reasonable means. Continued use of FRAME after changes means you
          accept the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-2">
          If you have questions about these Terms, contact us at:
        </p>
        <p className="font-semibold">{supportEmail}</p>
      </main>
      <Footer />
    </div>
  );
}
