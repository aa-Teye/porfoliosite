const botKnowledge = {
  "greetings": ["hello", "hi", "hey", "greetings", "howdy", "sup", "yo", "morning", "afternoon", "evening"],
  "greetings_response": "Hello there! I'm Alex's AI assistant. You can ask me about his skills, experience, projects, education, research, GitHub, LinkedIn, or how to contact him!",

  "topics": [
    {
      "keywords": ["skill", "stack", "tech", "language", "framework", "tool", "python", "fastapi", "react", "sql", "docker", "redis", "postgres", "database", "devops"],
      "response": "Alex's core stack is extremely robust. As a Backend Architect, he specializes in Python & FastAPI, Distributed Locking (Redis), Asynchronous I/O, and Domain-Driven Design. For Mobile/Frontend, he masters React Native and React. For DB/DevOps, he uses PostgreSQL, Docker containerization, and TimescaleDB. He is also a Media Systems Engineer skilled in vMix, OBS, WebSockets, and automated marketing funnels."
    },
    {
      "keywords": ["experience", "work", "job", "role", "employment", "company", "career", "history"],
      "response": "Alex is currently a Teaching Assistant at the Dept. of Computer Science at the University of Ghana, Youth Leader & President at The Haven ONCYM, and Livestream & Media Production Lead. He has engineered scalable enterprise systems for AreteForge, Ecktech, University of Ghana, and Meditel Inc."
    },
    {
      "keywords": ["project", "portfolio", "built", "made", "software", "app", "system"],
      "response": "Alex has built an impressive array of systems! Some highlights include: StrokeNet (Real-Time Medical Response), CPG Collect (Offline-First data collection), VelocityPass (High-concurrency Event Ticketing), UG SmartWallet (Campus Economy), and ONC Media Automation Hub. You can ask me about any specific project or check the 'Selected Projects' section!"
    },
    {
      "keywords": ["cpg collect", "cpg", "collect", "offline", "field"],
      "response": "CPG Collect is a structured data-collection platform Alex built for Consumer Packaged Goods field agents to capture real-time shelf analytics. It features a dynamic form engine with branching logic, offline-first support with React Native, and automatic sync to a centralized PostgreSQL/FastAPI backend."
    },
    {
      "keywords": ["strokenet", "stroke", "medical", "response", "ambulance", "hospital"],
      "response": "Alex served as the Lead Backend Developer for StrokeNet, a massive cross-platform ecosystem connecting patients, doctors, and ambulances simultaneously using WebRTC and Socket.IO. It includes an automated AI assessment pipeline using FastAPI, Celery, and AWS S3."
    },
    {
      "keywords": ["velocitypass", "velocity", "ticket", "event", "concurrent"],
      "response": "VelocityPass is an Event Ticketing Engine. Alex engineered a high-throughput API using FastAPI and Redis distributed locks to eliminate race conditions during 10k+ concurrent user traffic spikes, leveraging PostgreSQL row-level locking to guarantee atomic transactions."
    },
    {
      "keywords": ["smartwallet", "wallet", "ug", "campus", "finance", "money"],
      "response": "UG SmartWallet is a closed-loop campus economy system that Alex is currently working on! It's a work in progress where he is building a robust double-entry ledger using PostgreSQL row-level locking to ensure zero money creation/loss during transactions, and utilizing Pydantic v2 for rigorous data validation."
    },
    {
      "keywords": ["media", "streaming", "audio", "video", "vmix", "obs", "livestream", "broadcast", "onc"],
      "response": "Alex is deeply involved in Media Systems Engineering. He built the Dominion Media API for memory-efficient audio streaming using Python Async Generators, AWS S3, and CloudFront. He also built the ONC Media Automation Hub, a React Native app with a FastAPI backend that integrates directly with vMix API via WebSockets for real-time remote broadcast control."
    },
    {
      "keywords": ["data", "pipeline", "quantdata", "finance", "simulator", "worldquant"],
      "response": "In Financial Engineering, Alex built the QuantData Pipeline using TimescaleDB and Pydantic v2 to process thousands of financial market ticks per second. He also developed a WorldQuant Financial Simulator utilizing Pandas and NumPy for complex vectorized mathematical calculations on historical datasets."
    },
    {
      "keywords": ["ai", "machine learning", "ml", "symptom", "fraud", "gnn", "neural network"],
      "response": "Alex is highly active in AI and Research. He develops Transferable Foundation Graph Neural Networks (GNNs) using PyTorch. He built an AI-wrapper Symptom Checker Microservice using Celery and RabbitMQ, and a Real-Time Fraud Detection pipeline processing Kafka streams in under 50ms using Redis and FastAPI."
    },
    {
      "keywords": ["vs code", "extension", "audioalert", "sound", "alert", "error"],
      "response": "AudioAlert is a VS Code Extension Alex developed using TypeScript and the VS Code Extension API. It hooks into diagnostic events to play an alert sound (either custom or native system sounds) whenever a syntax error or exception is detected in the editor."
    },
    {
      "keywords": ["school", "hospital", "management", "system"],
      "response": "Alex has architected comprehensive management systems, including a Hospital Management System with RBAC and an optimized relational database, and a School Management System for student enrollment and grading with automated report pipelines. Both rely on Python, FastAPI, and PostgreSQL."
    },
    {
      "keywords": ["mentorship", "tracker", "performance", "global", "web", "architecture", "growth"],
      "response": "Alex designed a Mentorship Performance Tracker using React Native and FastAPI. He also works on Global Web Systems Architecture, building SEO-optimized, Next.js/React platforms integrated with automated marketing funnels for user acquisition (Growth Engineering)."
    },
    {
      "keywords": ["contact", "email", "reach", "hire", "message", "touch"],
      "response": "You can reach Alex directly at alexteyeametepey@gmail.com or through the 'Contact Me' button at the top of the page."
    },
    {
      "keywords": ["github", "git", "code", "repo", "repository", "source"],
      "response": "Check out Alex's vast array of code and open-source backend architectures on GitHub: https://github.com/aa-Teye"
    },
    {
      "keywords": ["linkedin", "connect", "social", "network"],
      "response": "Connect with Alex professionally on LinkedIn: https://www.linkedin.com/in/alex-ametepey-1123a3205"
    },
    {
      "keywords": ["cv", "resume", "download", "document", "hire"],
      "response": "You can download Alex's CV from the top of the page using the 'Download CV' button in the hero section. He is currently available for work!"
    },
    {
      "keywords": ["education", "degree", "university", "school", "study", "ug", "worldquant"],
      "response": "Alex is associated with the University of Ghana, currently serving as a Teaching Assistant in the Dept. of Computer Science. He has also undertaken advanced studies in Financial Engineering with WorldQuant University."
    },
    {
      "keywords": ["about", "who", "alex", "ametepey", "bio", "philosophy", "goal", "vision"],
      "response": "Alex Teye Ametepey is a Backend Architect, Python Developer, and Media Systems Engineer. His core philosophy is: 'Growth is an Engineering Problem'. Whether optimizing high-concurrency backends or developing Graph Neural Networks, his goal is to build systems that aren't just stable, they are built to scale."
    }
  ],
  "default_response": "I might not have the specific answer to that right now, but try asking me about Alex's specific projects (like CPG Collect, StrokeNet, VelocityPass), his skills, his media engineering, his AI research, or his contact info!"
};
