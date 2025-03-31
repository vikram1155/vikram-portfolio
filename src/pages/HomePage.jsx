import React, { useRef } from "react";
import AboutSection from "./AboutSection";
import { Box, Container } from "@mui/material";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import SkillsSection from "./SkillsSection";

function HomePage() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <AboutSection scrollToContact={scrollToContact} />
        <SkillsSection />
        <Experience />
        <Projects />
        <Box ref={contactRef}>
          <Contact />
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
