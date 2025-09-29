
import React from 'react';
import type { ReactNode } from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  icons: Array<ReactNode>;
  imageUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, icons = [], imageUrl, githubUrl }) => {
  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div style={{
        borderRadius: '15px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        paddingTop: '100%', // 1:1 Aspect Ratio
        cursor: 'pointer',
      }}>
        <img src={imageUrl} alt={name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '20px',
        }}>
          <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{name}</h3>
          <p style={{ margin: '10px 0 0', fontSize: '1rem' }}>{description}</p>
          <div style={{ marginTop: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
            {icons.map((icon) => icon)}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
