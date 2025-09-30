import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar,
  User,
  Clock,
  Tag,
  Eye,
  MessageCircle,
  Share2,
  BookOpen,
  TrendingUp,
  Shield,
  Zap,
  Building2,
  Wrench,
  Phone,
  Mail
} from 'lucide-react';

const Blog = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Blog categories based on PDF services
  const categories = [
    { name: 'Structural Engineering', count: 8, color: 'from-blue-500 to-blue-600' },
    { name: 'Piping Systems', count: 6, color: 'from-green-500 to-green-600' },
    { name: 'Mechanical Works', count: 5, color: 'from-orange-500 to-orange-600' },
    { name: 'Electrical Systems', count: 7, color: 'from-purple-500 to-purple-600' },
    { name: 'Safety Standards', count: 4, color: 'from-red-500 to-red-600' },
    { name: 'Industry Insights', count: 9, color: 'from-yellow-500 to-yellow-600' }
  ];

  // Blog posts based on PDF content and services
  const blogPosts = [
    {
      id: 1,
      title: 'Advancements in Structural Fabrication for Heavy Industries',
      excerpt: 'Exploring the latest techniques in structural fabrication and erection for heavy industrial applications with precision engineering.',
      content: 'Structural fabrication has evolved significantly with modern techniques ensuring precision and durability in heavy industrial applications...',
      author: 'Jitendra Yadav',
      date: 'Dec 15, 2023',
      readTime: '6 min read',
      category: 'Structural Engineering',
      tags: ['Fabrication', 'Heavy Structures', 'Industrial'],
      image: 'structural-blog',
      views: 1247,
      comments: 23,
      featured: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Best Practices in Piping System Installation and Maintenance',
      excerpt: 'Comprehensive guide to piping fabrication, installation, and maintenance for industrial applications with quality assurance.',
      content: 'Proper piping system installation is crucial for industrial operations. Learn about best practices in fabrication and maintenance...',
      author: 'TCS Engineering Team',
      date: 'Dec 10, 2023',
      readTime: '8 min read',
      category: 'Piping Systems',
      tags: ['Piping', 'Installation', 'Maintenance'],
      image: 'piping-blog',
      views: 892,
      comments: 15,
      featured: true,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Electrical Works Safety Protocols in Industrial Construction',
      excerpt: 'Essential safety measures and protocols for electrical works in industrial construction projects ensuring zero incidents.',
      content: 'Electrical safety is paramount in industrial construction. Discover the protocols that ensure safe and efficient electrical installations...',
      author: 'Safety Department',
      date: 'Dec 5, 2023',
      readTime: '5 min read',
      category: 'Electrical Systems',
      tags: ['Electrical', 'Safety', 'Protocols'],
      image: 'electrical-blog',
      views: 756,
      comments: 18,
      featured: false,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Mechanical Equipment Erection: Precision and Quality Standards',
      excerpt: 'Understanding the precision requirements and quality standards in mechanical equipment erection for industrial facilities.',
      content: 'Mechanical equipment erection demands precision and adherence to quality standards. Learn about the processes that ensure optimal performance...',
      author: 'Technical Team',
      date: 'Nov 28, 2023',
      readTime: '7 min read',
      category: 'Mechanical Works',
      tags: ['Mechanical', 'Equipment', 'Quality'],
      image: 'mechanical-blog',
      views: 634,
      comments: 12,
      featured: false,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'HDPE Fabrication: Custom Solutions for Industrial Needs',
      excerpt: 'Exploring High-Density Polyethylene fabrication techniques and custom solutions for various industrial applications.',
      content: 'HDPE fabrication offers versatile solutions for industrial needs. Discover how custom fabrication meets specific project requirements...',
      author: 'Fabrication Team',
      date: 'Nov 20, 2023',
      readTime: '4 min read',
      category: 'Piping Systems',
      tags: ['HDPE', 'Fabrication', 'Custom'],
      image: 'hdpe-blog',
      views: 523,
      comments: 8,
      featured: false,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 6,
      title: 'ESP Commissioning: Ensuring Optimal Performance in Industries',
      excerpt: 'Complete guide to Electrostatic Precipitator commissioning, troubleshooting, and maintenance for industrial applications.',
      content: 'ESP commissioning requires technical expertise and systematic approach. Learn about the processes that ensure optimal performance...',
      author: 'Technical Services',
      date: 'Nov 15, 2023',
      readTime: '9 min read',
      category: 'Industry Insights',
      tags: ['ESP', 'Commissioning', 'Maintenance'],
      image: 'esp-blog',
      views: 687,
      comments: 14,
      featured: false,
      color: 'from-red-500 to-red-600'
    }
  ];

  // Popular posts
  const popularPosts = blogPosts.slice(0, 3);

  // Blog statistics
  const blogStats = [
    {
      number: '50+',
      title: 'Articles Published',
      description: 'Expert insights and industry knowledge'
    },
    {
      number: '10K+',
      title: 'Monthly Readers',
      description: 'Growing community of professionals'
    },
    {
      number: '100+',
      title: 'Industry Topics',
      description: 'Comprehensive coverage of construction'
    },
    {
      number: '24/7',
      title: 'Updated Content',
      description: 'Fresh insights and latest trends'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
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
              <span className="text-yellow-500 text-sm font-semibold">Our Blog</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Construction <span className="text-yellow-500">Insights</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Expert knowledge, industry trends, and technical insights from Triveni Construction Solution - 
              Your trusted partner in industrial construction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Statistics */}
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
              <span className="text-yellow-500 text-sm font-semibold">Blog Community</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Sharing <span className="text-yellow-500">Knowledge</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {stat.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{stat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
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
              <span className="text-yellow-500 text-sm font-semibold">Featured</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-yellow-500">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth technical articles and industry insights from our expert team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 group"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${post.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <BookOpen className="w-10 h-10" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-200"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Latest <span className="text-yellow-500">Articles</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Stay updated with the latest trends and insights in industrial construction
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${post.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          <BookOpen className="w-8 h-8" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-yellow-600 font-semibold text-sm">{post.category}</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors duration-200"
                          >
                            <span>Read</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-yellow-500" />
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`}></div>
                        <span className="text-gray-700 font-medium">{category.name}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {category.count}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Popular Posts */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-yellow-500" />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${post.color} rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                          <Eye className="w-3 h-3" />
                          <span>{post.views} views</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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
              Stay <span className="text-yellow-500">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest construction insights, industry trends, and expert knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: +91 8292111172</span>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email: jyadavst@gmail.com</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;