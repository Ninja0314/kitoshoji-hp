import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MASection from "@/components/MASection";
import CompanyProfile from "@/components/CompanyProfile";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MASection />
      <CompanyProfile />
      <ContactForm />
      <Footer />
    </main>
  );
}
