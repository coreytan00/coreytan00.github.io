import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion"
import Links from "./Links";

const HeaderProfile: React.FC = () => {
  const name = "Corey Tan"

  return (
    <div className='me-container'>
      <motion.div className="me-img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <img style={{ width: "42%", height: "42%" }} src={"/purpleme.jpg"} />
      </motion.div>
      <motion.div className="me-description-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="me-name">
          <Typography color="primary" variant="h2">
            <strong>{name}</strong>
          </Typography>
        </div>
        <div className="me-description">
          <Typography color="primary" variant="h4">
            Full Stack Engineer 
            <br></br>
            Music Producer
          </Typography>
        </div>
        <div className="me-links">
        <Links />
        </div>
      </motion.div>
      
    </div>
  );
};

export default HeaderProfile;
