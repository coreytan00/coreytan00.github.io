import { useEffect, useState } from "react";
import HeaderWithFade from "./HeaderWithFade";
import Box from "@mui/material/Box/Box";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import Typography from "@mui/material/Typography";
import HeaderProfile from "./HeaderProfile";
import Links from "./Links";
import Project from "./Projects";
import { AboutMe, AboutMe2, AboutMe3, PROJECTS } from "../constants";
import About from "./About";
import { Link as ScrollLink } from 'react-scroll';
import { Button } from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Home: React.FC = () => {
  const [showElement1, setShowElement1] = useState(false);
  const [showElement2, setShowElement2] = useState(false);
  const [showElement3, setShowElement3] = useState(false);

  const header = "Hello World."
  const header2 = "Welcome to my Portfolio."

  //Timers
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowElement1(true);
    }, 500);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowElement2(true);
    }, 1000);

    return () => clearTimeout(timer2);
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowElement3(true);
    }, 2000);

    return () => clearTimeout(timer3);
  }, []);

  //Scroll
  const controls = useAnimation();

  const handleScroll = () => {
    const yOffset = window.scrollY;
    controls.start({ opacity: 1 - yOffset / 600 });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div style={{ backgroundImage: "url(/geo.jpg)" }} className="App-header">
        <Box className='header-intro'>
          {showElement1 &&
            <HeaderWithFade text={header} />
          }
          {showElement2 &&
            <HeaderWithFade text={header2} />
          }
        </Box>
        <Box>
          {showElement3 &&
            <HeaderProfile />
          }
        </Box>
        <Box>
            {showElement3 &&
              <div className="learn-more-container">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <motion.div whileHover={{ scale: 1.1 }} className="learn-more">
                  <ScrollLink to="aboutme" smooth={true} duration={500}>
                    <Button color="primary" variant="outlined">
                      Learn More About Me <KeyboardDoubleArrowDownIcon fontSize="small"/>
                    </Button>
                  </ScrollLink>
                </motion.div>
              </motion.div>
              </div>
            }
        </Box>
      </div>
      <body>
        <div id="aboutme" className="content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <Typography style={{ paddingBottom: "1em", paddingTop: "2em" }} variant="h3" color="primary">
              <strong>About Me. ______________________________________________</strong>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.4, duration: 1 } }}
            viewport={{ once: true }}
          >
            <About aboutDescription={AboutMe} aboutDescription2={AboutMe2} aboutDescription3={AboutMe3} />
          </motion.div>
        </div>
        <div id="projects" className="content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <Typography style={{ paddingBottom: "1em" }} variant="h3" color="primary">
              <strong>Projects {">"} _______________________________________________</strong>
            </Typography>
          </motion.div>
          {PROJECTS.map((project) =>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
              viewport={{ once: true }}
            >
              <Project title={project.title} link={project.link} imageSrc={project.src} description={project.description} languages={project.languages} categories={project.categories} />
            </motion.div>
          )}
        </div>
      </body>
    </div>
  );
}

export default Home;


