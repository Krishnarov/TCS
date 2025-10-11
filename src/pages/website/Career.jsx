import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  DollarSign,
  Heart,
  Shield,
  Zap,
  Phone,
  Mail,
  Send,
  FileText,
} from "lucide-react";
import axios from "../../../axiosInstance";
import ApplicationModal from "../../components/website/ApplicationModal";
import { Link } from "react-router-dom";


const Career = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fetchJobOpenings = async () => {
    try {
      const res = await axios.get(`/jobs`);
      console.log(res);
      if (res.data.success) {
        setJobOpenings(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobOpenings();
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };


  // Career benefits
  const careerBenefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Salary",
      description: "Industry-standard compensation with performance bonuses",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear growth path with skill development opportunities",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for employees and family",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Timing",
      description: "Work-life balance with flexible work arrangements",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training Programs",
      description: "Regular training and skill enhancement programs",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Positive Environment",
      description: "Supportive and collaborative work culture",
    },
  ];

  // Why join us points
  const whyJoinUs = [
    {
      number: "50+",
      title: "Projects Annually",
      description: "Work on diverse and challenging projects",
    },
    {
      number: "15+",
      title: "Expert Team Members",
      description: "Learn from industry experts and veterans",
    },
    {
      number: "100%",
      title: "Growth Focus",
      description: "Focus on employee development and growth",
    },
    {
      number: "5+",
      title: "Industry Sectors",
      description: "Exposure to multiple industrial sectors",
    },
  ];

  // Application process
  const applicationProcess = [
    {
      step: "01",
      title: "Apply Online",
      description: "Submit your application through our portal",
    },
    {
      step: "02",
      title: "Screening",
      description: "Initial resume and qualification screening",
    },
    {
      step: "03",
      title: "Interviews",
      description: "Technical and HR interview rounds",
    },
    {
      step: "04",
      title: "Onboarding",
      description: "Welcome to the TCS family and project allocation",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center text-white"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">
                Join Our Team
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Build Your <span className="text-yellow-500">Career</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Join TRIVENI INFRA MECH PVT LTD and be part of a dynamic team
              building India's industrial infrastructure with innovation and
              excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">
                Why Join Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-yellow-500">Join TCS</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of a growing organization that values talent, innovation,
              and professional growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">
                Current Openings
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Job <span className="text-yellow-500">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore current career opportunities and join our team of
              construction professionals
            </p>
          </motion.div>

          {/* Job Listings */}
          <div className="max-w-6xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-8 mb-6 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Briefcase className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-yellow-600 font-semibold">
                          {job.department}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <MapPin className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Clock className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Users className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium">{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <DollarSign className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium">{job.salary}</span>
                      </div>
                    </div>

                    {job.requirements && job.requirements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Requirements:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {job.requirements.map((requirement, reqIndex) => (
                            <motion.div
                              key={reqIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: reqIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {requirement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:pl-8 lg:border-l lg:border-gray-200 lg:text-right">
                    <div className="flex flex-col space-y-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${
                        job.status === "active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {job.status === "active" ? "Hiring" : "Closed"}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Posted {job.posted}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleApplyClick(job)}
                        disabled={job.status !== "active"}
                        className={`font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group ${
                          job.status === "active"
                            ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                            : "bg-gray-400 text-gray-700 cursor-not-allowed"
                        }`}
                      >
                        <Send className="w-4 h-4" />
                        <span>
                          {job.status === "active" ? "Apply Now" : "Position Closed"}
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Career Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">
                Employee Benefits
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Career <span className="text-yellow-500">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We value our team members and offer comprehensive benefits for
              professional and personal growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">
                How to Apply
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Application <span className="text-yellow-500">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-yellow-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-yellow-500">Join Us</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your journey with TRIVENI INFRA MECH PVT LTD and build a
              rewarding career in the construction industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Apply Now</span>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: +91 8292111172</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
       {/* Application Modal */}
      {selectedJob && (
        <ApplicationModal
          job={selectedJob}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Career;
