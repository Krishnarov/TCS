import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Briefcase, 
  Mail, 
  Users,
  Eye,
  MessageCircle,
  TrendingUp,
  Calendar,
  ArrowRight,
  Plus,
  Download,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Stats data
  const stats = [
    {
      title: 'Blog Posts',
      value: '15',
      change: '+12%',
      trend: 'up',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/blog'
    },
    {
      title: 'Career Applications',
      value: '8',
      change: '+5%',
      trend: 'up',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      link: '/admin/career'
    },
    {
      title: 'Contact Messages',
      value: '23',
      change: '+18%',
      trend: 'up',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/contact'
    },
    {
      title: 'Total Views',
      value: '2.4K',
      change: '+25%',
      trend: 'up',
      icon: <Eye className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      link: '/admin/blog'
    }
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'blog',
      title: 'New blog post published',
      description: 'Advancements in Structural Fabrication',
      time: '2 hours ago',
      icon: <FileText className="w-4 h-4" />,
      color: 'text-blue-500'
    },
    {
      id: 2,
      type: 'career',
      title: 'New job application received',
      description: 'Structural Engineer position',
      time: '4 hours ago',
      icon: <Briefcase className="w-4 h-4" />,
      color: 'text-green-500'
    },
    {
      id: 3,
      type: 'contact',
      title: 'New contact form submission',
      description: 'Project inquiry from Industrial Client',
      time: '6 hours ago',
      icon: <Mail className="w-4 h-4" />,
      color: 'text-purple-500'
    },
    {
      id: 4,
      type: 'blog',
      title: 'Blog post updated',
      description: 'Piping Systems Installation Guide',
      time: '1 day ago',
      icon: <FileText className="w-4 h-4" />,
      color: 'text-blue-500'
    }
  ];

  // Quick actions
  const quickActions = [
    {
      title: 'Add New Blog Post',
      description: 'Create and publish new content',
      icon: <Plus className="w-5 h-5" />,
      link: '/admin/blog',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'View Applications',
      description: 'Check career applications',
      icon: <Users className="w-5 h-5" />,
      link: '/admin/career',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Check Messages',
      description: 'Respond to inquiries',
      icon: <MessageCircle className="w-5 h-5" />,
      link: '/admin/contact',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'Generate Report',
      description: 'Download monthly report',
      icon: <Download className="w-5 h-5" />,
      link: '#',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <motion.h1
            variants={fadeInUp}
            className="text-3xl lg:text-4xl font-bold text-gray-900"
          >
            Admin Dashboard
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 mt-2"
          >
            Welcome back! Here's what's happening with your website today.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInUp}
          className="flex items-center space-x-2 mt-4 lg:mt-0"
        >
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </motion.div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group"
          >
            <Link to={stat.link}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center space-x-1 text-sm font-semibold ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm mb-4">{stat.title}</p>
              
              <div className="flex items-center text-yellow-600 text-sm font-semibold group-hover:text-yellow-700 transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={action.link}
                    className={`${action.color} text-white rounded-xl p-4 block transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        {action.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{action.title}</h3>
                        <p className="text-white text-opacity-80 text-xs mt-1">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activity.color} bg-opacity-10`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 truncate">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/admin/blog"
              className="block text-center mt-6 py-2 text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors"
            >
              View All Activities
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Website Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Website Performance</h2>
            <p className="text-yellow-100 opacity-90">
              Your website is performing well with increased traffic and engagement.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="text-center">
              <div className="text-2xl font-bold">2.4K</div>
              <div className="text-yellow-100 text-sm">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-yellow-100 text-sm">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15</div>
              <div className="text-yellow-100 text-sm">Active Posts</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;