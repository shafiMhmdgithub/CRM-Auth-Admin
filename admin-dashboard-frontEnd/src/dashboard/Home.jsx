import React, { useEffect } from 'react';
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';
import MainContent from './MainContent';

const Home = ({ editProfile, viewProfile, setEditProfile, setViewProfile }) => {
  useEffect(() => {
    if (viewProfile) {
      setEditProfile(false);
    }
  }, [viewProfile, setEditProfile]);

  useEffect(() => {
    if (editProfile) {
      setViewProfile(false);
    }
  }, [editProfile, setViewProfile]);

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              {editProfile ? (
                <h1 className="m-0">Edit Profile</h1>
              ) : viewProfile ? (
                <h1 className="m-0">View Profile</h1>
              ) : (
                <h1 className="m-0">Dashboard</h1>
              )}
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                {editProfile ? (
                  <li className="breadcrumb-item active">Edit Profile</li>
                ) : viewProfile ? (
                  <li className="breadcrumb-item active">View Profile</li>
                ) : (
                  <li className="breadcrumb-item active">Dashboard</li>
                )}
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* Render Main Content */}
      {editProfile ? <EditProfile /> : viewProfile ? <ViewProfile /> : <MainContent />}
    </div>
  );
};

export default Home;
