import Typography from "@mui/material/Typography";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

interface headerProps {
  text: string
}

const HeaderWithFade: React.FC<headerProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    setIsVisible(true);
  }, []);
  
  return (
    <div style={{ display: 'inline-block' }}>
      <Typography variant="h1">
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", duration: 0.5, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </Typography>
    </div>
  );
};

export default HeaderWithFade;
