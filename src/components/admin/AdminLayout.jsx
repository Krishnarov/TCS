import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
  const { logout, adminUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h3>TCS Admin</h3>
          <p>Welcome, {adminUser?.name}</p>
        </div>
        <nav className="sidebar-nav">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/blog">Blog Management</Link>
          <Link to="/admin/career">Career Forms</Link>
          <Link to="/admin/contact">Contact Forms</Link>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;