import { PresetItem } from "../types";

export const PRESETS: PresetItem[] = [
  {
    id: "saas-sales-leaders",
    label: "B2B SaaS Sales Leaders (US/Canada)",
    category: "Sales & GTM",
    inputs: {
      targetDescription: "I want to target sales leaders like VP of Sales, Director of Sales, or Chief Revenue Officers at software or SaaS companies based in the United States or Canada. The companies should be mid-market, ideally between 51 and 500 employees, and they should be actively scaling their outbound team."
    }
  },
  {
    id: "ai-tech-execs",
    label: "AI Startup Tech Executives (SF/NY)",
    category: "Engineering & AI",
    inputs: {
      targetDescription: "Looking for technical founders, Chief Technology Officers (CTO), or Head of AI/ML engineering at early-stage startups in San Francisco Bay Area, New York, or Remote. Looking for small agile teams of 10 to 50 headcount, working on generative AI or machine learning infrastructure."
    }
  },
  {
    id: "healthtech-founders",
    label: "Digital Health Founders & CEOs (Europe)",
    category: "Healthcare & Biotech",
    inputs: {
      targetDescription: "I need to find founders, CEOs, and Chief Medical Officers at healthtech, digital health, or telemedicine companies in the UK and Europe. Target headcount is 11-100 employees, focusing on B2B healthcare software integrations or clinical workflows."
    }
  }
];
