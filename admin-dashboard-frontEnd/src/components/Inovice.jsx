import React from 'react'

const Inovice = () => {
  return (
    <div className="hold-transition sidebar-mini">
  <div className="wrapper">
    {/* Navbar */}
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="../../index3.html" className="nav-link">Home</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Navbar Search */}
        <li className="nav-item">
          <a className="nav-link" data-widget="navbar-search" href="#" role="button">
            <i className="fas fa-search" />
          </a>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        {/* Messages Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-comments" />
            <span className="badge badge-danger navbar-badge">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="text-sm">I got your message bro</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="text-sm">The subject goes here</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-bell" />
            <span className="badge badge-warning navbar-badge">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2" /> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-users mr-2" /> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2" /> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-widget="fullscreen" href="#" role="button">
            <i className="fas fa-expand-arrows-alt" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <i className="fas fa-th-large" />
          </a>
        </li>
      </ul>
    </nav>
    {/* /.navbar */}
    {/* Main Sidebar Container */}
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="../../index3.html" className="brand-link">
        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">Alexander Pierce</a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../../index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="../widgets.html" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Widgets
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Layout Options
                  <i className="fas fa-angle-left right" />
                  <span className="badge badge-info right">6</span>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../layout/top-nav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Top Navigation</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/top-nav-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Top Navigation + Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/boxed.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Boxed</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/fixed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/fixed-sidebar-custom.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Sidebar <small>+ Custom Area</small></p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Navbar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/fixed-footer.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Footer</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/collapsed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Collapsed Sidebar</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                  Charts
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../charts/chartjs.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>ChartJS</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Flot</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/inline.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inline</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/uplot.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>uPlot</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tree" />
                <p>
                  UI Elements
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../UI/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>General</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/icons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Icons</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/buttons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Buttons</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/sliders.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Sliders</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/modals.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Modals &amp; Alerts</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/navbar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Navbar &amp; Tabs</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/timeline.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Timeline</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/ribbons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Ribbons</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-edit" />
                <p>
                  Forms
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../forms/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>General Elements</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/advanced.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Advanced Elements</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/editors.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Editors</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/validation.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Validation</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>
                  Tables
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../tables/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>DataTables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">EXAMPLES</li>
            <li className="nav-item">
              <a href="../calendar.html" className="nav-link">
                <i className="nav-icon far fa-calendar-alt" />
                <p>
                  Calendar
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../gallery.html" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>
                  Gallery
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../kanban.html" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>
                  Kanban Board
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-envelope" />
                <p>
                  Mailbox
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../mailbox/mailbox.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inbox</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../mailbox/compose.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Compose</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../mailbox/read-mail.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Read</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-book" />
                <p>
                  Pages
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../examples/invoice.html" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Invoice</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/profile.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/e-commerce.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>E-commerce</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/projects.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Projects</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/project-add.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Project Add</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/project-edit.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Project Edit</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/project-detail.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Project Detail</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/contacts.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Contacts</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/faq.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>FAQ</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/contact-us.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Contact us</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-plus-square" />
                <p>
                  Extras
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>
                      Login &amp; Register v1
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../examples/login.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Login v1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../examples/register.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Register v1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../examples/forgot-password.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Forgot Password v1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../examples/recover-password.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Recover Password v1</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>
                      Login &amp; Register v2
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="../examples/login-v2.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Login v2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../examples/register-v2.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Register v2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../examples/forgot-password-v2.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Forgot Password v2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../examples/recover-password-v2.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Recover Password v2</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="../examples/lockscreen.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Lockscreen</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/legacy-user-menu.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Legacy User Menu</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/language-menu.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Language Menu</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/404.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Error 404</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/500.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Error 500</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/pace.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Pace</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/blank.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Blank Page</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../starter.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Starter Page</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-search" />
                <p>
                  Search
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../search/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Simple Search</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../search/enhanced.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Enhanced</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">MISCELLANEOUS</li>
            <li className="nav-item">
              <a href="../../iframe.html" className="nav-link">
                <i className="nav-icon fas fa-ellipsis-h" />
                <p>Tabbed IFrame Plugin</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                <i className="nav-icon fas fa-file" />
                <p>Documentation</p>
              </a>
            </li>
            <li className="nav-header">MULTI LEVEL EXAMPLE</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-circle nav-icon" />
                <p>Level 1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-circle" />
                <p>
                  Level 1
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Level 2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>
                      Level 2
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-dot-circle nav-icon" />
                        <p>Level 3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Level 2</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-circle nav-icon" />
                <p>Level 1</p>
              </a>
            </li>
            <li className="nav-header">LABELS</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-danger" />
                <p className="text">Important</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-warning" />
                <p>Warning</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-circle text-info" />
                <p>Informational</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
    {/* Content Wrapper. Contains page content */}
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Invoice</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Invoice</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="callout callout-info">
                <h5><i className="fas fa-info" /> Note:</h5>
                This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.
              </div>
              {/* Main content */}
              <div className="invoice p-3 mb-3">
                {/* title row */}
                <div className="row">
                  <div className="col-12">
                    <h4>
                      <i className="fas fa-globe" /> AdminLTE, Inc.
                      <small className="float-right">Date: 2/10/2014</small>
                    </h4>
                  </div>
                  {/* /.col */}
                </div>
                {/* info row */}
                <div className="row invoice-info">
                  <div className="col-sm-4 invoice-col">
                    From
                    <address>
                      <strong>Admin, Inc.</strong><br />
                      795 Folsom Ave, Suite 600<br />
                      San Francisco, CA 94107<br />
                      Phone: (804) 123-5432<br />
                      Email: info@almasaeedstudio.com
                    </address>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-4 invoice-col">
                    To
                    <address>
                      <strong>John Doe</strong><br />
                      795 Folsom Ave, Suite 600<br />
                      San Francisco, CA 94107<br />
                      Phone: (555) 539-1037<br />
                      Email: john.doe@example.com
                    </address>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-4 invoice-col">
                    <b>Invoice #007612</b><br />
                    <br />
                    <b>Order ID:</b> 4F3S8J<br />
                    <b>Payment Due:</b> 2/22/2014<br />
                    <b>Account:</b> 968-34567
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
                {/* Table row */}
                <div className="row">
                  <div className="col-12 table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Qty</th>
                          <th>Product</th>
                          <th>Serial #</th>
                          <th>Description</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Call of Duty</td>
                          <td>455-981-221</td>
                          <td>El snort testosterone trophy driving gloves handsome</td>
                          <td>$64.50</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Need for Speed IV</td>
                          <td>247-925-726</td>
                          <td>Wes Anderson umami biodiesel</td>
                          <td>$50.00</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Monsters DVD</td>
                          <td>735-845-642</td>
                          <td>Terry Richardson helvetica tousled street art master</td>
                          <td>$10.70</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Grown Ups Blue Ray</td>
                          <td>422-568-642</td>
                          <td>Tousled lomo letterpress</td>
                          <td>$25.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
                <div className="row">
                  {/* accepted payments column */}
                  <div className="col-6">
                    <p className="lead">Payment Methods:</p>
                    <img src="../../dist/img/credit/visa.png" alt="Visa" />
                    <img src="../../dist/img/credit/mastercard.png" alt="Mastercard" />
                    <img src="../../dist/img/credit/american-express.png" alt="American Express" />
                    <img src="../../dist/img/credit/paypal2.png" alt="Paypal" />
                    <p className="text-muted well well-sm shadow-none" style={{marginTop: 10}}>
                      Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem
                      plugg
                      dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                    </p>
                  </div>
                  {/* /.col */}
                  <div className="col-6">
                    <p className="lead">Amount Due 2/22/2014</p>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody><tr>
                            <th style={{width: '50%'}}>Subtotal:</th>
                            <td>$250.30</td>
                          </tr>
                          <tr>
                            <th>Tax (9.3%)</th>
                            <td>$10.34</td>
                          </tr>
                          <tr>
                            <th>Shipping:</th>
                            <td>$5.80</td>
                          </tr>
                          <tr>
                            <th>Total:</th>
                            <td>$265.24</td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
                {/* this row will not appear when printing */}
                <div className="row no-print">
                  <div className="col-12">
                    <a href="invoice-print.html" rel="noopener" target="_blank" className="btn btn-default"><i className="fas fa-print" /> Print</a>
                    <button type="button" className="btn btn-success float-right"><i className="far fa-credit-card" /> Submit
                      Payment
                    </button>
                    <button type="button" className="btn btn-primary float-right" style={{marginRight: 5}}>
                      <i className="fas fa-download" /> Generate PDF
                    </button>
                  </div>
                </div>
              </div>
              {/* /.invoice */}
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
    {/* /.content-wrapper */}
    <footer className="main-footer no-print">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
    {/* Control Sidebar */}
    <aside className="control-sidebar control-sidebar-dark">
      {/* Control sidebar content goes here */}
    </aside>
    {/* /.control-sidebar */}
  </div>
  {/* ./wrapper */}
  {/* jQuery */}
  {/* Bootstrap 4 */}
  {/* AdminLTE App */}
  {/* AdminLTE for demo purposes */}
</div>

  )
}

export default Inovice