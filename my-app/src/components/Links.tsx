import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Links: React.FC = () => {
  const email = "mailto:coreytan00@gmail.com"
  const linkedin = "https://www.linkedin.com/in/coreytan00/"
  const github = "https://github.com/coreytan00"
  const soundcloud = "https://soundcloud.com/prod_koji"

  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="link-flex">
          <motion.div whileHover={{ scale: 1.1 }} className="link">
            <a href={linkedin}><LinkedInIcon style={{ fontSize: 130 }} color="secondary" /></a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="link">
            <a href={github}><GitHubIcon style={{ fontSize: 130 }} color="secondary" /></a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="link">
            <a href={email}><EmailIcon style={{ fontSize: 130 }} color="secondary" /></a>
          </motion.div> 
          <motion.div whileHover={{ scale: 1.1 }} className="link">
            <a href={soundcloud}><GraphicEqIcon style={{ fontSize: 130 }} color="secondary" /></a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="link">
            <a href={soundcloud}><YouTubeIcon style={{ fontSize: 130 }} color="secondary" /></a>
          </motion.div>  
        </div>
      </motion.div>
    </div>
  );
};

export default Links;
