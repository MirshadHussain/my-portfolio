import { projects } from '../data/projects';
import { infoItems, experienceData, educationData } from '../data/aboutData';
import { leftSkills, rightSkills } from '../data/skills';
import { infoCards } from '../data/contactData';

// Generate dynamic prompt context from actual portfolio data files
const allSkills = [...leftSkills, ...rightSkills].map(s => `${s.name} (${s.percent})`).join(', ');

const projectsSummary = projects.map(p => 
  `- ${p.title} (${p.type}, ${p.year}, Status: ${p.status}): ${p.description} Tags: ${p.tags.join(', ')}. Live/GitHub: ${p.githubUrl}`
).join('\n');

const expSummary = experienceData.map(e => 
  `- ${e.role} at ${e.company} (${e.period}): ${e.description}`
).join('\n');

const eduSummary = educationData.map(e => 
  `- ${e.role} at ${e.company} (${e.period}): ${e.description}`
).join('\n');

const infoSummary = infoItems.map(i => `${i.label}: ${i.value}`).join(', ');
const contactSummary = infoCards.map(c => `${c.label}: ${c.value}`).join(', ');

export const SYSTEM_INSTRUCTION = `
You are Mirshad AI, an intelligent, helpful, and friendly virtual assistant on Mirshad Hussain's personal portfolio website.
Your goal is to introduce visitors to Mirshad's engineering background, showcase his projects, explain his technical skills, and help recruiters or clients get in touch with him.

Here is Mirshad's official information:
- **Name**: Mirshad Hussain
- **Location**: Weligama, Sri Lanka
- **Birthdate**: 2005.03.05
- **Phone**: +94 776559959
- **Email**: mirshadhhussain@gmail.com
- **General Info**: ${infoSummary}
- **Contact Details**: ${contactSummary}

**Education**:
${eduSummary}

**Experience**:
${expSummary}

**Core Skills**:
${allSkills}

**Featured Projects**:
${projectsSummary}

**Guidelines**:
1. Be professional, polite, enthusiastic, and concise.
2. Keep your answers brief (2-4 sentences max per response unless asked for detailed explanations).
3. If asked about a project, highlight key features, tech stack, and mention live links if available.
4. If asked about hiring or contacting Mirshad, provide his email (mirshadhhussain@gmail.com) and phone (+94 776559959).
5. If someone asks a general software engineering or data science question, answer helpfully while relating it back to Mirshad's expertise where relevant.
6. Do not fabricate facts about Mirshad beyond what is provided above.
`;

/**
 * Intelligent local fallback response when Gemini API key is unavailable or network fails
 */
export function generateLocalFallbackResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('who are you')) {
    return "Hello! 👋 I'm Mirshad's AI Assistant. I can answer questions about Mirshad's projects, technical skills, education, and how to get in touch with him. How can I help you today?";
  }

  if (q.includes('project') || q.includes('work') || q.includes('built') || q.includes('app') || q.includes('saas') || q.includes('gym')) {
    const projList = projects.map(p => `• **${p.title}** (${p.type}): ${p.description}`).join('\n\n');
    return `Mirshad has built several high-impact projects:\n\n${projList}\n\nYou can click any project in the Projects page to view full case studies!`;
  }

  if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('language') || q.includes('framework')) {
    return `Mirshad specializes in full-stack web development, desktop applications, and data science:\n\n` +
      `• **Frontend & UI**: React (90%), JavaScript (85%), Tailwind CSS (88%)\n` +
      `• **Backend & Desktop**: Node.js (80%), Electron (65%)\n` +
      `• **Data Science & DBs**: Python (75%), SQL & PostgreSQL (70%), Data Analysis (72%)`;
  }

  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('message')) {
    return `You can reach Mirshad directly through the following channels:\n\n` +
      `📧 **Email**: mirshadhhussain@gmail.com\n` +
      `📱 **Phone**: +94 776559959\n` +
      `📍 **Location**: Weligama, Sri Lanka\n` +
      `🐙 **GitHub**: github.com/MirshadHussain\n` +
      `💼 **LinkedIn**: linkedin.com/in/mirshadh-hussain`;
  }

  if (q.includes('education') || q.includes('study') || q.includes('sltc') || q.includes('degree') || q.includes('school')) {
    return `Mirshad is pursuing a **BSc (Hons) in Data Science** at Sri Lanka Technology Campus (SLTC) (2025 – 2029), focusing on machine learning, statistics, data analytics, and database management. He also holds a Diploma in Cyber Security.`;
  }

  if (q.includes('experience') || q.includes('background') || q.includes('freelance') || q.includes('job')) {
    return `Mirshad works as a **Freelance Developer** (2025 – Present), building custom desktop applications and SaaS platforms for client businesses such as Southern Fitness Centre in Weligama and retail electronics shops.`;
  }

  return `Thanks for asking! Mirshad is a Data Science undergraduate & Freelance Developer skilled in React, Node.js, Python, Electron, and PostgreSQL. Feel free to ask about his **projects**, **skills**, **education**, or **contact info**!`;
}
