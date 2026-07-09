import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportEmail = "psylantys@gmail.com";

export default function PrivacyPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-100">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Effective Date: July 9, 2026
        </p>

        <p className="mb-6">
          This Privacy Policy explains how FRAME collects, uses, stores, and
          shares information when you use the FRAME app, website, and related
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Overview</h2>
        <p className="mb-6">
          FRAME is a speaking practice app that helps users record or upload
          videos, receive AI-generated feedback, review speaking clips, and
          track communication progress. Because the app analyzes speaking
          videos, FRAME may process audio, transcripts, video-derived frames,
          account information, onboarding answers, usage data, and
          subscription-related information.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Information We Collect
        </h2>
        <div className="space-y-5">
          <p>
            <strong>Account information:</strong> This may include your user ID,
            sign-in method, email address if provided by Apple or Google,
            authentication status, and account creation or update dates.
          </p>
          <p>
            <strong>Onboarding and profile information:</strong> FRAME may
            collect answers you provide during onboarding, such as your speaking
            goals, practice frequency, recording obstacles, desired
            accomplishments, preferred presentation style, preferred pacing,
            speaking focus, and referral code.
          </p>
          <p>
            <strong>Video and speaking practice information:</strong> When you
            record or upload a video for analysis, FRAME may process video
            duration, local video references, thumbnails, extracted audio,
            transcript text, transcript segments, selected clip ranges, preview
            frame grids, scores, summaries, feedback, and tips.
          </p>
          <p>
            <strong>AI feedback information:</strong> FRAME may generate and
            store overall scores, engagement scores, clarity scores, confidence
            scores, graph points, summaries, selected clips, transcript-based
            insights, and other review results.
          </p>
          <p>
            <strong>Usage and analytics information:</strong> FRAME may collect
            app usage events such as onboarding progress, subscription starts,
            video uploads, analysis completion, feedback views, review
            completion, clip saves, and sharing actions.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Device Permissions
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Camera, to show a recording preview and record practice videos.</li>
          <li>Microphone, to record audio with practice videos.</li>
          <li>Photo library, to import or save selected videos or clips.</li>
          <li>
            Notifications, to send streak, weekly goal, completion, or trial
            reminders.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Subscription Information
        </h2>
        <p className="mb-6">
          FRAME may receive subscription status or purchase-related information
          through Apple and subscription infrastructure providers. Payment
          information is handled by Apple and is not directly collected by FRAME.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          How We Use Information
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Create and manage accounts.</li>
          <li>Personalize onboarding and review context.</li>
          <li>Record, import, analyze, and display speaking practice videos.</li>
          <li>Transcribe audio.</li>
          <li>Generate AI feedback, scores, summaries, tips, and clip selections.</li>
          <li>Track goals, streaks, analytics, and progress.</li>
          <li>Save app preferences and notification settings.</li>
          <li>Provide subscription access and paywall experiences.</li>
          <li>Improve product quality, reliability, and user experience.</li>
          <li>Detect errors, prevent abuse, enforce limits, and protect FRAME.</li>
          <li>Respond to support requests and comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">AI Processing</h2>
        <p className="mb-4">
          FRAME uses AI systems to analyze speaking content. This may involve
          sending extracted audio, transcript text, selected clip information,
          low-resolution preview frame grids, video duration, review context,
          and related metadata to backend services and AI providers.
        </p>
        <p className="mb-6">
          FRAME does not need to upload your entire original video file for
          every stage of analysis, but it may process audio, transcripts,
          frames, and metadata derived from your video in order to provide
          feedback.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Local Storage and Cloud Storage
        </h2>
        <p className="mb-4">
          Some FRAME data is stored locally on your device, including app
          progress, video references, clips, and feedback history. Some profile
          and account information may be stored in cloud services when you sign
          in or create an account.
        </p>
        <p className="mb-6">
          FRAME is designed to remove completed local video files older than
          approximately 30 days in certain cleanup flows, while keeping feedback
          metadata where needed for history and progress. Cloud data may remain
          until you delete your account or request deletion, subject to legal
          and operational retention needs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          How We Share Information
        </h2>
        <p className="mb-4">
          We may share information with service providers that help operate
          FRAME, including providers for authentication, cloud database and
          backend infrastructure, AI transcription and feedback generation,
          analytics, subscription management, App Store purchases, and
          crash/error diagnostics.
        </p>
        <p className="mb-6">
          We may also share information if required by law, to protect rights
          and safety, to prevent abuse or fraud, or as part of a business
          transfer such as a merger, acquisition, or sale of assets.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Your Choices</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            Decline camera, microphone, photo library, or notification
            permissions, though some features may not work.
          </li>
          <li>Turn notifications on or off in app settings or device settings.</li>
          <li>Manage or cancel subscriptions through Apple account settings.</li>
          <li>Sign out of your account.</li>
          <li>Delete your account where available.</li>
          <li>Contact support for help with data or privacy requests.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Account Deletion
        </h2>
        <p className="mb-6">
          If you delete your account, FRAME may delete your cloud profile and
          reset local app data on your device. Some data may remain if required
          for legal, billing, fraud prevention, security, backup, or operational
          reasons.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Data Security</h2>
        <p className="mb-6">
          We use reasonable technical and organizational measures to protect
          information. However, no system is completely secure. You are
          responsible for protecting access to your device, Apple account,
          Google account, and any account credentials.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Children&apos;s Privacy
        </h2>
        <p className="mb-6">
          FRAME is not intended for children under the age required by
          applicable law to use online services without parental consent. If you
          believe a child has provided personal information without appropriate
          consent, contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          International Data Transfers
        </h2>
        <p className="mb-6">
          Service providers may process information in countries other than
          where you live. By using FRAME, you understand that information may be
          processed in locations with different data protection laws.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. If changes are
          material, we may notify you through the app, website, or other
          reasonable means.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-2">
          For privacy questions or requests, contact us at:
        </p>
        <p className="font-semibold">{supportEmail}</p>
      </main>
      <Footer />
    </div>
  );
}
