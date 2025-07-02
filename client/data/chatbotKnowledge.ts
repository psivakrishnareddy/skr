import { portfolioData } from "./portfolio";

export interface ChatResponse {
  response: string;
  type: "info" | "code" | "list" | "error";
}

export class PortfolioChatBot {
  private knowledge: any;

  constructor() {
    this.knowledge = portfolioData;
  }

  processQuery(query: string): ChatResponse {
    const normalizedQuery = query.toLowerCase().trim();

    // Greeting patterns
    if (
      this.matchesPattern(normalizedQuery, ["hello", "hi", "hey", "greetings"])
    ) {
      return {
        response: `Hello! I'm SIVA-AI, an AI assistant providing information about ${this.knowledge.personal.name}. Type 'help' to see available commands.`,
        type: "info",
      };
    }

    // Help command
    if (
      this.matchesPattern(normalizedQuery, [
        "help",
        "commands",
        "what can you do",
      ])
    ) {
      return {
        response: `Available commands:
• about - Personal summary and background
• experience - Work history and achievements  
• skills - Technical expertise and proficiency
• projects - Featured projects and innovations
• education - Academic qualifications
• contact - Contact information
• certifications - Professional certifications
• hello - Greet the AI assistant
• clear - Clear the terminal`,
        type: "list",
      };
    }

    // About/Summary
    if (
      this.matchesPattern(normalizedQuery, [
        "about",
        "summary",
        "who",
        "background",
        "tell me about",
      ])
    ) {
      return {
        response: `${this.knowledge.personal.name} is a ${this.knowledge.personal.title} with ${this.knowledge.personal.summary}

Current Role: ${this.knowledge.experience[0].role} at ${this.knowledge.experience[0].company}
Location: ${this.knowledge.personal.location}
Specialization: ${this.knowledge.personal.subtitle}`,
        type: "info",
      };
    }

    // Experience
    if (
      this.matchesPattern(normalizedQuery, [
        "experience",
        "work",
        "job",
        "career",
        "employment",
      ])
    ) {
      const exp = this.knowledge.experience[0]; // Most recent
      return {
        response: `Current Position: ${exp.role} at ${exp.company} (${exp.period})
Project: ${exp.project}
Location: ${exp.location}

Key Achievements:
${exp.highlights.map((h: string) => `• ${h}`).join("\n")}

Total Experience: 4+ years across multiple companies
Previous roles at: Hive Networks, Presidio, Codingmart Technologies`,
        type: "info",
      };
    }

    // Skills
    if (
      this.matchesPattern(normalizedQuery, [
        "skills",
        "technology",
        "tech",
        "programming",
        "languages",
      ])
    ) {
      return {
        response: `Technical Expertise:

Frontend: ${this.knowledge.skills.frontend.slice(0, 6).join(", ")}
Backend: ${this.knowledge.skills.backend.slice(0, 6).join(", ")}
Databases: ${this.knowledge.skills.database.slice(0, 6).join(", ")}
Languages: ${this.knowledge.skills.languages.join(", ")}
AI/ML: ${this.knowledge.skills.ai.join(", ")}
DevOps: ${this.knowledge.skills.tools.slice(0, 6).join(", ")}

Proficiency Level: Expert in full-stack development with 4+ years experience`,
        type: "code",
      };
    }

    // Projects
    if (
      this.matchesPattern(normalizedQuery, [
        "projects",
        "work samples",
        "portfolio",
        "code",
      ])
    ) {
      const projectList = this.knowledge.projects
        .map(
          (p: any, i: number) =>
            `${i + 1}. ${p.title}\n   ${p.description}\n   Tech: ${p.technologies.slice(0, 4).join(", ")}`,
        )
        .join("\n\n");

      return {
        response: `Featured Projects:

${projectList}

All projects demonstrate expertise in AI, full-stack development, and cloud technologies.`,
        type: "list",
      };
    }

    // Education
    if (
      this.matchesPattern(normalizedQuery, [
        "education",
        "degree",
        "university",
        "college",
        "study",
      ])
    ) {
      const eduList = this.knowledge.education
        .map(
          (edu: any) =>
            `${edu.degree} - ${edu.institution} (${edu.period})\nGPA: ${edu.gpa} | Location: ${edu.location}`,
        )
        .join("\n\n");

      return {
        response: `Academic Background:

${eduList}

Relevant Coursework includes Cloud Computing, Advanced Algorithms, AI, and Software Architecture.`,
        type: "info",
      };
    }

    // Contact
    if (
      this.matchesPattern(normalizedQuery, [
        "contact",
        "email",
        "phone",
        "reach",
        "hire",
      ])
    ) {
      return {
        response: `Contact Information:

Email: ${this.knowledge.personal.email}
Phone: ${this.knowledge.personal.phone}
LinkedIn: ${this.knowledge.personal.linkedin}
GitHub: ${this.knowledge.personal.github}
Location: ${this.knowledge.personal.location}

Available for full-time opportunities and project collaborations.`,
        type: "info",
      };
    }

    // Certifications
    if (
      this.matchesPattern(normalizedQuery, [
        "certifications",
        "certificates",
        "credentials",
      ])
    ) {
      const certList = this.knowledge.certifications
        .map((cert: string) => `• ${cert}`)
        .join("\n");
      return {
        response: `Professional Certifications:

${certList}

These certifications validate expertise in cloud architecture, AI engineering, and software development.`,
        type: "list",
      };
    }

    // Current work
    if (
      this.matchesPattern(normalizedQuery, [
        "current",
        "now",
        "present",
        "latest",
      ])
    ) {
      const current = this.knowledge.experience[0];
      return {
        response: `Currently working as ${current.role} at ${current.company} since ${current.period.split(" - ")[0]}.

Current Project: ${current.project}
Technologies: ${current.technologies.join(", ")}

Leading development of Water Utility web application serving 500+ users.`,
        type: "info",
      };
    }

    // Default response for unrecognized queries
    return {
      response: `Query not recognized. Available topics: about, experience, skills, projects, education, contact, certifications. Type 'help' for full command list.`,
      type: "error",
    };
  }

  private matchesPattern(query: string, patterns: string[]): boolean {
    return patterns.some((pattern) => query.includes(pattern));
  }
}
