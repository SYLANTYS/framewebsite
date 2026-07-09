import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hook from "@/components/Hook";
import InteractiveStepSection from "@/components/InteractiveStepSection";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <Hook />

      <section className="py-20 pb-20 text-white bg-linear-155 from-black to-gray-900">
        <div className="text-center">
          <h3 className="text-5xl">What Does FRAME Include?</h3>
        </div>
        <InteractiveStepSection />
      </section>

      <WhyChoose />

      <Footer />
    </div>
  );
}
