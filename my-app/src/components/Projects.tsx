import React from 'react';
import Typography from "@mui/material/Typography";
import './styles.css';
import { Chips } from './Chips';
import LaunchIcon from '@mui/icons-material/Launch';

interface ProjectProps {
  title: string;
  link: string;
  imageSrc: string;
  description: string;
  languages: Array<string>;
  categories: Array<string>;
}

const Project: React.FC<ProjectProps> = ({ title, link, imageSrc, description, languages, categories }) => {
  return (
    <div className="project-container">
      <div className="project-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="project-description">
        <Typography variant="h5" color="primary">
          <h2>{title} <a href={link}><LaunchIcon /></a></h2> 
        </Typography>
        <Typography variant="h6" color="primary">
          <p>{description}</p>
        </Typography>
        <Chips languages={languages} categories={categories} />
      </div>
    </div>
  );
};

export default Project;
