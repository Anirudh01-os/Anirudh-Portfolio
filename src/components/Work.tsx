import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Curexa Labs",
    category: "AI Drug Discovery System",
    tools: "Deep Learning, Python, Pharmaceutical Research, Predictive Modeling",
    image: "/images/drug_discovery.png", 
    link: "#", // Add your GitHub or Project link here
    buttonText: "View Project"
  },
  {
    title: "Gemini TruthLens",
    category: "Research Publication",
    tools: "Vertex AI, Cloud Run, Multimodal Deepfake Detection, Research Paper",
    image: "/images/truthlens.png",
    link: "https://medium.com/@anirudhkoppuravuri1", // Your Medium Research link
    buttonText: "Read Research Paper"
  },
  {
    title: "ConnectX",
    category: "Networking Intelligence Platform",
    tools: "LinkedIn Data Integration, Behavioral Pattern Matching, Digital Passport",
    image: "/images/connectx.png",
    link: "#",
    buttonText: "View Project"
  },
  {
    title: "Optima X",
    category: "Financial Decision Intelligence",
    tools: "Proprietary Resonance Algorithms, Stock Market Optimization, No-Code",
    image: "/images/optimax.png",
    link: "#",
    buttonText: "View Project"
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {/* Action Button */}
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link-btn"
                          style={{
                            marginTop: '20px',
                            display: 'inline-block',
                            padding: '10px 20px',
                            border: '1px solid white',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '0.9rem'
                          }}
                        >
                          {project.buttonText}
                        </a>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
