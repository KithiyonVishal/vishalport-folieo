import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, BriefcaseBusiness, Check, Download, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import "./styles.css";

const skills = [
  "Social Media Marketing", "Content Strategy & Planning", "Content Creation & Copywriting",
  "Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Meta Ads Basics",
  "Google Ads Basics", "Marketing Analytics", "Canva", "CapCut", "Brand Building",
  "Campaign Planning", "MS Excel & Reporting", "Content Writing"
];

const clients = [
  {
    name: "INDSYS Infotech",
    text: "Social media content, campaign planning, SEO captions, service-focused posters, WhatsApp campaigns and promotional creatives."
  },
  {
    name: "Golden Giraffe",
    text: "Brand building, social media strategy, SEO-focused content, campaign planning, website content and promotional creatives."
  },
  {
    name: "Regards & Co",
    text: "Social media content, SEO captions, promotional creatives and product-focused campaigns for corporate and celebration gifting."
  },
  {
    name: "Lands & Care",
    text: "Social media content, promotional posters, captions and marketing communication for property management services."
  },
  {
    name: "Keerthie Snacks",
    text: "Product-focused posters, captions and promotional content supporting the brand's online presence."
  },
  {
    name: "Raindrive",
    text: "WhatsApp marketing campaigns, customer-focused messaging, CTAs, quick replies and campaign tracking for managed backup and data protection services."
  }
];

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <a className="logo" href="#home">V<span>A</span></a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="#contact">Let's Talk <ArrowUpRight size={16}/></a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="heroCopy">
            <p className="eyebrow"><Sparkles size={15}/> DIGITAL MARKETING EXECUTIVE</p>
            <h1>Turning ideas into <em>digital impact.</em></h1>
            <p className="heroText">
              Digital Marketing professional focused on social media marketing, SEO,
              content strategy and campaign management, with a strong IT background.
            </p>
            <div className="actions">
              <a className="primary" href="#work">Explore My Work <ArrowUpRight size={18}/></a>
              <a className="secondary" href="#contact">Get In Touch</a>
            </div>
            <div className="quickFacts">
              <span><MapPin size={16}/> Coimbatore</span>
              <span><BriefcaseBusiness size={16}/> Jul 2026 – Present</span>
            </div>
          </div>

          <div className="heroVisual">
            <div className="photoFrame">
              <div className="photoGlow"></div>
              <img src="/profile.jpg" alt="Vishal A" />
            </div>
            <div className="floatingCard">
              <strong>Content + Strategy</strong>
              <span>Creative thinking backed by analytics.</span>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="sectionTag">01 / ABOUT</div>
          <div className="twoCol">
            <h2>Creative marketing with an <em>analytical edge.</em></h2>
            <div>
              <p>
                Currently working at INDSYS Infotech, managing digital marketing
                activities for multiple brands and clients across IT, branding,
                gifting, property management, snacks and data protection services.
              </p>
              <p>
                My work combines content creation, campaign planning, SEO-focused
                copy, promotional creatives and customer-focused communication.
              </p>
            </div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="sectionTag">02 / EXPERIENCE</div>
          <div className="experienceHead">
            <div>
              <p className="mini">CURRENT ROLE</p>
              <h2>Digital Marketing Executive</h2>
              <p className="company">INDSYS Infotech · Coimbatore</p>
            </div>
            <span className="date">Jul 2026 — Present</span>
          </div>
          <div className="clientGrid">
            {clients.map((client, i) => (
              <article className="clientCard" key={client.name}>
                <span className="number">0{i + 1}</span>
                <h3>{client.name}</h3>
                <p>{client.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work section" id="work">
          <div className="sectionTag">03 / PROJECTS</div>
          <div className="twoCol">
            <h2>Selected <em>marketing work.</em></h2>
            <p>Focused on building visibility, consistency and stronger audience engagement.</p>
          </div>
          <div className="projectGrid">
            <article className="project featured">
              <span>01</span>
              <h3>Brand Awareness Strategy</h3>
              <p>Created social media plans to improve brand visibility and audience engagement.</p>
              <ul><li>Campaign ideas</li><li>Content calendars</li><li>Audience engagement</li></ul>
            </article>
            <article className="project">
              <span>02</span>
              <h3>Competitor Analysis</h3>
              <p>Analyzed competitor pages, engagement patterns and trending content strategies.</p>
              <ul><li>Content positioning</li><li>Trend analysis</li><li>Growth opportunities</li></ul>
            </article>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="sectionTag">04 / SKILLS</div>
          <h2>Tools, skills & <em>strengths.</em></h2>
          <div className="skillCloud">
            {skills.map(skill => <span key={skill}>{skill}</span>)}
          </div>
          <div className="bottomInfo">
            <div><p className="mini">SOFT SKILLS</p><p>Creativity · Communication · Leadership · Critical Thinking · Teamwork · Audience Engagement</p></div>
            <div><p className="mini">LANGUAGES</p><p>English · Tamil</p></div>
            <div><p className="mini">EDUCATION</p><p>B.Tech — Information Technology<br/>SNS College of Technology, Coimbatore · 2022–2026<br/>CGPA: 7.91/10</p></div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="sectionTag">05 / CONTACT</div>
          <div className="contactBox">
            <div>
              <p className="eyebrow">LET'S WORK TOGETHER</p>
              <h2>Have an idea?<br/><em>Let's make it happen.</em></h2>
            </div>
            <div className="contactLinks">
              <a href="tel:6380377379"><Phone size={18}/> 6380377379</a>
              <a href="mailto:kithiyonvishal2004@gmail.com"><Mail size={18}/> kithiyonvishal2004@gmail.com</a>
              <a href="https://www.linkedin.com/in/vishal-a-78432725b/?isSelfProfile=true" target="_blank"><ArrowUpRight size={18}/> LinkedIn Profile</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Vishal A</span>
        <span>Digital Marketing Executive</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
