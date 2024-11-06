import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Home from './Home';
import Footer from './Footer';
//import SparklineComponent from '../components/SparklineComponent';

const Dashboard = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
 // const [sparklineData, setSparklineData] = useState([5, 6, 7, 8, 9]); // Dynamic sparkline data

  return (
    <div>
      <Header 
        editProfile={editProfile} 
        setEditProfile={setEditProfile} 
        viewProfile={viewProfile} 
        setViewProfile={setViewProfile}
      />
      <SideBar />
      <Home 
        editProfile={editProfile} 
        viewProfile={viewProfile} 
        setEditProfile={setEditProfile} 
        setViewProfile={setViewProfile}
      />
      {/* <SparklineComponent data={sparklineData} /> Pass dynamic data */}
      <Footer />
    </div>
  );
};

export default Dashboard;
