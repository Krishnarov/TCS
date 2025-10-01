import React, { useState, useEffect } from 'react';

function CareerManage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [jobFilter, setJobFilter] = useState('all');

  // Mock data - in real app, this would come from your API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockApplications = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "+1234567890",
          position: "Frontend Developer",
          experience: "3 years",
          currentCompany: "Tech Corp",
          expectedSalary: "$60,000",
          resume: "john_doe_resume.pdf",
          coverLetter: "I am excited to apply for the Frontend Developer position at your company. With 3 years of experience in React and modern JavaScript, I believe I would be a great fit for your team.",
          date: "2024-01-15T10:30:00Z",
          status: "new",
          skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
          education: "Bachelor in Computer Science"
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "+0987654321",
          position: "Backend Developer",
          experience: "5 years",
          currentCompany: "Data Systems Inc",
          expectedSalary: "$80,000",
          resume: "jane_smith_resume.pdf",
          coverLetter: "I am writing to express my interest in the Backend Developer position. My extensive experience with Node.js and database design aligns perfectly with your requirements.",
          date: "2024-01-14T14:45:00Z",
          status: "reviewed",
          skills: ["Node.js", "Python", "MongoDB", "SQL", "AWS"],
          education: "Master in Software Engineering"
        },
        {
          id: 3,
          name: "Mike Johnson",
          email: "mike@example.com",
          phone: "+1122334455",
          position: "Full Stack Developer",
          experience: "4 years",
          currentCompany: "Web Solutions",
          expectedSalary: "$75,000",
          resume: "mike_johnson_resume.pdf",
          coverLetter: "As a Full Stack Developer with 4 years of experience, I have worked on both frontend and backend technologies. I am particularly interested in your company's approach to agile development.",
          date: "2024-01-13T09:15:00Z",
          status: "interview",
          skills: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
          education: "Bachelor in Information Technology"
        },
        {
          id: 4,
          name: "Sarah Wilson",
          email: "sarah@example.com",
          phone: "+5566778899",
          position: "UI/UX Designer",
          experience: "2 years",
          currentCompany: "Creative Designs",
          expectedSalary: "$55,000",
          resume: "sarah_wilson_resume.pdf",
          coverLetter: "I am passionate about creating intuitive user experiences and have been following your company's design work. I would love to contribute to your design team.",
          date: "2024-01-12T16:20:00Z",
          status: "rejected",
          skills: ["Figma", "Adobe XD", "UI Design", "Wireframing", "Prototyping"],
          education: "Bachelor in Design"
        },
        {
          id: 5,
          name: "David Brown",
          email: "david@example.com",
          phone: "+9988776655",
          position: "Frontend Developer",
          experience: "6 years",
          currentCompany: "Digital Innovations",
          expectedSalary: "$85,000",
          resume: "david_brown_resume.pdf",
          coverLetter: "With 6 years of experience in frontend development and team leadership, I am excited about the opportunity to bring my expertise to your growing development team.",
          date: "2024-01-11T11:30:00Z",
          status: "hired",
          skills: ["React", "Vue", "TypeScript", "SASS", "Jest"],
          education: "Master in Computer Science"
        }
      ];
      setApplications(mockApplications);
      setLoading(false);
    }, 1500);
  }, []);

  // Get unique positions for filter
  const positions = [...new Set(applications.map(app => app.position))];

  // Filter applications based on search and filters
  const filteredApplications = applications.filter(application => {
    const matchesSearch = application.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         application.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         application.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || application.status === statusFilter;
    const matchesJob = jobFilter === 'all' || application.position === jobFilter;
    
    return matchesSearch && matchesStatus && matchesJob;
  });

  const deleteApplication = (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      setApplications(applications.filter(app => app.id !== id));
      if (selectedApplication && selectedApplication.id === id) {
        setSelectedApplication(null);
      }
    }
  };

  const updateStatus = (id, newStatus) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
    if (selectedApplication && selectedApplication.id === id) {
      setSelectedApplication({ ...selectedApplication, status: newStatus });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const getStatusColor = (status) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      reviewed: 'bg-yellow-100 text-yellow-800',
      interview: 'bg-purple-100 text-purple-800',
      rejected: 'bg-red-100 text-red-800',
      hired: 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status) => {
    const icons = {
      new: '🆕',
      reviewed: '📋',
      interview: '🎯',
      rejected: '❌',
      hired: '✅'
    };
    return icons[status] || '📄';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Job Applications</h1>
            <p className="text-gray-600 mt-1">Manage all job applications and candidate information</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                Total: {applications.length}
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                Hired: {applications.filter(a => a.status === 'hired').length}
              </span>
              <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                New: {applications.filter(a => a.status === 'new').length}
              </span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search by name, email, or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="reviewed">Reviewed</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
            <option value="hired">Hired</option>
          </select>
          
          <select
            value={jobFilter}
            onChange={(e) => setJobFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Positions</option>
            {positions.map(position => (
              <option key={position} value={position}>{position}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applications List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Applications {filteredApplications.length > 0 && `(${filteredApplications.length})`}
            </h2>
          </div>
          
          <div className="overflow-y-auto max-h-[600px]">
            {filteredApplications.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📋</div>
                <p className="text-gray-500 text-lg">No applications found</p>
                <p className="text-gray-400 text-sm mt-1">
                  {searchTerm || statusFilter !== 'all' || jobFilter !== 'all' 
                    ? 'Try adjusting your filters' 
                    : 'No job applications yet'}
                </p>
              </div>
            ) : (
              filteredApplications.map(application => (
                <div
                  key={application.id}
                  className={`border-b border-gray-100 p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                    selectedApplication?.id === application.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                  }`}
                  onClick={() => setSelectedApplication(application)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {getInitials(application.name)}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {application.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                            {getStatusIcon(application.status)} {application.status}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatDate(application.date)}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {application.position}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span>📧 {application.email}</span>
                        <span>💼 {application.experience}</span>
                        <span>💰 {application.expectedSalary}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {application.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                        {application.skills.length > 3 && (
                          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            +{application.skills.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 truncate">
                          📄 {application.resume}
                        </p>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteApplication(application.id);
                            }}
                            className="text-xs bg-red-100 text-red-800 hover:bg-red-200 px-2 py-1 rounded transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Application Detail */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {selectedApplication ? (
            <>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Application Details</h2>
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto max-h-[600px]">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                    {getInitials(selectedApplication.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedApplication.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedApplication.status)}`}>
                        {getStatusIcon(selectedApplication.status)} {selectedApplication.status.charAt(0).toUpperCase() + selectedApplication.status.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">
                        Applied: {formatDate(selectedApplication.date)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-gray-900">
                        <a href={`mailto:${selectedApplication.email}`} className="text-blue-600 hover:text-blue-800">
                          {selectedApplication.email}
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone</label>
                      <p className="text-gray-900">
                        <a href={`tel:${selectedApplication.phone}`} className="text-blue-600 hover:text-blue-800">
                          {selectedApplication.phone}
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Current Company</label>
                      <p className="text-gray-900">{selectedApplication.currentCompany}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Position Applied</label>
                      <p className="text-lg font-semibold text-gray-900">{selectedApplication.position}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Experience</label>
                      <p className="text-gray-900">{selectedApplication.experience}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-500">Expected Salary</label>
                      <p className="text-gray-900">{selectedApplication.expectedSalary}</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <label className="text-sm font-medium text-gray-500">Education</label>
                  <p className="text-gray-900">{selectedApplication.education}</p>
                </div>

                {/* Skills */}
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedApplication.skills.map((skill, index) => (
                      <span key={index} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="text-sm font-medium text-gray-500">Cover Letter</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-1">
                    <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">
                      {selectedApplication.coverLetter}
                    </p>
                  </div>
                </div>

                {/* Resume */}
                <div>
                  <label className="text-sm font-medium text-gray-500">Resume</label>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-gray-700">📄 {selectedApplication.resume}</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Download
                    </button>
                  </div>
                </div>

                {/* Status Actions */}
                <div className="border-t border-gray-200 pt-6">
                  <label className="text-sm font-medium text-gray-500 mb-3 block">Update Application Status</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {['new', 'reviewed', 'interview', 'rejected', 'hired'].map(status => (
                      <button
                        key={status}
                        onClick={() => updateStatus(selectedApplication.id, status)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedApplication.status === status
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => deleteApplication(selectedApplication.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>Delete Application</span>
                  </button>
                  
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-300 text-8xl mb-4">👆</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select an Application</h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                Choose a job application from the list to view detailed candidate information and manage the application.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CareerManage;