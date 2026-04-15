import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* BOX 1: AI & AGENTIC SYSTEMS */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AGENTIC AI & CLOUD</h3>
              <h4>Google Campus Trained Intelligence</h4>
              <p>
                Specializing in Agentic AI architectures. Experienced in building scalable systems using Vertex AI, Gemini, 
                GCP, and Model Context Protocol (MCP) to automate complex decision-making processes.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Gemini & ADK</div>
                <div className="what-tags">GCP & Vertex AI</div>
                <div className="what-tags">MCP Protocol</div>
                <div className="what-tags">Agent-to-Agent Comms</div>
                <div className="what-tags">Microsoft Fabric</div>
                <div className="what-tags">Scalable Arch</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* BOX 2: INNOVATION & RESEARCH */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CUREXA LABS</h3>
              <h4>AI Drug Discovery System</h4>
              <p>
                Solving 150+ LeetCode problems to sharpen algorithmic logic. Currently building Curexa Labs, 
                merging Deep Learning with Pharmaceutical research to accelerate drug discovery.
              </p>
              <h5>Focus Areas</h5>
              <div className="what-content-flex">
                <div className="what-tags">AI Drug Discovery</div>
                <div className="what-tags">Python & MERN</div>
                <div className="what-tags">Algorithm Design</div>
                <div className="what-tags">Deep Learning</div>
                <div className="what-tags">Research Fellow</div>
                <div className="what-tags">GSoC Contributor</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
