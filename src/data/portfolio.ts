export const portfolioData = {
  about: {
    name: "Aryan",
    role: "Full Stack Developer",
    bio: "Full-stack developer focused on high-concurrency backend systems and AI-driven architecture. I bridge the gap between complex system design and intuitive, production-ready interfaces.",
    email: "aryansharma24106@gmail.com",
    socials: [
      { label: "X", url: "https://x.com/Aryan27417343" },
      { label: "Github", url: "https://github.com/AryanSharma48" },
      { label: "LinkedIn", url: "https://linkedin.com/in/aryansharma24" }
    ]
  },
  skills: [
    "Python", "JavaScript", "TypeScript", "C++", "SQL",
    "React.js", "Tailwind CSS", "HTML", "CSS",
    "Express.js", "Node.js", "RESTful APIs", "JWT",
    "MongoDB", "PostgreSQL", "Supabase", "Redis",
    "Git", "Vercel", "Render", "Firebase"
  ],
  projects: [
    {
      id: "01",
      title: "Blytz",
      tagline: "The high-speed README architect.",
      description: "A high-speed CLI Tool using Node.js to automate the generation and maintenance of professional project READMEs. Auto-scans, auto-weaves, and auto-maintains professional project docs. Achieved 1000+ downloads in the first week of release. Zero-config CLI + GitHub App.",
      tech: ["Node.js", "JavaScript", "Octokit", "NPM", "Git"],
      link: "https://npmjs.com/package/blytz",
      github: "https://github.com/aryansharma48/blytz",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "VoteAway",
      tagline: "Real-time voting at scale.",
      description: "A real-time voting and leaderboard system for 1,500+ users. High concurrency platform with sub-100ms latency, atomic Redis vote locking, smart polling via SWR, Google OAuth2, and an admin control panel for secure, scalable voting.",
      tech: ["React", "TypeScript", "Express", "Upstash Redis", "Vercel Serverless", "SWR"],
      link: "https://voting.mujoneiros.in",
      github: "https://github.com/aryansharma48/vote-away",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Creator Trust",
      tagline: "AI-powered influencer authenticity.",
      description: "A full-stack platform to evaluate influencer authenticity and recommend fair pricing using behavioral signals. Built a Random Forest-based scoring system (R² ≈ 0.92, MAE < 3) with feature engineering on engagement rate, comment uniqueness, and growth volatility.",
      tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "scikit-learn"],
      link: "https://creator-trust.vercel.app",
      github: "https://github.com/aryansharma48/creatortrust",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "SWAN",
      tagline: "AI reviewer extension for Amazon.",
      description: "A Chrome Extension using Google Gemini API to generate concise sentiment summaries from hundreds of Amazon reviews. Features a DOM-based scraping engine to extract product data directly into a browser side panel. Reduced average product research time by an estimated 70% through automated summarization.",
      tech: ["JavaScript", "Chrome Extensions (Manifest V3)", "DOM Web Scraping", "Gemini API"],
      link: "https://github.com/aryansharma48/swan-ai-assistant",
      github: "https://github.com/aryansharma48/swan-ai-assistant",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  experience: [
    {
      company: "ACM Student Chapter, MUJ",
      location: "Jaipur, India",
      roles: [
        {
          role: "Technical Head",
          period: "April 2026 – Present",
          description: [
            "Leading technical direction for chapter projects, ensuring structured development practices and scalable system design.",
            "Collaborating with cross-functional teams to design and implement scalable solutions for chapter-wide use.",
            "Promoting a project-driven learning approach, enabling members to gain end-to-end development exposure."
          ]
        },
        {
          role: "Web Development Junior Committee",
          period: "November 2025 – April 2026",
          description: [
            "Spearheaded the development of 3+ responsive event websites, optimizing for heavy traffic.",
            "Contributed to the development of a Certificate distribution platform, enabling automated generation and delivery of certificates for large scale ACM events.",
            "Collaborated with team to ensure smooth deployment and reliability during live events."
          ]
        }
      ]
    },
    {
      company: "Freelance",
      location: "Remote",
      roles: [
        {
          role: "Freelance Full-Stack Developer",
          period: "January 2026 – Present",
          description: [
            "Engineered a sales distribution platform for client, integrating order management and live salesman tracking that reduced administrative overhead by 40%.",
            "Architected responsive admin dashboards using React and JavaScript to manage complex partner access controls."
          ]
        }
      ]
    },
  ]
};
