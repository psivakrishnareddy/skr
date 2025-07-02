import { Navigation } from "../components/portfolio/Navigation";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Experience } from "../components/portfolio/Experience";
import { Skills } from "../components/portfolio/Skills";
import { Projects } from "../components/portfolio/Projects";
import { Testimonials } from "../components/portfolio/Testimonials";
import { Contact } from "../components/portfolio/Contact";
import { TerminalChatbot } from "../components/portfolio/TerminalChatbot";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* AI Chatbot Assistant */}
      <TerminalChatbot />
    </div>
  );
}
