import { useState, useEffect } from 'react';
import placeholderImg from "../../../assets/imgs/Placeholder.png";

const imageMap = new Proxy({}, {
  get: (_, key) => placeholderImg
});

const ProjectWindow = ({ project, index, isExpanded, onExpand, zIndex, onZIndexChange }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScale(0.95 + Math.sin(window.scrollY * 0.003 + index) * 0.01);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  const getImage = (filename) => imageMap[filename] || placeholderImg;

  return (
    <div
      className={`preview-box ${isExpanded ? 'expanded' : ''}`}
      style={{
        transform: `scale(${scale})`,
        zIndex: isExpanded ? 9999 : zIndex,
        width: isExpanded ? '90vw' : '1000px',
        maxWidth: '100%',
        marginBottom: '4rem',
        position: isExpanded ? 'fixed' : 'relative',
        cursor: isExpanded ? 'default' : 'pointer',
      }}
      onMouseEnter={() => onZIndexChange(index)}
    >
      <div className="window-titlebar">
        <span>[ {project.title} ]</span>
        <div className="window-icons" onClick={() => onExpand(false)}>
          <span>—</span>
          <span>□</span>
          <span>×</span>
        </div>
      </div>

      <div className="preview-content">
        {!isExpanded ? (
          <>
            <div className="preview-tags">
              {project.tags?.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <div className="preview-meta">
              <span className="meta-date">{project.date}</span>
              <span className="meta-role">{project.role}</span>
            </div>

            <div className="preview-body">
              <div className="preview-photo">
                <img src={getImage(project.image)} alt={project.title} />
              </div>
              <div className="preview-desc">
                <p>{project.summary}</p>
                <button className="read-more" onClick={() => onExpand(true)}>
                  READ MORE
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="expanded-content">
            {project.details && Object.entries(project.details).map(([section, content]) => (
              <div key={section} className="detail-section">
                <h3>{section.replace(/_/g, ' ').toUpperCase()}</h3>
                <p>{content.text}</p>
                <div className="detail-images">
                  {content.images?.map((img, i) => (
                    <img
                      key={i}
                      src={getImage(img)}
                      alt={`${project.title} ${section} ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectWindow;
