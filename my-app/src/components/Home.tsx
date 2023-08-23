import { useEffect, useState } from "react";
import HeaderWithFade from "./HeaderWithFade";
import Box from "@mui/material/Box/Box";
import "./styles.css";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [showElement1, setShowElement1] = useState(false);
  const [showElement2, setShowElement2] = useState(false);
  const [showElement3, setShowElement3] = useState(false);
  const [showElement4, setShowElement4] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const header = "Hello World.."
  const header2 = "Welcome to my Portfolio."

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowElement1(true);
    }, 500);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowElement2(true);
    }, 2500);

    return () => clearTimeout(timer2);
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowElement3(true);
    }, 5400);

    return () => clearTimeout(timer3);
  }, []);

    useEffect(() => {
      const timer4 = setTimeout(() => {
        setShowElement4(true);
      }, 5400);
  
      return () => clearTimeout(timer4);
  }, []);

  return (
    <div>
      <header className="App-header">
        <Box className='header-intro'>
          {showElement1 && 
            <HeaderWithFade text={header}/>
          }
          {showElement2 && 
            <HeaderWithFade text={header2} />
          }
        </Box>
        <Box>
          {showElement3 &&
            <div className='me-container'>
              <motion.div className="img-flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <img style={{ width: "35%", height: "35%"} } src={process.env.PUBLIC_URL + '/purpleme.jpg'} />
              </motion.div>
              <motion.div className="me-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <p>Lorem Ipsum</p>
              </motion.div> 
            </div>
          }
          {showElement4 
          }
        </Box>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default Home;


