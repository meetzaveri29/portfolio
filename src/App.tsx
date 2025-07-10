import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Database, BarChart3, ArrowRight, ChevronDown, Zap, Cpu, Brain, GraduationCap, Award, MapPin, Phone, Calendar, Building, Star, Target, TrendingUp, Plus } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'journey', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const skills = [
    { 
      name: 'Programming', 
      level: 95, 
      icon: Code, 
      color: 'from-cyan-400 to-blue-600', 
      tools: ['Python', 'SQL', 'R', 'SAS', 'NoSQL'] 
    },
    { 
      name: 'Data Engineering', 
      level: 92, 
      icon: Database, 
      color: 'from-purple-400 to-pink-600', 
      tools: ['ETL/ELT', 'Apache Spark', 'Airflow', 'DataStage', 'Apache NiFi'] 
    },
    { 
      name: 'Cloud & Big Data', 
      level: 90, 
      icon: Cpu, 
      color: 'from-blue-400 to-cyan-600', 
      tools: ['GCP BigQuery', 'AWS S3/Glue/Redshift', 'Hadoop HDFS', 'Dataflow'] 
    },
    { 
      name: 'Data Analytics', 
      level: 88, 
      icon: BarChart3, 
      color: 'from-pink-400 to-purple-600', 
      tools: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'ggplot2'] 
    },
    { 
      name: 'Machine Learning', 
      level: 85, 
      icon: Brain, 
      color: 'from-green-400 to-blue-600', 
      tools: ['Applied ML', 'Predictive Models', 'Data Mining', 'Statistical Analysis'] 
    },
    { 
      name: 'Data Management', 
      level: 89, 
      icon: Zap, 
      color: 'from-yellow-400 to-orange-600', 
      tools: ['Data Governance', 'Data Quality', 'JIRA', 'Agile & Scrum'] 
    },
  ];

  const projects = [
    {
      title: 'Healthcare Data Warehouse',
      description: 'Designed a comprehensive healthcare data warehouse using PostgreSQL, integrating survey, workforce, and expenditure data through Python pipelines orchestrated with Apache Airflow.',
      tech: ['PostgreSQL', 'Python', 'Apache Airflow', 'Tableau', 'NumPy', 'Pandas'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      impact: 'Enhanced data-driven decision making for healthcare workforce planning',
      date: 'October 2024',
      type: 'Data Warehouse'
    },
    {
      title: 'Big Data Fleet Analysis Pipeline',
      description: 'Engineered a robust ETL pipeline using Hadoop and HDFS, optimizing data ingestion, transformation, and storage for 5GB truck fleet dataset.',
      tech: ['Hadoop', 'HDFS', 'Hive', 'Impala', 'SAS', 'ETL'],
      image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      impact: '40% reduction in query response time, 15% drop in traffic violations',
      date: 'April 2024',
      type: 'Big Data Analytics'
    },
    {
      title: 'Revenue Management ETL System',
      description: 'Architected end-to-end ETL pipelines for 3+ revenue management applications handling orders and scans data using SQL and UNIX Shell scripts.',
      tech: ['SQL', 'UNIX Shell', 'Teradata', 'DataStage', 'Git', 'Jenkins'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      impact: '20% improvement in reporting efficiency, eliminated $80K/month revenue leakage',
      date: 'Accenture Project',
      type: 'ETL Pipeline'
    }
  ];

  const achievements = [
    {
      title: 'Revenue Optimization',
      description: 'Eliminated $80,000/month revenue leakage through CI/CD pipeline implementation',
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-600',
      metric: '$80K/month saved'
    },
    {
      title: 'Performance Enhancement',
      description: 'Reduced dashboard refresh times from 2 hours to 10 minutes (92% improvement)',
      icon: Zap,
      color: 'from-yellow-400 to-orange-600',
      metric: '92% faster'
    },
    {
      title: 'Data Quality Excellence',
      description: 'Achieved 98% reduction in data ingestion errors across 20+ SQL batches',
      icon: Target,
      color: 'from-blue-400 to-cyan-600',
      metric: '98% error reduction'
    },
    {
      title: 'Cloud Migration Success',
      description: 'Led Teradata to BigQuery migration with 97% success rate',
      icon: Star,
      color: 'from-purple-400 to-pink-600',
      metric: '97% success rate'
    }
  ];

  const timeline = [
    {
      year: '2023-2025',
      title: 'Master of Science',
      subtitle: 'IT Management',
      organization: 'University of Texas at Dallas',
      type: 'education',
      description: 'Advanced studies in data warehousing, big data, and machine learning',
      gpa: '3.97/4.0',
      achievements: [
        'Business Analytics Certificate',
        'Jungchan Hsieh Fellowship',
        'Healthcare & Fleet Analytics Projects'
      ]
    },
    {
      year: '2022-2023',
      title: 'Data Engineer Analyst',
      subtitle: 'Accenture',
      organization: 'Mumbai, India',
      type: 'experience',
      description: 'Led ETL pipeline development and cloud migration initiatives for revenue management systems',
      achievements: [
        'Eliminated $80K/month revenue leakage',
        '20% improvement in reporting efficiency',
        '97% success rate in cloud migration POC'
      ]
    },
    {
      year: '2021-2022',
      title: 'Data Engineer Associate',
      subtitle: 'Accenture',
      organization: 'Mumbai, India',
      type: 'experience',
      description: 'Built data quality frameworks, monitored 100+ production jobs processing 500M+ records daily',
      achievements: [
        '98% reduction in data ingestion errors',
        '99.9% uptime maintenance',
        '40% query optimization improvement'
      ]
    },
    {
      year: '2016-2020',
      title: 'Bachelor of Technology',
      subtitle: 'Electronics Engineering',
      organization: 'University of Mumbai, India',
      type: 'education',
      description: 'Built foundation in engineering principles and analytical thinking',
      gpa: '3.33/4.0'
    }
  ];

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Database className="text-cyan-400" size={28} />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'achievements', 'journey', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:scale-110 ${
                    activeSection === item
                      ? 'text-cyan-400 font-semibold'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan-400 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'achievements', 'journey', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-8 relative">
              <div className="w-40 h-40 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75"></div>
                <div className="w-36 h-36 bg-black rounded-full flex items-center justify-center relative z-10 mt-2 ml-2 border-4 border-cyan-400 shadow-lg shadow-cyan-400/50 overflow-hidden">
                  <img 
                    src="/portfolio/IMG_20250608_092924_422.jpg" 
                    alt="Meet Nirav Zaveri" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h1 className="text-6xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MEET NIRAV ZAVERI
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-2">
                Data Engineer & Analyst
              </div>
              <div className="text-lg text-purple-300 font-mono mb-4">
                🚀 Transforming data into actionable insights
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-blue-200 mb-4">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+1 (214) 836-7590</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>meet.zaveri29@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Dallas, TX</span>
                </div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Master's student at UT Dallas (3.97 GPA) with 2.5+ years of experience at Accenture building robust data pipelines, 
              optimizing ETL workflows, and driving data-driven decisions. 
              <span className="text-cyan-400 font-semibold"> Specialized in cloud migrations and performance optimization!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Code size={20} />
                View My Projects
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/portfolio/Meet_Nirav_Zaveri_Data_Engineer_Resume.pdf';
                  link.download = 'Meet_Nirav_Zaveri_Data_Engineer_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black text-cyan-400 px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 transform hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.linkedin.com/in/meetzaveri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/meetzaveri29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125"
              >
                <Github size={28} />
              </a>
              <a 
                href="mailto:meet.zaveri29@gmail.com" 
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-125"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate data engineer and analyst who believes in the power of data to transform businesses!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 md:p-8 lg:p-10 rounded-xl border border-cyan-500/20 relative overflow-hidden">
                {/* Floating tech icons around edges */}
                <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-blue-500/20 rounded-lg flex items-center justify-center animate-float">
                  <Code size={14} className="text-blue-400 md:w-4 md:h-4" />
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 bg-purple-500/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <Database size={14} className="text-purple-400 md:w-4 md:h-4" />
                </div>
                <div className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <BarChart3 size={14} className="text-cyan-400 md:w-4 md:h-4" />
                </div>
                <div className="absolute bottom-4 right-4 w-6 h-6 md:w-8 md:h-8 bg-pink-500/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                  <Cpu size={14} className="text-pink-400 md:w-4 md:h-4" />
                </div>
                <div className="absolute top-1/2 left-2 w-5 h-5 md:w-6 md:h-6 bg-green-500/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <Zap size={10} className="text-green-400 md:w-3 md:h-3" />
                </div>
                <div className="absolute top-1/2 right-2 w-5 h-5 md:w-6 md:h-6 bg-orange-500/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2.5s' }}>
                  <Brain size={10} className="text-orange-400 md:w-3 md:h-3" />
                </div>
                
                <div className="relative z-10 text-center">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-300 mb-4 md:mb-6">Engineering Data Solutions</h4>
                  <div className="space-y-4 md:space-y-6 text-gray-300 text-left max-w-none">
                    <p className="text-base md:text-lg leading-relaxed">
                      <span className="text-cyan-400 font-semibold">Master's in IT Management at UT Dallas</span> with expertise in Python, SQL, and cloud technologies. My experience at Accenture involved building robust data pipelines that prevented millions in revenue loss.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      I specialize in <span className="text-purple-400 font-semibold">ETL/ELT pipeline optimization</span>, cloud migrations (Teradata to BigQuery), and performance tuning. Whether it's reducing dashboard refresh times by 92% or eliminating $80K/month revenue leakage, I approach every challenge with precision and expertise.
                    </p>
                    
                    {/* Education & Certifications */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 md:mt-8">
                      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-4 rounded-lg border border-cyan-500/20">
                        <div className="flex items-center gap-3 mb-2">
                          <GraduationCap className="text-cyan-400" size={20} />
                          <div className="text-base md:text-lg font-bold text-cyan-400">Education</div>
                        </div>
                        <div className="text-sm md:text-base text-gray-300">
                          <div>MS IT Management - UT Dallas (3.97 GPA)</div>
                          <div>BTech Electronics - University of Mumbai (3.33 GPA)</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 p-4 rounded-lg border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="text-purple-400" size={20} />
                          <div className="text-base md:text-lg font-bold text-purple-400">Certifications & Awards</div>
                        </div>
                        <div className="text-sm md:text-base text-gray-300">
                          <div>Databricks Fundamentals Accreditation</div>
                          <div>Teradata Vantage Associate 2.3</div>
                          <div>Jungchan Hsieh Fellowship</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Core Competencies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for modern data engineering
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="relative mb-4">
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Proficiency</span>
                      <span className="text-sm font-bold text-cyan-400">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skill.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world data engineering solutions and analytics projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-cyan-300 text-sm">{project.type}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-purple-300 text-sm">{project.date}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="mb-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <div className="text-cyan-400 font-semibold text-sm mb-1">Impact:</div>
                    <div className="text-gray-300 text-sm">{project.impact}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-cyan-300 px-2 py-1 rounded text-xs border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* More Projects Tile */}
            <div 
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 flex items-center justify-center min-h-[400px] cursor-pointer"
              onClick={() => window.open('https://github.com/meetzaveri29', '_blank')}
            >
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  <Plus size={32} className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                  More Projects
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Explore additional data engineering and analytics projects
                </p>
                <div className="inline-flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-sm font-semibold">View All</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Key Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable impact through data engineering excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {achievement.metric}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section id="journey" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My evolution from electronics engineering to data engineering excellence
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border-4 border-black shadow-lg ${
                  item.type === 'education' 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-500' 
                    : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                }`}></div>
                {index !== timeline.length - 1 && (
                  <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-500 opacity-50"></div>
                )}
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl ml-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-cyan-400 font-mono mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold text-cyan-300 mb-1">{item.title}</h3>
                      <div className="text-lg text-purple-400 font-semibold mb-1">{item.subtitle}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Building size={14} />
                          <span>{item.organization}</span>
                        </div>
                        {item.gpa && (
                          <div className="text-cyan-400 font-semibold">GPA: {item.gpa}</div>
                        )}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'education' 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {item.type === 'education' ? 'Education' : 'Experience'}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  {item.achievements && (
                    <div className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3 text-sm">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on your next data engineering project? Let's build something amazing together!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-cyan-300 mb-2">Email</h3>
                <p className="text-gray-300">meet.zaveri29@gmail.com</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-purple-300 mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/meetzaveri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-300"
                >
                  linkedin.com/in/meetzaveri
                </a>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-pink-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-pink-300 mb-2">Phone</h3>
                <p className="text-gray-300">+1 (214) 836-7590</p>
              </div>
            </div>
            <form className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-xl border border-cyan-500/20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all duration-300"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-white placeholder-gray-400 mb-6 transition-all duration-300"
              />
              <textarea
                name="message"
                placeholder="Tell me about your data engineering needs..."
                rows={6}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-white placeholder-gray-400 mb-6 transition-all duration-300"
              ></textarea>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const form = e.target.closest('form') as HTMLFormElement;
                  const formData = new FormData(form);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  
                  const mailtoLink = `mailto:meet.zaveri29@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  window.location.href = mailtoLink;
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-cyan-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Database className="text-cyan-400" size={24} />
              <p className="text-gray-400 font-mono">
                © 2024 Meet Nirav Zaveri - Data Engineer & Analyst. Transforming data into insights! 🚀
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/meetzaveri29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/meetzaveri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:meet.zaveri29@gmail.com" 
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-125"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;