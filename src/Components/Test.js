import React from 'react'
import "../assets/modules/bootstrap/css/bootstrap.min.css"
import "../assets/modules/fontawesome/css/all.min.css"
import "../assets/css/loading-bar.css"
import "../assets/css/style.css"
import "../assets/css/components.css"
import "../assets/css/assesment.css"
import '@loadingio/loading-bar'

const Test = () => {

  return (
  <div style={{backgroundColor: "#222747"}}>
  <div className="main-wrapper main-wrapper-1">
    <div className="navbar-bg"></div>
    <nav className="navbar navbar-expand-lg main-navbar">
      <form className="form-inline mr-auto">
        <ul className="navbar-nav mr-3">
          <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
          <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
        </ul>
        <div className="search-element">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
          <button className="btn" type="submit"><i className="fas fa-search"></i></button>
          <div className="search-backdrop"></div>
          <div className="search-result">
            <div className="search-header">
              Histories
            </div>
            <div className="search-item">
              <a href="#">How to hack NASA using CSS</a>
              <a href="#" className="search-close"><i className="fas fa-times"></i></a>
            </div>
            <div className="search-item">
              <a href="#">Kodinger.com</a>
              <a href="#" className="search-close"><i className="fas fa-times"></i></a>
            </div>
            <div className="search-item">
              <a href="#">#Stisla</a>
              <a href="#" className="search-close"><i className="fas fa-times"></i></a>
            </div>
            <div className="search-header">
              Result
            </div>
            <div className="search-item">
              <a href="#">
                <img className="mr-3 rounded" width="30" src="assets/img/products/product-3-50.png" alt="product" />
                oPhone S9 Limited Edition
              </a>
            </div>
            <div className="search-item">
              <a href="#">
                <img className="mr-3 rounded" width="30" src="assets/img/products/product-2-50.png" alt="product" />
                Drone X2 New Gen-7
              </a>
            </div>
            <div className="search-item">
              <a href="#">
                <img className="mr-3 rounded" width="30" src="assets/img/products/product-1-50.png" alt="product" />
                Headphone Blitz
              </a>
            </div>
            <div className="search-header">
              Projects
            </div>
            <div className="search-item">
              <a href="#">
                <div className="search-icon bg-danger text-white mr-3">
                  <i className="fas fa-code"></i>
                </div>
                Stisla Admin Template
              </a>
            </div>
            <div className="search-item">
              <a href="#">
                <div className="search-icon bg-primary text-white mr-3">
                  <i className="fas fa-laptop"></i>
                </div>
                Create a new Homepage Design
              </a>
            </div>
          </div>
        </div>
      </form>
      <ul className="navbar-nav navbar-right">
        <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope"></i></a>
          <div className="dropdown-menu dropdown-list dropdown-menu-right">
            <div className="dropdown-header">Messages
              <div className="float-right">
                <a href="#">Mark All As Read</a>
              </div>
            </div>
            <div className="dropdown-list-content dropdown-list-message">
              <a href="#" className="dropdown-item dropdown-item-unread">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle" />
                  <div className="is-online"></div>
                </div>
                <div className="dropdown-item-desc">
                  <b>Kusnaedi</b>
                  <p>Hello, Bro!</p>
                  <div className="time">10 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item dropdown-item-unread">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="assets/img/avatar/avatar-2.png" className="rounded-circle" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Dedik Sugiharto</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div className="time">12 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item dropdown-item-unread">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="assets/img/avatar/avatar-3.png" className="rounded-circle" />
                  <div className="is-online"></div>
                </div>
                <div className="dropdown-item-desc">
                  <b>Agung Ardiansyah</b>
                  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div className="time">12 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="assets/img/avatar/avatar-4.png" className="rounded-circle" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Ardian Rahardiansyah</b>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                  <div className="time">16 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="assets/img/avatar/avatar-5.png" className="rounded-circle" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Alfa Zulkarnain</b>
                  <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                  <div className="time">Yesterday</div>
                </div>
              </a>
            </div>
            <div className="dropdown-footer text-center">
              <a href="#">View All <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </li>
        <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></a>
          <div className="dropdown-menu dropdown-list dropdown-menu-right">
            <div className="dropdown-header">Notifications
              <div className="float-right">
                <a href="#">Mark All As Read</a>
              </div>
            </div>
            <div className="dropdown-list-content dropdown-list-icons">
              <a href="#" className="dropdown-item dropdown-item-unread">
                <div className="dropdown-item-icon bg-primary text-white">
                  <i className="fas fa-code"></i>
                </div>
                <div className="dropdown-item-desc">
                  Template update is available now!
                  <div className="time text-primary">2 Min Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-icon bg-info text-white">
                  <i className="far fa-user"></i>
                </div>
                <div className="dropdown-item-desc">
                  <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                  <div className="time">10 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-icon bg-success text-white">
                  <i className="fas fa-check"></i>
                </div>
                <div className="dropdown-item-desc">
                  <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                  <div className="time">12 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-icon bg-danger text-white">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div className="dropdown-item-desc">
                  Low disk space. Let's clean it!
                  <div className="time">17 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-icon bg-info text-white">
                  <i className="fas fa-bell"></i>
                </div>
                <div className="dropdown-item-desc">
                  Welcome to Stisla template!
                  <div className="time">Yesterday</div>
                </div>
              </a>
            </div>
            <div className="dropdown-footer text-center">
              <a href="#">View All <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </li>
        <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
          <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
          <div className="d-sm-none d-lg-inline-block">Hi, User</div></a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-title">Logged in 5 min ago</div>
            <a href="features-profile.html" className="dropdown-item has-icon">
              <i className="far fa-user"></i> Profile
            </a>
            <a href="features-activities.html" className="dropdown-item has-icon">
              <i className="fas fa-bolt"></i> Activities
            </a>
            <a href="features-settings.html" className="dropdown-item has-icon">
              <i className="fas fa-cog"></i> Settings
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item has-icon text-danger">
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">Stisla</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="index.html">St</a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Dashboard</li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="index-0.html">General Dashboard</a></li>
              <li><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
            </ul>
          </li>
          <li className="menu-header">Starter</li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns"></i> <span>Layout</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="layout-default.html">Default Layout</a></li>
              <li><a className="nav-link" href="layout-transparent.html">Transparent Sidebar</a></li>
              <li><a className="nav-link" href="layout-top-navigation.html">Top Navigation</a></li>
            </ul>
          </li>
          <li className="active"><a className="nav-link" href="blank.html"><i className="far fa-square"></i> <span>Blank Page</span></a></li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="fas fa-th"></i> <span>Bootstrap</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="bootstrap-alert.html">Alert</a></li>
              <li><a className="nav-link" href="bootstrap-badge.html">Badge</a></li>
              <li><a className="nav-link" href="bootstrap-breadcrumb.html">Breadcrumb</a></li>
              <li><a className="nav-link" href="bootstrap-buttons.html">Buttons</a></li>
              <li><a className="nav-link" href="bootstrap-card.html">Card</a></li>
              <li><a className="nav-link" href="bootstrap-carousel.html">Carousel</a></li>
              <li><a className="nav-link" href="bootstrap-collapse.html">Collapse</a></li>
              <li><a className="nav-link" href="bootstrap-dropdown.html">Dropdown</a></li>
              <li><a className="nav-link" href="bootstrap-form.html">Form</a></li>
              <li><a className="nav-link" href="bootstrap-list-group.html">List Group</a></li>
              <li><a className="nav-link" href="bootstrap-media-object.html">Media Object</a></li>
              <li><a className="nav-link" href="bootstrap-modal.html">Modal</a></li>
              <li><a className="nav-link" href="bootstrap-nav.html">Nav</a></li>
              <li><a className="nav-link" href="bootstrap-navbar.html">Navbar</a></li>
              <li><a className="nav-link" href="bootstrap-pagination.html">Pagination</a></li>
              <li><a className="nav-link" href="bootstrap-popover.html">Popover</a></li>
              <li><a className="nav-link" href="bootstrap-progress.html">Progress</a></li>
              <li><a className="nav-link" href="bootstrap-table.html">Table</a></li>
              <li><a className="nav-link" href="bootstrap-tooltip.html">Tooltip</a></li>
              <li><a className="nav-link" href="bootstrap-typography.html">Typography</a></li>
            </ul>
          </li>
          <li className="menu-header">Stisla</li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="fas fa-th-large"></i> <span>Components</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="components-article.html">Article</a></li>                <li><a className="nav-link beep beep-sidebar" href="components-avatar.html">Avatar</a></li>                <li><a className="nav-link" href="components-chat-box.html">Chat Box</a></li>                <li><a className="nav-link beep beep-sidebar" href="components-empty-state.html">Empty State</a></li>                <li><a className="nav-link" href="components-gallery.html">Gallery</a></li>
              <li><a className="nav-link beep beep-sidebar" href="components-hero.html">Hero</a></li>                <li><a className="nav-link" href="components-multiple-upload.html">Multiple Upload</a></li>
              <li><a className="nav-link beep beep-sidebar" href="components-pricing.html">Pricing</a></li>                <li><a className="nav-link" href="components-statistic.html">Statistic</a></li>                <li><a className="nav-link" href="components-tab.html">Tab</a></li>
              <li><a className="nav-link" href="components-table.html">Table</a></li>
              <li><a className="nav-link" href="components-user.html">User</a></li>                <li><a className="nav-link beep beep-sidebar" href="components-wizard.html">Wizard</a></li>              </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="far fa-file-alt"></i> <span>Forms</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="forms-advanced-form.html">Advanced Form</a></li>
              <li><a className="nav-link" href="forms-editor.html">Editor</a></li>
              <li><a className="nav-link" href="forms-validation.html">Validation</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="fas fa-map-marker-alt"></i> <span>Google Maps</span></a>
            <ul className="dropdown-menu">
              <li><a href="gmaps-advanced-route.html">Advanced Route</a></li>
              <li><a href="gmaps-draggable-marker.html">Draggable Marker</a></li>
              <li><a href="gmaps-geocoding.html">Geocoding</a></li>
              <li><a href="gmaps-geolocation.html">Geolocation</a></li>
              <li><a href="gmaps-marker.html">Marker</a></li>
              <li><a href="gmaps-multiple-marker.html">Multiple Marker</a></li>
              <li><a href="gmaps-route.html">Route</a></li>
              <li><a href="gmaps-simple.html">Simple</a></li>
            </ul>
          </li>            <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="fas fa-plug"></i> <span>Modules</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="modules-calendar.html">Calendar</a></li>
              <li><a className="nav-link" href="modules-chartjs.html">ChartJS</a></li>
              <li><a className="nav-link" href="modules-datatables.html">DataTables</a></li>
              <li><a className="nav-link" href="modules-flag.html">Flag</a></li>
              <li><a className="nav-link" href="modules-font-awesome.html">Font Awesome</a></li>
              <li><a className="nav-link" href="modules-ion-icons.html">Ion Icons</a></li>
              <li><a className="nav-link" href="modules-owl-carousel.html">Owl Carousel</a></li>
              <li><a className="nav-link" href="modules-sparkline.html">Sparkline</a></li>
              <li><a className="nav-link" href="modules-sweet-alert.html">Sweet Alert</a></li>
              <li><a className="nav-link" href="modules-toastr.html">Toastr</a></li>
              <li><a className="nav-link" href="modules-vector-map.html">Vector Map</a></li>
              <li><a className="nav-link" href="modules-weather-icon.html">Weather Icon</a></li>
            </ul>
          </li>
          <li className="menu-header">Pages</li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="far fa-user"></i> <span>Auth</span></a>
            <ul className="dropdown-menu">
              <li><a href="auth-forgot-password.html">Forgot Password</a></li> 
              <li><a href="auth-login.html">Login</a></li> 
              <li><a href="auth-register.html">Register</a></li> 
              <li><a href="auth-reset-password.html">Reset Password</a></li> 
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="fas fa-exclamation"></i> <span>Errors</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="errors-503.html">503</a></li> 
              <li><a className="nav-link" href="errors-403.html">403</a></li> 
              <li><a className="nav-link" href="errors-404.html">404</a></li> 
              <li><a className="nav-link" href="errors-500.html">500</a></li> 
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="fas fa-bicycle"></i> <span>Features</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="features-activities.html">Activities</a></li>
              <li><a className="nav-link" href="features-post-create.html">Post Create</a></li>
              <li><a className="nav-link" href="features-posts.html">Posts</a></li>
              <li><a className="nav-link" href="features-profile.html">Profile</a></li>
              <li><a className="nav-link" href="features-settings.html">Settings</a></li>
              <li><a className="nav-link" href="features-setting-detail.html">Setting Detail</a></li>
              <li><a className="nav-link" href="features-tickets.html">Tickets</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="fas fa-ellipsis-h"></i> <span>Utilities</span></a>
            <ul className="dropdown-menu">
              <li><a href="utilities-contact.html">Contact</a></li>
              <li><a className="nav-link" href="utilities-invoice.html">Invoice</a></li>
              <li><a href="utilities-subscribe.html">Subscribe</a></li>
            </ul>
          </li>            <li><a className="nav-link" href="credits.html"><i className="fas fa-pencil-ruler"></i> <span>Credits</span></a></li>
        </ul>

        <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
          <a href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
            <i className="fas fa-rocket"></i> Documentation
          </a>
        </div>        </aside>
    </div>

    <div className="main-content">
        <div className="section-body">
          <div className="container light-style flex-grow-1 container py-5">
            <div className="card overflow-hidden">
              <div className="row no-gutters row-bordered row-border-light d-flex justify-content-center rounded-top">
                <h4 className="pt-3 pb-2 text-black">Knowledge Area</h4>
              </div>
              <div className="d-flex justify-content-center p-2">
                <div
                className="ldBar label-center mt-2"
                data-value="79"
                data-preset="circle"
              ></div>
              </div>
              <div>
                <h5 className="mt-2 ml-5 text-white">1. Inside which HTML element do we put the JavaScript?</h5>
              </div>
              <div style={{marginLeft: "108px"}}>
              <div className="d-block">
              <div className="d-block custom-control custom-radio p-2">
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label text-white-50" for="customRadio1">Script</label>
              </div>
              </div>
              <div className="custom-control custom-radio p-2">
                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label text-white-50" for="customRadio2">JavaScript</label>
              </div>
              <div className="custom-control custom-radio p-2">
                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label text-white-50" for="customRadio3">Scripting</label>
              </div>
              <div className="custom-control custom-radio p-2">
                <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
                <label className="custom-control-label text-white-50" for="customRadio4">js</label>
              </div>
              <div className="p-3 float-right mr-5" >
              <a href="#" className="btn btn-lg btn-primary">Next <i className="fa fa-angle-right" aria-hidden="true"></i></a>
             </div>
            </div>
              </div>
            </div>
        </div>
    </div>
    <footer className="main-footer">
      <div className="footer-left">
        Copyright &copy; 2018 <div className="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
      </div>
      <div className="footer-right">
        
      </div>
    </footer>
  </div>
  </div>
  )
}

export default Test