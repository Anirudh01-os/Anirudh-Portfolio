import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    // Only try to load a video if you actually provided one in Work.tsx
    if (props.video) {
      try {
        setIsVideo(true);
        const response = await fetch(`/assets/${props.video}`);
        if (!response.ok) throw new Error("Video not found");
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setVideo(blobUrl);
      } catch (error) {
        console.error("Error loading video:", error);
        setIsVideo(false);
      }
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link || "#"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor={"disable"}
      >
        {props.link && props.link !== "#" && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        
        {/* This displays your Screenshot or placeholder */}
        <img 
          src={props.image || "/images/placeholder.png"} 
          alt={props.alt || "Project Image"} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {isVideo && video && (
          <video 
            src={video} 
            autoPlay 
            muted 
            playsInline 
            loop 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          ></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
