import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportEmail = "psylantys@gmail.com";

export default function HelpPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-100">
        <h1 className="text-3xl font-bold mb-2">FRAME Support</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Last updated: July 9, 2026
        </p>

        <p className="mb-8">
          FRAME helps you practice speaking on camera, get AI feedback, and
          track your progress over time. If something is not working, this page
          can help you solve common issues.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p>
            To use FRAME, open the app, complete onboarding, choose your
            speaking goals, and set your review context. You can then record a
            new video or import one from your gallery. FRAME works best with
            clear audio and videos around 3-5 minutes long.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Recording a Video</h2>
          <p className="mb-4">
            FRAME uses your camera to show a recording preview and your
            microphone to capture your voice. If recording does not work, check
            that camera and microphone permissions are enabled in your device
            settings.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Record in a quiet place.</li>
            <li>Keep your face visible.</li>
            <li>Speak naturally.</li>
            <li>Use a video at least 1 minute long.</li>
            <li>Aim for 3-5 minutes when possible.</li>
            <li>Avoid background noise or music that makes speech hard to hear.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Uploading or Importing a Video
          </h2>
          <p>
            You can import a video from your device. If import fails, make sure
            the file is a supported video format and that the app has permission
            to access the selected media.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Video Analysis</h2>
          <p className="mb-4">
            After you add a video, FRAME may show steps such as transcribing
            audio, finding clips, creating preview frames, scoring delivery, and
            building feedback. Longer videos may take more time.
          </p>
          <p>
            FRAME analyzes videos between about 1 and 20 minutes. Very short
            videos may not provide enough speaking content for useful feedback.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Understanding Your Score
          </h2>
          <p className="mb-4">
            FRAME gives an overall score out of 100, plus sub-scores for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Engagement:</strong> how well your delivery keeps
              attention.
            </li>
            <li>
              <strong>Clarity:</strong> how easy your message is to follow.
            </li>
            <li>
              <strong>Confidence:</strong> how assured and steady your speaking
              feels.
            </li>
          </ul>
          <p className="mt-4">
            Scores are meant to help you notice patterns and improve over time.
            They are not final judgments of your ability.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Review Context</h2>
          <p>
            Your review context tells FRAME how to evaluate your speaking. You
            can adjust settings such as presentation style, pacing, and speaking
            focus. Examples include authentic, confident, charismatic,
            professional, short-form, long-form, relaxed, energetic,
            conversational, informative, motivational, and entertaining.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Clips and Feedback</h2>
          <p>
            FRAME automatically identifies key moments from your video. These
            clips help you review specific parts of your delivery instead of
            only looking at the full recording. You may be able to save or share
            clips and feedback summaries.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Progress Tracking</h2>
          <p>
            FRAME tracks your practice history, weekly goal, streaks, recording
            statistics, total minutes, total videos, total clips, and highest
            scores. This helps you see improvement over time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <p>
            FRAME can send reminders for streaks, weekly goals, completed
            feedback, and trial timing. You can manage notification settings
            inside FRAME or through your device settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
          <p className="mb-4">
            FRAME may offer monthly or yearly subscription access through Apple
            in-app purchases. Free trials and pricing may vary by offer and
            region. You can manage or cancel your subscription in your Apple
            account settings.
          </p>
          <p className="mb-4">To cancel on iPhone:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open the Settings app.</li>
            <li>Tap your Apple ID.</li>
            <li>Tap Subscriptions.</li>
            <li>Select FRAME.</li>
            <li>Tap Cancel Subscription.</li>
          </ol>
          <p className="mt-4">
            For refunds, use Apple&apos;s refund process through
            reportaproblem.apple.com. You can also review Apple&apos;s
            subscription cancellation guide at{" "}
            <a
              href="https://support.apple.com/en-gb/118428?device-type=mac"
              className="font-semibold underline underline-offset-4"
            >
              Apple Support
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Sign In and Account Saving
          </h2>
          <p>
            FRAME supports Apple and Google sign-in. You may also be able to
            start with an anonymous account. Connecting Apple or Google helps
            save your profile and makes it easier to access your progress later.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Deleting Your Account
          </h2>
          <p>
            You can delete your account from the Profile area if you are signed
            in. Deleting your account may delete your cloud profile and reset
            local app data on your device.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>

          <h3 className="text-xl font-semibold mb-3">If analysis fails</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Check your internet connection.</li>
            <li>Make sure you are signed in.</li>
            <li>Try a shorter video.</li>
            <li>Make sure the video has clear speech.</li>
            <li>Restart the app.</li>
            <li>Try again later.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">If sign-in fails</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Check your internet connection.</li>
            <li>
              Make sure Apple or Google sign-in is available on your device.
            </li>
            <li>Try closing and reopening FRAME.</li>
            <li>Try another sign-in method if available.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            If subscription access does not unlock
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Confirm the purchase in your Apple subscriptions.</li>
            <li>Tap restore purchase if available.</li>
            <li>Restart the app.</li>
            <li>
              Make sure you are using the same Apple ID used to purchase.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <p className="mb-4">
            Need help? Contact us at{" "}
            <strong>{supportEmail}</strong>.
          </p>
          <p className="mb-4">Please include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your device model.</li>
            <li>Your iOS version.</li>
            <li>What you were trying to do.</li>
            <li>Any error message shown.</li>
            <li>
              Whether the issue happened while recording, importing, analyzing,
              signing in, subscribing, or saving/sharing.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
