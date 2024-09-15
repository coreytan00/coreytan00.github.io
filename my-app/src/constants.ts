export const AboutMe = "Hey, welcoming to my portfolio! My name is Corey Tan and I am \
currently a fullstack engineer with Cienet at Google in Santa Clara, California.\
I have extensive experience in Python and React, as well as\
cloud frameworks such as AWS."

export const AboutMe2 = "Apart from coding, I am also a funded day trader, music producer, and entrepreneur. I aspire \
to eventually expand my repetoire and become a music artist myself! Check out my work on soundcloud if you have some time!"

export const AboutMe3 = "I am seeking for an opportunity in which I can contribute to the latest technological advances. I am always\
curious about recent innovations, and I love to be intellectually challenged. If you think you have an opening position that may fit me, let's connect!"

export const PROJECTS = [
  {
    title: "This Website!",
    link: "/",
    src: "port.png",
    description: "Created this portfolio in React to update my older portfolio. Hosted on Github Pages. Happy with how it turned out!",
    languages: ["React", "Typescript", "HTML", "CSS"],
    categories: ["Material UI", "Framer Motion"],
    },
  {
    title: "Machine Learning in Minecraft",
    link: "https://www.youtube.com/embed/lDvnZDauJ0E",
    src: "cows.png",
    description: "Agent trained to search and shoot for cows with a bow and arrow. The goal is to defeat as \
    many cows as possible within a one minute time frame. Reinforcement learning will encourage the agent in \
    getting around obstacles, detecting shootable cows, and defeating as many as possible each mission. The \
    project uses Malmo, an AI platform set in Minecraft.",
    languages: ["Python"],
    categories: ["Machine Learning", "AI"],
  },
  {
    title: "Web Development: Yumz",
    link: "https://devpost.com/software/yumz",
    src: "yumzpic.png",
    description: "Ever wondered where to eat but had trouble deciding? Yumz aims to solve your dilemma! \
    Swipe left or right on food pictures of small businesses based on your location and Yumz will match \
    you with a food option!",
    languages: ["Javascript", "React", "AWS EC2"],
    categories: ["SQLAlchemy", "Netlify", "FastApi", "Web Development", "Hackathon"],
  },
  {
    title: "Checkers AI",
    link: "https://github.com/coreytan00/checkers",
    src: "checkers.jpg",
    description: "I created an AI for the game of Checkers for my Intro to AI course in Fall '20. \
    The AI is implemented with Monte Carlo Tree Search, performing approximately 35 simulations a second, \
    and is supervised by greedy pruning.",
    languages: ["Python"],
    categories: ["AI"],
  },
  {
    title: "Network packet sniffer",
    link: "https://github.com/coreytan00/sniffer",
    src: "data.png",
    description: "I used to get latency issues whenever I played games like League of Legends. One day I got frustrated\
    and suspected that it might be a bandwidth issue, so I coded a packet sniffer that captures all traffic. While I could \
    use a program like WireShark, I thought it would be fun to code it instead. The user can specify the running time of the \
    sniffer and is provided data about the amount of data caught in Megabits and the bandwidth usage during \
    that time. Additionally, all ipv4 packets caught are written into a text file in detail. Upon completion\
    of the project, I determined that bandwitdth was unfortunately not the issue, and the secret perpetrator \
    is still out there.",
    languages: ["Python"],
    categories: ["Networks","Sockets"],
  },
  {
    title: "Search Engine: Indexer",
    link: "https://github.com/coreytan00/indexer",
    src: "search.png",
    description: "I developed a search engine from scratch that is capable of handling tens of thousands of documents or web pages.\
    It returns accurate search results with a query response time under 200ms by utilizing page rank, word stemming, bookkeeping, \
    weighted tf-idf and simhash. Documents were stored in an inverted index for ease of access.",
    languages: ["Python", "Flask", "HTML", "CSS"],
    categories: ["Big Data"],
  },
  {
    title: "Video Game: World of Petr",
    link: "https://devpost.com/software/world-of-petr-ho6239",
    src: "petr.jpg",
    description: "During my freshman year at UCI, I had the great opportunity to witness the birth of school culture. \
    Petr is a funny looking cartoon character of our school's mascot, Peter the Anteater. A mystery student clad in a \
    black and a red beanie began distributing petr stickers to UCI students at a random time and place. Petr stickers \
    took the campus by storm. In HackUCI 2020, my team and I programmed a simple video game around Petr, inspired by \
    Final Fantasy, Oregon Trail, and Slay the Spire.",
    languages: ["Python"],
    categories: ["tkinter"],
  },
  {
    title: "Web Development: Acacia",
    link: "https://github.com/coreytan00/acacia",
    src: "acacia.png",
    description: "This is one of my first big personal projects! Fundamentally a web application that is concerned with simplifying \
    the G-suite products by condensing them into one site with a tasklist and note section incorporated. Originally, I launched it on \
    Firebase before switching to Heroku to use its built-in PostgreSQL for my authentication database. Unfortunately to this day, \
    it is still not completely finished and is on hiatus.",
    languages: ["Python", "Flask", "HTML", "CSS"],
    categories: ["SQLAlchemy", "Heroku", "Google OAuth", "Google APIs"],
  },
  {
    title: "Mobile Application: Repunzel",
    link: "https://devpost.com/software/repunzel-h15d30",
    src: "pun.jpg",
    description: "Repunzel is an image recognition pun generator created during my very first hackathon, LA Hacks 2019. This Android \
    app allows the user to take a picture and then select a generated pun caption relating to the captured photo. What's crazy is the \
    fact that we started learing Java 24 hours before attending the hackathon in order to use Android Studio to create a mobile \
    application! We still managed to develop a fully functional application that we are very proud of in the end.",
    languages: ["Java", "XML"],
    categories: ["Android Studio", "Google Cloud Vision Api", "Hackathon"],
  }
]