import Typography from "@mui/material/Typography";
import "./styles.css";
import CodeIcon from '@mui/icons-material/Code';

interface AboutProps {
  aboutDescription: string;
  aboutDescription2: string;
  aboutDescription3: string;
}

const About: React.FC<AboutProps> = ({aboutDescription, aboutDescription2, aboutDescription3}) => {
  return(
    <div className="about-container">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      <div className="about-description">
        <Typography variant="h6" color="primary">
          {aboutDescription}
          <br></br><br></br>
          {aboutDescription2}
          <br></br><br></br>
          {aboutDescription3}
        </Typography>
      </div>
      <div className="about-skills">
        <Typography variant="h5" color="primary">
          <div style={{ display: 'inline-block' }} className="logo">
            <CodeIcon style={{ fontSize: 30}} color="secondary"/>
          </div>
          <strong>Tech Stack</strong>
          <br></br><br></br>
          <div className='tech-container'>
            <img title="Python3" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <img title="React" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img title="AWS" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            <img title="Java" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <img title="Git" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            
            <img title="C" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
            <img title="C++" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
            <img title="JavaScript" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img title="TypeScript" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <img title="Github" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          
            <img title="Flask" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
            <img title="HTML5" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
            <img title="CSS3" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
            <img title="NodeJS" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <img title="NPM" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
            
            <img title="Bash" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
            <img title="Material UI" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            <img title="MySQL" style={{ width: "20%" }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
            
            
          </div>
        </Typography>
      </div>
    </div>
  );
};






export default About;