
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import SideBar from './Sidebar';
import Carousel from './Carousel';
import MainContainer from './MainContainer';
import '../App.css';
const Home = () => {
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          {/* Navbar */}
          <Header />
          <SideBar/>
          {/* /.navbar */}
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper ml-0">
            {/* Content Header (Page header) */}
           
            {/* /.content-header */}
            <Carousel/>
            {/* Main content */}
            <MainContainer/>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}
         
          {/* /.control-sidebar */}
          {/* Main Footer */}
          <Footer />
        </div>

      </div>

    </div>
  )
}
export default Home;

