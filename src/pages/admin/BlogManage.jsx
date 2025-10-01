import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  User,
  Tag,
  Save,
  X,
  Upload,
  Image,
  FileText,
  Search,
  Filter,
  MoreVertical,
  ExternalLink,
  BarChart3,
  MessageCircle,
  BookOpen,
  Globe,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const BlogManage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Advancements in Structural Fabrication for Heavy Industries',
      excerpt: 'Exploring the latest techniques in structural fabrication and erection for heavy industrial applications with precision engineering.',
      category: 'Structural Engineering',
      author: 'Jitendra Yadav',
      status: 'published',
      date: '2023-12-15',
      views: 1247,
      comments: 23,
      likes: 45,
      readTime: '6 min read',
      featured: true,
      tags: ['fabrication', 'structures', 'industrial']
    },
    {
      id: 2,
      title: 'Best Practices in Piping System Installation and Maintenance',
      excerpt: 'Comprehensive guide to piping fabrication, installation, and maintenance for industrial applications with quality assurance.',
      category: 'Piping Systems',
      author: 'TCS Engineering Team',
      status: 'published',
      date: '2023-12-10',
      views: 892,
      comments: 15,
      likes: 32,
      readTime: '8 min read',
      featured: false,
      tags: ['piping', 'installation', 'maintenance']
    },
    {
      id: 3,
      title: 'Electrical Works Safety Protocols in Industrial Construction',
      excerpt: 'Essential safety measures and protocols for electrical works in industrial construction projects ensuring zero incidents.',
      category: 'Electrical Systems',
      author: 'Safety Department',
      status: 'draft',
      date: '2023-12-05',
      views: 0,
      comments: 0,
      likes: 0,
      readTime: '5 min read',
      featured: false,
      tags: ['electrical', 'safety', 'protocols']
    },
    {
      id: 4,
      title: 'Mechanical Equipment Erection: Precision and Quality Standards',
      excerpt: 'Understanding the precision requirements and quality standards in mechanical equipment erection for industrial facilities.',
      category: 'Mechanical Works',
      author: 'Technical Team',
      status: 'published',
      date: '2023-11-28',
      views: 634,
      comments: 12,
      likes: 28,
      readTime: '7 min read',
      featured: true,
      tags: ['mechanical', 'equipment', 'quality']
    }
  ]);

  const [showEditor, setShowEditor] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const [blogData, setBlogData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    author: '',
    status: 'draft',
    featuredImage: '',
    readTime: '',
    featured: false
  });

  // Categories based on PDF services
  const categories = [
    'Structural Engineering',
    'Piping Systems',
    'Mechanical Works',
    'Electrical Systems',
    'Safety Standards',
    'Industry Insights',
    'Project Management',
    'Innovation & Technology'
  ];

  const statusColors = {
    published: 'bg-green-100 text-green-800 border-green-200',
    draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    archived: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBlogData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleCreateNew = () => {
    setBlogData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      tags: '',
      author: 'Admin',
      status: 'draft',
      featuredImage: '',
      readTime: '',
      featured: false
    });
    setEditingBlog(null);
    setShowEditor(true);
  };

  const handleEdit = (blog) => {
    setBlogData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: 'Your blog content goes here...',
      category: blog.category,
      tags: blog.tags?.join(', ') || '',
      author: blog.author,
      status: blog.status,
      featuredImage: '',
      readTime: blog.readTime,
      featured: blog.featured || false
    });
    setEditingBlog(blog.id);
    setShowEditor(true);
  };

  const handleSave = () => {
    if (editingBlog) {
      // Update existing blog
      setBlogs(prev => prev.map(blog => 
        blog.id === editingBlog 
          ? { 
              ...blog, 
              ...blogData,
              tags: blogData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
              date: new Date().toISOString().split('T')[0]
            }
          : blog
      ));
    } else {
      // Create new blog
      const newBlog = {
        id: Date.now(),
        ...blogData,
        tags: blogData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        date: new Date().toISOString().split('T')[0],
        views: 0,
        comments: 0,
        likes: 0,
        readTime: blogData.readTime || '5 min read'
      };
      setBlogs(prev => [newBlog, ...prev]);
    }
    
    setShowEditor(false);
    setEditingBlog(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setBlogs(prev => prev.map(blog => 
      blog.id === id ? { ...blog, status: newStatus } : blog
    ));
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || blog.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Statistics
  const stats = {
    total: blogs.length,
    published: blogs.filter(blog => blog.status === 'published').length,
    drafts: blogs.filter(blog => blog.status === 'draft').length,
    featured: blogs.filter(blog => blog.featured).length,
    totalViews: blogs.reduce((sum, blog) => sum + blog.views, 0),
    totalComments: blogs.reduce((sum, blog) => sum + blog.comments, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-2">Create, edit, and manage your blog content</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'list' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="w-4 h-4 flex flex-col space-y-0.5">
                <div className="bg-current h-1 rounded-sm"></div>
                <div className="bg-current h-1 rounded-sm"></div>
                <div className="bg-current h-1 rounded-sm"></div>
              </div>
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCreateNew}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </motion.button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              <p className="text-sm text-gray-600">Total Posts</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.published}</p>
              <p className="text-sm text-gray-600">Published</p>
            </div>
            <Globe className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.drafts}</p>
              <p className="text-sm text-gray-600">Drafts</p>
            </div>
            <BookOpen className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.featured}</p>
              <p className="text-sm text-gray-600">Featured</p>
            </div>
            <Star className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.totalViews}</p>
              <p className="text-sm text-gray-600">Total Views</p>
            </div>
            <BarChart3 className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.totalComments}</p>
              <p className="text-sm text-gray-600">Comments</p>
            </div>
            <MessageCircle className="w-8 h-8 text-indigo-500" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search posts, tags, content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="views">Most Views</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid/List View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onEdit={handleEdit}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Post</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Metrics</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBlogs.map((blog) => (
                  <BlogTableRow 
                    key={blog.id} 
                    blog={blog} 
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredBlogs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No blog posts found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={handleCreateNew}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Create Your First Post</span>
          </button>
        </div>
      )}

      {/* Editor Modal would go here - Same as before but improved */}
    </div>
  );
};

// Blog Card Component for Grid View
const BlogCard = ({ blog, onEdit, onDelete, onStatusChange }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Featured Badge */}
      {blog.featured && (
        <div className="bg-yellow-500 text-gray-900 px-3 py-1 text-xs font-semibold absolute top-4 left-4 rounded-full z-10">
          Featured
        </div>
      )}

      {/* Blog Image/Placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border `}>
            {blog.status === 'published' ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
            {blog.status}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-yellow-600 font-semibold text-sm">{blog.category}</span>
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Clock className="w-3 h-3" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 leading-tight">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
          {blog.tags.length > 3 && (
            <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
              +{blog.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{blog.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{blog.comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-10 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-20 min-w-48">
                <button
                  onClick={() => { onEdit(blog); setShowMenu(false); }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit Post</span>
                </button>
                <button
                  onClick={() => { onStatusChange(blog.id, blog.status === 'published' ? 'draft' : 'published'); setShowMenu(false); }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span>{blog.status === 'published' ? 'Unpublish' : 'Publish'}</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live</span>
                </button>
                <div className="border-t border-gray-200 my-1"></div>
                <button
                  onClick={() => { onDelete(blog.id); setShowMenu(false); }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close menu when clicking outside */}
      {showMenu && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setShowMenu(false)}
        />
      )}
    </motion.div>
  );
};

// Blog Table Row Component for List View
const BlogTableRow = ({ blog, onEdit, onDelete, onStatusChange }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex-shrink-0"></div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-xs line-clamp-1">{blog.excerpt}</p>
            <div className="flex items-center space-x-2 mt-2">
              <User className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-500">{blog.author}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {blog.category}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border `}>
          {blog.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-4 text-xs text-gray-600">
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{blog.views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-3 h-3" />
            <span>{blog.comments}</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>{blog.date}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onEdit(blog)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            title="Edit"
          >
            <Edit className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDelete(blog.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </td>
    </tr>
  );
};

// Star icon component
const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default BlogManage;