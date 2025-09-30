import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Blog Posts</h3>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h3>Career Applications</h3>
          <p>8</p>
        </div>
        <div className="stat-card">
          <h3>Contact Messages</h3>
          <p>23</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;