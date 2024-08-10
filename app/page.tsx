import Contact from "@/components/Contact";
import FloatingShape from "@/components/FloatingShape";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


export default async function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <FloatingShape />
      <Contact />
      <Form />
      <Footer />
    </>
  )
}
