import { Smartphone, Database, Users, Code, BarChart, Cloud, Brain, Zap, MessageSquare, TrendingUp, Shield, Globe, Mail, Clock, DollarSign, Activity, Target, Layers, Laptop, ShoppingCart, Layout } from 'lucide-react';

export const linkedInData = {
    contact: {
        name: "Mari Eswar",
        role: "Senior Operations Manager",
        location: "Bengaluru, India",
        mobile: "9500365660",
        email: "marieswar873@gmail.com",
        linkedin: "https://www.linkedin.com/in/marieswar873",
        github: "https://github.com/marieswar873-sys",
        portfolio: "https://marieswar873-sys.github.io/My-personal-portfolio-Resume/"
    },
    summary: {
        coreFocus: "Driving scalable growth through automated data intelligence.",
        about: "I am a strategic, innovative, and execution-driven leader with 4+ years of experience in AI-powered operations and advanced business automation. My expertise lies in scaling teams and systems from the ground up. I specialize in designing and deploying AI/ML solutions and high-performance dashboards that have delivered 80% faster outcomes in my previous roles. Passionate about sales excellence, team coaching, and cross-departmental synergy, I blend relentless learning with creative problem-solving to drive revenue and automate complexity.",
        objectives: "Currently seeking roles as a Senior Operations Manager, Revenue Operations Manager, or AI Automation Lead."
    },
    heroSlides: [
        {
            title: "Operations & AI",
            subtitle: "Scaling Business through Automation",
            emoji: "🚀",
            bgGradient: "from-blue-600 to-purple-600"
        },
        {
            title: "Business Automation",
            subtitle: "Streamlining Workflows with n8n",
            emoji: "⚡",
            bgGradient: "from-yellow-500 to-red-500"
        },
        {
            title: "Revenue Growth",
            subtitle: "Data-Driven Strategies for Sales",
            emoji: "📈",
            bgGradient: "from-green-500 to-emerald-700"
        },
        {
            title: "Team Leadership",
            subtitle: "Empowering Teams of 150+",
            emoji: "👥",
            bgGradient: "from-indigo-500 to-blue-500"
        },
        {
            title: "Data Analytics",
            subtitle: "Insights from BigQuery & SQL",
            emoji: "📊",
            bgGradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Customer Retention",
            subtitle: "AI-Powered Churn Prediction",
            emoji: "🤝",
            bgGradient: "from-red-500 to-orange-500"
        },
        {
            title: "Process Optimization",
            subtitle: "Eliminating Manual Work",
            emoji: "⚙️",
            bgGradient: "from-gray-600 to-gray-800"
        },
        {
            title: "Tech Stack Integration",
            subtitle: "Connecting APIs & Tools",
            emoji: "🔗",
            bgGradient: "from-cyan-500 to-blue-600"
        },
        {
            title: "Strategic Planning",
            subtitle: "Vision to Execution",
            emoji: "🎯",
            bgGradient: "from-teal-500 to-green-600"
        },
        {
            title: "Future of Work",
            subtitle: "AI Agents & Digital Workers",
            emoji: "🤖",
            bgGradient: "from-violet-600 to-fuchsia-600"
        }
    ],
    skills: [
        { icon: <Brain size={24} />, title: "AI & ML", desc: "Machine Learning, AI-Powered Automation" },
        { icon: <Database size={24} />, title: "Data Analytics", desc: "BigQuery, SQL, Power BI, Metabase" },
        { icon: <Zap size={24} />, title: "Automation", desc: "n8n, Zapier, Google Apps Script" },
        { icon: <Code size={24} />, title: "Development", desc: "Python, React, API Integration" },
        { icon: <Users size={24} />, title: "Leadership", desc: "Team Management (150+), Coaching" },
        { icon: <BarChart size={24} />, title: "Revenue Ops", desc: "Funnel Optimization, KPI Tracking" }
    ],
    certifications: [
        "AWS Certified AI Practitioner (AIF-C01) Cert Prep",
        "Introduction to Python and Machine Learning",
        "Data Analytics Using AI",
        "Using AI to Improve Ops for Your Data Organization",
        "Leadership Mindsets"
    ],
    experience: [
        {
            company: "LOKAL",
            role: "Senior Operations Manager",
            period: "Sep 2025 - Present",
            location: "Bengaluru, India",
            description: [
                "Leads operations across five verticals (Astro, Eaze, Gyan TV, Dostt, Agrilokal), overseeing 50,000+ users.",
                "Built real-time AI dashboards (Power BI, Metabase) to track acquisition, conversion, and funnel velocity.",
                "Designed n8n workflows for grievance management and ticketing (Exotel, Freshdesk, WhatsApp), improving efficiency by 40%.",
                "Completed an Exotel IVR–Freshdesk AI integration in 3 days (industry standard: 2–3 weeks), cutting response times by 35%.",
                "Coordinated cross-functional teams to increase demo show-up rates by 28% and delivered analytics reports to the C-suite."
            ]
        },
        {
            company: "LOKAL",
            role: "Operations Manager",
            period: "Sep 2024 - Sep 2025",
            location: "Bengaluru, India",
            description: [
                "Onboarded 15+ business partners using structured Standard Operating Procedures (SOPs).",
                "Deployed Google Apps Script and n8n solutions for sales reporting, eliminating 60% of manual work.",
                "Built dashboards to monitor acquisition costs, funnel health, and Monthly Recurring Revenue (MRR).",
                "Trained 8+ team members on new automation tools to drive faster adoption."
            ]
        },
        {
            company: "TUMBLEDRY",
            role: "Franchise Partner & Territory Sales Manager",
            period: "Aug 2023 - Sep 2024",
            location: "Coimbatore, India",
            description: [
                "Scaled territory revenue from ₹50 lakh to ₹2 crore annually (4x growth) through partner development and sales optimisation.",
                "Generated ₹40–50 lakh in monthly revenue and recruited 52+ business partners across Tamil Nadu.",
                "Led a team of 8–12 members, achieving a 25% improvement in monthly sales targets through coaching and accountability."
            ]
        },
        {
            company: "JIO",
            role: "Jio Point Manager",
            period: "Aug 2022 - Aug 2023",
            location: "Sivakasi, India",
            description: [
                "Managed operations for a 250+ partner network, generating ₹25–30 lakh in monthly revenue.",
                "Designed comprehensive retailer onboarding programmes covering recruitment and activation.",
                "Maintained 95%+ operational compliance across all partners while tracking inventory and sales targets."
            ]
        },
        {
            company: "AIRTEL",
            role: "Sales Team Lead",
            period: "Mar 2021 - Aug 2022",
            location: "Virudhunagar, India",
            description: [
                "Led a team of 60 field personnel and managed 150 retail partners.",
                "Earned the 'Best Team Lead of the Year' award for operational excellence and team culture.",
                "Improved team performance metrics and retention by 22% through regular coaching and KPI reviews."
            ]
        }
    ],
    projects: [
        // Websites Built
        {
            title: "Modern Portfolio V1",
            description: "A sleek, responsive personal portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.",
            tags: ["React", "Tailwind", "Web Design"],
            link: "#",
            github: "#",
            icon: <Layout size={40} className="text-cyan-400" />
        },
        {
            title: "E-commerce Dashboard",
            description: "Admin dashboard for an e-commerce platform, visualizing sales data, inventory levels, and user activity in real-time.",
            tags: ["React", "Dashboard", "Analytics"],
            link: "#",
            github: "#",
            icon: <ShoppingCart size={40} className="text-emerald-400" />
        },
        {
            title: "Corporate Landing Page",
            description: "High-conversion landing page for a SaaS product, optimized for SEO and performance with fast load times.",
            tags: ["Landing Page", "SEO", "Performance"],
            link: "#",
            github: "#",
            icon: <Globe size={40} className="text-indigo-400" />
        },

        // Customer Support & Experience
        {
            title: "AI Customer Support Chatbot",
            description: "Intelligent chatbot built with OpenAI API and n8n. Handles L1 support queries, routes complex tickets to human agents, and learns from past interactions.",
            tags: ["OpenAI", "n8n", "NLP", "Support"],
            link: "#",
            github: "#",
            icon: <MessageSquare size={40} className="text-blue-400" />
        },
        {
            title: "WhatsApp Automation Workflow",
            description: "End-to-end WhatsApp automation using n8n. Handles customer queries, sends automated notifications, and syncs chat logs with Google Sheets/Airtable.",
            tags: ["n8n", "WhatsApp API", "Automation"],
            link: "#",
            github: "#",
            icon: <Smartphone size={40} className="text-green-400" />
        },
        {
            title: "Unified Ticketing System",
            description: "Integration of Astro, Eaze, and Gyan TV platforms into a single unified ticketing interface, reducing resolution time by 40%.",
            tags: ["Automation", "API Integration", "Enterprise"],
            link: "#",
            github: "#",
            icon: <Layers size={40} className="text-purple-400" />
        },
        {
            title: "IVR-Freshdesk Integration",
            description: "Completed an Exotel IVR–Freshdesk AI integration in 3 days, cutting response times by 35% and automating ticket creation from calls.",
            tags: ["Exotel", "Freshdesk", "n8n"],
            link: "#",
            github: "#",
            icon: <Zap size={40} className="text-yellow-400" />
        },
        {
            title: "Omnichannel Support Hub",
            description: "Centralized support dashboard aggregating messages from Email, WhatsApp, and Social Media, ensuring 100% query coverage.",
            tags: ["Omnichannel", "Dashboard", "React"],
            link: "#",
            github: "#",
            icon: <Globe size={40} className="text-cyan-400" />
        },

        // User Retention & Engagement
        {
            title: "Churn Prediction Model",
            description: "ML model integrated with n8n to identify at-risk users based on activity patterns and trigger automated re-engagement campaigns.",
            tags: ["ML", "Python", "Retention"],
            link: "#",
            github: "#",
            icon: <Activity size={40} className="text-red-400" />
        },
        {
            title: "Automated Onboarding Flow",
            description: "Personalized email and WhatsApp drip campaigns for new user onboarding, increasing activation rates by 25%.",
            tags: ["n8n", "Email Marketing", "Growth"],
            link: "#",
            github: "#",
            icon: <Users size={40} className="text-indigo-400" />
        },
        {
            title: "Feedback Loop Automation",
            description: "Automated collection and analysis of user feedback (NPS/CSAT) using n8n and Sentiment Analysis APIs.",
            tags: ["Sentiment Analysis", "Automation", "Feedback"],
            link: "#",
            github: "#",
            icon: <MessageSquare size={40} className="text-pink-400" />
        },
        {
            title: "Loyalty Reward System",
            description: "Automated tracking and distribution of loyalty points/rewards based on user milestones, driven by n8n workflows.",
            tags: ["Gamification", "n8n", "Loyalty"],
            link: "#",
            github: "#",
            icon: <Target size={40} className="text-orange-400" />
        },
        {
            title: "Re-engagement Bot",
            description: "AI-driven bot that initiates conversations with dormant users, offering personalized incentives to return.",
            tags: ["AI", "Chatbot", "Retention"],
            link: "#",
            github: "#",
            icon: <Clock size={40} className="text-teal-400" />
        },

        // Business Impact & Operations
        {
            title: "AI-Powered Ops Dashboard",
            description: "Real-time monitoring of operational KPIs using BigQuery and custom AI models to predict trends and identify bottlenecks.",
            tags: ["React", "BigQuery", "AI/ML"],
            link: "#",
            github: "#",
            icon: <BarChart size={40} className="text-purple-400" />
        },
        {
            title: "Sales Reporting Automation",
            description: "Google Apps Script and n8n solution that automates daily sales reporting, saving 15+ hours of manual work per week.",
            tags: ["Google Apps Script", "n8n", "Sales"],
            link: "#",
            github: "#",
            icon: <TrendingUp size={40} className="text-green-500" />
        },
        {
            title: "CRM Bi-directional Sync",
            description: "Real-time 2-way sync between HubSpot and internal databases, ensuring sales and support teams have unified data.",
            tags: ["HubSpot", "SQL", "Sync"],
            link: "#",
            github: "#",
            icon: <Database size={40} className="text-blue-500" />
        },
        {
            title: "Lead Scoring Engine",
            description: "Automated lead scoring system using n8n to prioritize high-value prospects for the sales team.",
            tags: ["Sales Ops", "Automation", "Scoring"],
            link: "#",
            github: "#",
            icon: <Target size={40} className="text-red-500" />
        },
        {
            title: "Invoice Processing Bot",
            description: "OCR-based automation that extracts data from invoices and updates the finance system, reducing processing errors by 90%.",
            tags: ["OCR", "Finance", "Automation"],
            link: "#",
            github: "#",
            icon: <DollarSign size={40} className="text-yellow-500" />
        },
        {
            title: "Social Media Auto-Poster",
            description: "Content scheduling system that analyzes optimal posting times and auto-publishes to LinkedIn and Twitter.",
            tags: ["Social Media", "API", "Growth"],
            link: "#",
            github: "#",
            icon: <Globe size={40} className="text-blue-300" />
        },
        {
            title: "Competitor Analysis Tool",
            description: "Automated scraper and analysis tool that tracks competitor pricing and feature updates.",
            tags: ["Scraping", "Python", "Strategy"],
            link: "#",
            github: "#",
            icon: <Shield size={40} className="text-gray-400" />
        },
        {
            title: "Email Parser to Database",
            description: "System that parses incoming lead emails and automatically populates the CRM and notifies the relevant sales rep.",
            tags: ["Email Parsing", "CRM", "Automation"],
            link: "#",
            github: "#",
            icon: <Mail size={40} className="text-orange-300" />
        }
    ],
    education: {
        degree: "Bachelor of Engineering (BE) in Computer Science",
        institution: "Unnamalai Institute of Technology, India",
        period: "Aug 2017 - Apr 2021"
    }
};
