import React, { useState, useRef, useEffect } from 'react';
import './terminal.css';
import { SiPython, SiJavascript, SiMysql, SiReact, SiNodedotjs, SiDotnet, SiFastapi, SiStreamlit, SiFlask, SiPytorch, SiDocker, SiJenkins } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import pgcilImg from './assets/experience/pgcil.png';
import coeetImg from './assets/experience/coeet.JPG';
import creditImg from './assets/projects/credit-scoring.jpg';
import trafficImg from './assets/projects/traffic-marl.png';

const ABOUT_TEXT = `I'm a Computer Science undergraduate who recently completed an AI-focused internship at Power Grid Corporation of India (PGCIL), where I worked on developing a document intelligence system applying generative AI, semantic search, and intelligent document processing.

I designed a full-stack solution combining real-time data extraction, vector-based retrieval, and large language models to make complex technical documentation searchable and interpretable—integrating AI models with backend services, search infrastructure, and interactive UIs.

Previously, I co-developed a machine learning–driven credit scoring system (MERN + Random Forest) delivering end-to-end functionality from data capture to inference.

I like building applied AI that bridges backend systems and user-facing tools (GenAI, document intelligence, AI-enabled search) and look forward to contributing to innovative intelligent systems.`;

// Replace previous inline SVG GitHub/LinkedIn icons with react-icons variants
const GitHubIcon = () => <FaGithub size={22} />;
const LinkedInIcon = () => <FaLinkedin size={22} />;

const skillsNode = (
  <div className="skillsGrid">
    <a href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer" title="Python" className="skillLink"><span className="skillIcon"><SiPython /></span>Python</a>
    <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" title="JavaScript" className="skillLink"><span className="skillIcon"><SiJavascript /></span>JavaScript</a>
    <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" title="SQL/MySQL" className="skillLink"><span className="skillIcon"><SiMysql /></span>SQL</a>
    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" title="React" className="skillLink"><span className="skillIcon"><SiReact /></span>React</a>
    <a href="https://nodejs.org/en/docs" target="_blank" rel="noopener noreferrer" title="Node.js" className="skillLink"><span className="skillIcon"><SiNodedotjs /></span>Node.js</a>
    <a href="https://dotnet.microsoft.com/en-us/learn" target="_blank" rel="noopener noreferrer" title=".NET" className="skillLink"><span className="skillIcon"><SiDotnet /></span>.NET</a>
    <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" title="FastAPI" className="skillLink"><span className="skillIcon"><SiFastapi /></span>FastAPI</a>
    <a href="https://streamlit.io/" target="_blank" rel="noopener noreferrer" title="Streamlit" className="skillLink"><span className="skillIcon"><SiStreamlit /></span>Streamlit</a>
    <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" title="Flask" className="skillLink"><span className="skillIcon"><SiFlask /></span>Flask</a>
    <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" title="PyTorch" className="skillLink"><span className="skillIcon"><SiPytorch /></span>PyTorch / CV</a>
    <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" title="Docker" className="skillLink"><span className="skillIcon"><SiDocker /></span>Docker</a>
    <a href="https://www.jenkins.io/doc/" target="_blank" rel="noopener noreferrer" title="Jenkins" className="skillLink"><span className="skillIcon"><SiJenkins /></span>Jenkins CI/CD</a>
  </div>
);

// Data for experience & projects (images optional; add files later in src/assets/projects or src/assets/experience)
const EXPERIENCE = [
  {
    id: 'pgcil',
    title: 'Intern, Powergrid Corporation of India Ltd. (PGCIL)',
    period: 'Jun 2025 – Jul 2025',
    summary: 'Built a GenAI-powered document intelligence & RAG system enabling Q&A over large technical PDFs; dual deployment paths (Streamlit prototype + .NET UI with FastAPI backend); integrated OCR, semantic search, and vector DB for 100+ page documents.',
    stack: ['GenAI','RAG','OCR','Semantic Search','Vector DB','FastAPI','.NET','Streamlit'],
    image: pgcilImg
  },
  {
    id: 'coeet',
    title: 'Learning Assistant, Centre of Excellence in Educational Technology – NIIT University',
    period: 'Jan 2024 – May 2024',
    summary: 'Mentor mapping workflow, evaluation form design, mentor workshop execution, Python automation for non‑respondent detection, represented the org in NAAC audit.',
    stack: ['Python','Automation','Process Design','Mentorship'],
    image: coeetImg
  }
];

const PROJECTS = [
  {
    id: 'credit-scoring',
    title: 'ML-integrated Credit Scoring System',
    period: '2025',
    summary: 'Real-time credit scoring web platform (MERN + Random Forest). Flask ML microservice, Docker Compose orchestration, Jenkins CI/CD, automated scoring & analytics.',
    stack: ['MongoDB','Express','React','Node','Random Forest','Flask','Docker','Jenkins'],
    image: creditImg,
    repo: 'https://github.com/NotYC/ML-integrated-CreditScoring'
  },
  {
    id: 'traffic-marl',
    title: 'Multi-Agent Traffic Management (Review)',
    period: '2025',
    summary: 'Literature review & evaluation of decentralized traffic control with YOLOv4, DeepSORT, A2C, DQN, STMARL; SUMO simulations; congestion & queue length metrics; ICETESS-2025 (Springer).',
    stack: ['YOLOv4','DeepSORT','A2C','DQN','STMARL','SUMO','Research'],
    image: trafficImg
  }
];

function CardsSection({ items, heading }) {
  return (
    <div className="cardsSection">
      <h3 className="cardsHeading">{heading}</h3>
      <div className="cardsGrid">
        {items.map(it => (
          <div key={it.id} className="infoCard" data-id={it.id}>
            {it.image && <div className="cardImageWrap"><img src={it.image} alt={it.title} className="cardImage" loading="lazy" /></div>}
            <div className="cardBody">
              {it.repo && (
                <a href={it.repo} className="cardLinkIcon" target="_blank" rel="noopener noreferrer" aria-label={`${it.title} repository`}><FaGithub size={18} /></a>
              )}
              <h4 className="cardTitle">{it.title}</h4>
              <div className="cardPeriod">{it.period}</div>
              <p className="cardSummary">{it.summary}</p>
              <div className="cardTags">
                {it.stack.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Update commands for rich cards
const COMMANDS = {
  help: {
    description: 'List available commands',
    run: () => Object.keys(COMMANDS).map(c => ` - ${c}: ${COMMANDS[c].description}`).join('\n')
  },
  welcome: {
    description: 'Show welcome message',
    run: () => `Hi, I'm Samarth Tanay, a Software & AI Engineer.\n\nType 'help' to explore: about, experience, projects, skills, education, contact.`
  },
  about: { description: 'About me', run: () => ABOUT_TEXT },
  experience: { /* existing string output */ description: 'Professional experience', run: () => <CardsSection heading="Experience" items={EXPERIENCE} /> },
  projects: { description: 'Key projects', run: () => <CardsSection heading="Projects" items={PROJECTS} /> },
  skills: { description: 'Skills & technologies (icons clickable)', run: () => skillsNode },
  education: { description: 'Education background', run: () => `NIIT University, BTech CSE (2022–2026) | CGPA: 9.58\nRelevant Modules: Machine Learning; Deep Learning & Generative AI; Agentic AI & AI Agents\n\nGyan Bharati School, Saket (CBSE)\n - XII (2022)\n - X (2020)` },
  contact: { description: 'Contact & form', run: () => <ContactPanel /> },
  clear: { description: 'Clear the terminal', run: (_args, api) => { api.clear(); return ''; } }
};

function ContactPanel() {
  return (
    <div className="contactPanelWrap">
      <div className="contactBlock">
        <div className="contactLines">
          <div>Location: New Delhi, India</div>
          <div>Email: <a href="mailto:samarth.tanay22@st.niituniversity.in">samarth.tanay22@st.niituniversity.in</a></div>
          <div>Phone: <a href="tel:+918130831704">+91 8130831704</a></div>
        </div>
        <div className="contactIcons">
          <a href="https://www.linkedin.com/in/samarth-tanay/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="iconLink linkedin"><LinkedInIcon /></a>
          <a href="https://github.com/samarth-tanay17" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="iconLink github"><GitHubIcon /></a>
        </div>
      </div>
      <form className="contactForm" action="https://formsubmit.co/samarth.tanay22@st.niituniversity.in" method="POST">
        <h3 className="formHeading">Send me a message</h3>
        {/* FormSubmit configuration */}
        <input type="hidden" name="_subject" value="Portfolio Contact" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        {/* Honeypot */}
        <input type="text" name="_honey" style={{display:'none'}} tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <input type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
        <input type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
        <textarea name="message" placeholder="Your Message" rows={6} required aria-label="Your Message" />
        <button type="submit" className="sendBtn"><FaPaperPlane size={16} /> <span>Send Message</span></button>
        <div className="sentNote" style={{opacity:.8}}>Form posts to email via FormSubmit.</div>
      </form>
    </div>
  );
}

export default function Terminal() {
  const [lines, setLines] = useState([{ prompt: true, command: 'welcome', output: COMMANDS.welcome.run() }]);
  const [current, setCurrent] = useState('');
  const bottomRef = useRef(null);

  const runCommand = (raw) => {
    const [cmd, ...args] = raw.trim().split(/\s+/);
    if (!cmd) return;
    const entry = COMMANDS[cmd];
    let output;
    if (entry) {
      output = entry.run(args, { clear: () => setLines([]) });
    } else {
      output = `Command not found: ${cmd}. Type 'help'.`;
    }
    setLines(l => [...l, { prompt: true, command: raw, output }]);
    setCurrent('');
  };

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [lines]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') runCommand(current);
    else if (e.key === 'c' && e.ctrlKey) setCurrent('');
  };

  return (
    <div className="terminalContainer">
      <nav className="commandBar">
        {Object.keys(COMMANDS).map(c => (
          <button key={c} onClick={() => runCommand(c)}>{c}</button>
        ))}
      </nav>
      <div className="terminalWindow">
        {lines.map((l, i) => {
          const isString = typeof l.output === 'string';
          return (
            <div key={i} className="entry">
              <div><span className="user">samarth@portfolio</span>:~$ <span className="cmdText">{l.command}</span></div>
              {l.output && (isString ? (
                <pre className="output">{l.output}</pre>
              ) : (
                <div className="output">{l.output}</div>
              ))}
            </div>
          );
        })}
        <div className="inputLine">
          <span className="user">samarth@portfolio</span>:~$ <input autoFocus value={current} onChange={e=>setCurrent(e.target.value)} onKeyDown={onKeyDown} />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
