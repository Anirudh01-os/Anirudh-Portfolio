import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Research Fellow Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Fellow</h4>
                <h5>VIT Vellore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Majoring in Computer Science and Engineering[cite: 17, 18]. 
              Leading research initiatives in Artificial Intelligence and Machine Learning[cite: 15, 23]. 
              Published "Gemini TruthLens," a multimodal deepfake detection system utilizing Vertex AI and Cloud Run[cite: 15].
            </p>
          </div>

          {/* MERN Stack Developer Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Bharatversity · BITS Hyderabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and deployed full-stack web applications using the MERN stack[cite: 31, 32, 34]. 
              Integrated AI-based chatbots and automation tools to enhance user experience and meet specific client requirements[cite: 35].
            </p>
          </div>

          {/* Teaching Assistant Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Professor (TA)</h4>
                <h5>SkoolOfCode</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              September 2024 – December 2024. 
              Guided young minds globally in their first steps into programming[cite: 43, 45]. 
              Taught foundational Python programming from scratch to students across the US, Nepal, and India[cite: 44, 45].
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
