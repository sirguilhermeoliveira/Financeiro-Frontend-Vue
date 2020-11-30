<template>
  <vue lang="en" dir="ltr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        content="IndoUi – Bootstrap 4 Admin Dashboard vue Template"
        name="description"
      />
      <meta content="Spruko Technologies Private Limited" name="author" />
      <meta
        name="keywords"
        content="admin, admin dashboard template, admin panel template, admin template, best bootstrap admin template, bootstrap 4 admin template, bootstrap 4 dashboard template, bootstrap admin template, bootstrap dashboard template, vue admin template, vue5 dashboard template, vue5 admin template, modern admin template, simple admin template, template admin bootstrap 4"
      />

      <!-- Favicon -->
      <link
        rel="icon"
        href="../../assets/images/brand/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="../../assets/images/brand/favicon.ico"
      />

      <!-- Title -->
      <title>IndoUi – Bootstrap 4 Admin Dashboard vue Template</title>

      <!--Bootstrap css-->
      <link
        rel="stylesheet"
        href="../../assets/plugins/bootstrap/css/bootstrap.min.css"
      />

      <!--Style css -->
      <link href="../../assets/css/style.css" rel="stylesheet" />
      <link href="../../assets/css/dark-style.css" rel="stylesheet" />

      <!-- P-scrollbar css-->
      <link
        href="../../assets/plugins/p-scrollbar/p-scrollbar.css"
        rel="stylesheet"
      />

      <!-- Horizontalmenu css -->
      <link
        href="../../assets/plugins/horizontal-menu/horizontal-menu.css"
        rel="stylesheet"
      />

      <!--Daterangepicker css-->
      <link
        href="../../assets/plugins/bootstrap-daterangepicker/daterangepicker.css"
        rel="stylesheet"
      />

      <!-- Rightsidebar css -->
      <link href="../../assets/plugins/sidebar/sidebar.css" rel="stylesheet" />

      <!-- Morris  Charts css-->
      <link href="../../assets/plugins/morris/morris.css" rel="stylesheet" />

      <!---Icons css-->
      <link href="../../assets/css/icons.css" rel="stylesheet" />

      <!---Skinmodes css-->
      <link href="../../assets/css/skin-modes.css" rel="stylesheet" />
    </head>

    <body>
      <!--Global-Loader-->
      <!-- 		<div id="global-loader">
			<img src="../../assets/images/loader.svg" alt="loader">
		</div>
 -->
      <div class="page">
        <div class="page-main">
          <!--Header-->
          <div class="hor-header header d-flex navbar-collapse">
            <div class="container">
              <div class="d-flex">
                <a class="animated-arrow hor-toggle horizontal-navtoggle"
                  ><span></span
                ></a>
                <a class="header-brand" href="index.vue">
                  <img
                    src="../../assets/images/brand/logo.png"
                    class="header-brand-img main-logo"
                    alt="IndoUi logo"
                  />
                  <img
                    src="../../assets/images/brand/logo-light.png"
                    class="header-brand-img dark-main-logo"
                    alt="IndoUi logo"
                  />
                  <img
                    src="../../assets/images/brand/icon-light.png"
                    class="header-brand-img dark-icon-logo"
                    alt="IndoUi logo"
                  />
                  <img
                    src="../../assets/images/brand/icon.png"
                    class="header-brand-img icon-logo"
                    alt="IndoUi logo"
                  /> </a
                ><!-- logo-->
                <div class="d-none dropdown d-md-flex header-settings">
                  <a class="nav-link icon" data-toggle="dropdown">
                    <i class="fe fe-grid mr-2"></i
                    ><span class="lay-outstyle mt-1">Settings</span>
                    <span class="pulse2 bg-warning" aria-hidden="true"></span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-left dropdown-menu-arrow"
                  >
                    <a class="dropdown-item" href="#">Option 1</a>
                    <a class="dropdown-item" href="#">Option 2</a>
                    <a class="dropdown-item" href="#">Option 3</a>
                    <a class="dropdown-item" href="#">Option 4</a>
                    <a class="dropdown-item" href="#">Option 5</a>
                  </div>
                </div>
                <div class="d-flex order-lg-2 ml-auto header-right">
                  <div
                    class="d-md-flex header-search"
                    id="bs-example-navbar-collapse-1"
                  >
                    <form class="navbar-form" role="search">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search..."
                        />
                        <span class="input-group-btn">
                          <button type="reset" class="btn btn-default">
                            <i class="fe fe-x"></i>
                          </button>
                          <button type="submit" class="btn btn-default">
                            <i class="fe fe-search"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  <!-- Search -->
                  <div class="d-md-flex">
                    <a href="#" class="nav-link icon full-screen-link">
                      <i class="fe fe-minimize fullscreen-button"></i>
                    </a>
                  </div>
                  <div class="dropdown d-md-flex header-message">
                    <a class="nav-link icon" data-toggle="dropdown">
                      <i class="fe fe-bell"></i>
                      <span class="nav-unread badge badge-danger badge-pill"
                        >3</span
                      >
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                    >
                      <a class="dropdown-item text-center" href="#"
                        >Notifications</a
                      >
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item d-flex pb-4" href="#">
                        <span
                          class="avatar mr-3 br-3 align-self-center avatar-md cover-image bg-primary-transparent text-primary"
                          ><i class="fe fe-mail"></i
                        ></span>
                        <div>
                          <span class="font-weight-bold">
                            Commented on your post
                          </span>
                          <div class="small text-muted d-flex">3 hours ago</div>
                        </div>
                      </a>
                      <a class="dropdown-item d-flex pb-4" href="#">
                        <span
                          class="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-secondary-transparent text-secondary"
                          ><i class="fe fe-download"></i>
                        </span>
                        <div>
                          <span class="font-weight-bold">
                            New file has been Uploaded
                          </span>
                          <div class="small text-muted d-flex">5 hour ago</div>
                        </div>
                      </a>
                      <a class="dropdown-item d-flex pb-4" href="#">
                        <span
                          class="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-warning-transparent text-warning"
                          ><i class="fe fe-user"></i>
                        </span>
                        <div>
                          <span class="font-weight-bold">
                            User account has Updated</span
                          >
                          <div class="small text-muted d-flex">20 mins ago</div>
                        </div>
                      </a>
                      <a class="dropdown-item d-flex pb-4" href="#">
                        <span
                          class="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-info-transparent text-info"
                          ><i class="fe fe-shopping-cart"></i>
                        </span>
                        <div>
                          <span class="font-weight-bold">
                            New Order Recevied</span
                          >
                          <div class="small text-muted d-flex">1 hour ago</div>
                        </div>
                      </a>
                      <div class="dropdown-divider"></div>
                      <div class="text-center dropdown-btn pb-3">
                        <div class="btn-list">
                          <a href="#" class="btn btn-primary btn-sm"
                            ><i class="fe fe-plus mr-1"></i>Add New</a
                          >
                          <a href="#" class="btn btn-secondary btn-sm"
                            ><i class="fe fe-eye mr-1"></i>View All</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Navbar -->
                  <div class="dropdown header-profile">
                    <a
                      class="nav-link pr-0 leading-none d-flex pt-1"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-image-src="../../assets/images/users/female/2.jpg"
                      ></span>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                    >
                      <div class="drop-heading">
                        <div class="text-center">
                          <h5 class="text-dark mb-1">Vanessa Dyer</h5>
                          <small class="text-muted">Web Developer</small>
                        </div>
                      </div>
                      <div class="dropdown-divider m-0"></div>
                      <a class="dropdown-item" href="#"
                        ><i class="dropdown-icon fe fe-user"></i>Profile</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="dropdown-icon fe fe-edit"></i>Schedule</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="dropdown-icon fe fe-mail"></i> Inbox</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="dropdown-icon fe fe-unlock"></i> Look
                        Screen</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="dropdown-icon fe fe-power"></i> Log Out</a
                      >
                      <div class="dropdown-divider"></div>
                      <div class="text-center dropdown-btn pb-3">
                        <div class="btn-list">
                          <a href="#" class="btn btn-icon btn-facebook btn-sm"
                            ><i class="icon icon-social-facebook"></i
                          ></a>
                          <a href="#" class="btn btn-icon btn-twitter btn-sm"
                            ><i class="icon icon-social-twitter"></i
                          ></a>
                          <a href="#" class="btn btn-icon btn-instagram btn-sm"
                            ><i class="icon icon-social-instagram"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown d-md-flex Sidebar-setting">
                    <a
                      href="#"
                      class="nav-link icon"
                      data-toggle="sidebar-right"
                      data-target=".sidebar-right"
                    >
                      <i class="fe fe-more-horizontal"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Header end-->

        <!--Horizontal-main -->
        <div class="sticky">
          <div class="horizontal-main hor-menu clearfix">
            <div class="horizontal-mainwrapper container clearfix">
              <!--Nav-->
              <nav class="horizontalMenu clearfix">
                <ul class="horizontalMenu-list">
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon active"
                      ><i class="fe fe-airplay"></i> Dashboard
                      <i class="fa fa-angle-down horizontal-icon"></i
                    ></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true">
                        <a href="index.vue">Analytics Dashboard</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="index2.vue">E-Commerce Dashboard</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="index3.vue">Sales Dashboard</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="index4.vue">IT Dashboard</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="index5.vue">Logistics Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true">
                    <a href="widgets.vue" class=""
                      ><i class="fe fe-codepen"></i> Widgets</a
                    >
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon"
                      ><i class="fe fe-bar-chart-2"></i> Charts
                      <i class="fa fa-angle-down horizontal-icon"></i
                    ></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true">
                        <a href="chart_chartist.vue">Chartist Charts</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="chart_morris.vue">Morris Charts</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="chart_js.vue">Charts js</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="chart_peity.vue">Pie Charts</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="chart_echart.vue">Echart Charts</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="chart_flot.vue">Flot Charts</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="chart_nvd3.vue">Nvd3 Charts</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="chart_dygraph.vue">Dygraph Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon"
                      ><i class="fe fe-box"></i> Elements
                      <i class="fa fa-angle-down horizontal-icon"></i
                    ></a>
                    <div class="horizontal-megamenu clearfix">
                      <div class="container">
                        <div class="mega-menubg">
                          <div class="row">
                            <div class="col-lg-3 col-md-12 col-xs-12 link-list">
                              <ul>
                                <li aria-haspopup="true">
                                  <a href="alerts.vue">Alerts</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="buttons.vue">Buttons</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="colors.vue">Colors</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="cards.vue">Cards design</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="cards_image.vue"
                                    >Image Cards design</a
                                  >
                                </li>
                                <li aria-haspopup="true">
                                  <a href="avatars.vue">Avatars</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="dropdown.vue">Dropdowns</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="thumbnails.vue">Thumbnails</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="mediaobject.vue">Media Object</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="list.vue"> List</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="tags.vue">Tags</a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12 col-xs-12 link-list">
                              <ul>
                                <li aria-haspopup="true">
                                  <a href="pagination.vue">Pagination</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="navigation.vue">Navigation</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="typography.vue">Typography</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="breadcrumbs.vue">Breadcrumbs</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="badge.vue">Badges</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="jumbotron.vue">Jumbotron</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="panels.vue">Panels</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="modal.vue">Modal</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="tooltipandpopover.vue"
                                    >Tooltip and popover</a
                                  >
                                </li>
                                <li aria-haspopup="true">
                                  <a href="progress.vue">Progress</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="carousel.vue">Carousels</a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12 col-xs-12 link-list">
                              <ul>
                                <li aria-haspopup="true">
                                  <a href="maps.vue">Maps</a>
                                </li>
                                <li>
                                  <h3 class="fs-14 font-weight-bold mb-1">
                                    Tables
                                  </h3>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="tables.vue">Default table</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="datatable.vue"> Data Tables</a>
                                </li>
                                <li>
                                  <h3 class="fs-14 font-weight-bold mb-1 mt-3">
                                    Forms
                                  </h3>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="form_elements.vue">Form Elements</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="form_wizard.vue">Form Wizard</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="wysiwyag.vue">Form Editor</a>
                                </li>
                                <li>
                                  <h3 class="fs-14 font-weight-bold mb-1 mt-3">
                                    Calendar
                                  </h3>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="calendar.vue">Default calendar</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="calendar2.vue">Full calendar</a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3 col-md-12 col-xs-12 link-list">
                              <ul>
                                <li>
                                  <h3 class="fs-14 font-weight-bold mb-3">
                                    Error Pages
                                  </h3>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="a400.vue">400 Error</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="a401.vue">401 Error</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="a403.vue">403 Error</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="a404.vue">404 Error</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="a500.vue">500 Error</a>
                                </li>
                                <li aria-haspopup="true">
                                  <a href="a503.vue">503 Error</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon"
                      ><i class="fe fe-layers"></i>Advanced UI
                      <i class="fa fa-angle-down horizontal-icon"></i
                    ></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true">
                        <a href="chat.vue"> Default Chat</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="notify.vue">Notifications</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="sweetalert.vue">Sweet alerts</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="rangeslider.vue">Range slider</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="scroll.vue">Content Scroll bar</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="counters.vue">Counters</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="loaders.vue">Loaders</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="time_line.vue">Time Line</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="rating.vue">Rating</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="accordion.vue">Accordions</a>
                      </li>
                      <li aria-haspopup="true"><a href="tabs.vue"> Tabs</a></li>
                      <li aria-haspopup="true">
                        <a href="footers.vue">Footers</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="crypto_currencies.vue">Crypto-currencies</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="users_list.vue">User List</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="search.vue">Search page</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon"
                      ><i class="fe fe-compass"></i> Icons
                      <i class="fa fa-angle-down horizontal-icon"></i
                    ></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true">
                        <a href="icons.vue">Font Awesome</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons2.vue">Material Design Icons</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons3.vue">Simple Line Icons</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons4.vue">Feather Icons</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons5.vue">Ionic Icons</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons6.vue">Flag Icons</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons7.vue">pe7 Icons</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons8.vue">Themify Icons</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons9.vue">Typicons Icons</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="icons10.vue">Weather Icons</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon"
                      ><i class="fe fe-briefcase"></i> Pages
                      <i class="fa fa-angle-down horizontal-icon"></i
                    ></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true" class="sub-menu-sub">
                        <a href="#">Profile</a>
                        <ul class="sub-menu">
                          <li aria-haspopup="true">
                            <a href="profile.vue"> Profile </a>
                          </li>
                          <li aria-haspopup="true">
                            <a href="editprofile.vue">Edit Profile</a>
                          </li>
                        </ul>
                      </li>
                      <li aria-haspopup="true" class="sub-menu-sub">
                        <a href="#">Email</a>
                        <ul class="sub-menu">
                          <li aria-haspopup="true">
                            <a href="email.vue">Email</a>
                          </li>
                          <li aria-haspopup="true">
                            <a href="emailservices.vue">Email Inbox</a>
                          </li>
                        </ul>
                      </li>
                      <li aria-haspopup="true">
                        <a href="gallery.vue">Gallery</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="about.vue">About Company</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="services.vue">Services</a>
                      </li>
                      <li aria-haspopup="true"><a href="faq.vue">FAQS</a></li>
                      <li aria-haspopup="true">
                        <a href="terms.vue">Terms and Conditions</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="empty.vue">Empty Page</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="construction.vue">Under Construction</a>
                      </li>
                      <li aria-haspopup="true"><a href="blog.vue">Blog</a></li>
                      <li aria-haspopup="true">
                        <a href="invoice.vue">Invoice</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="pricing.vue">Pricing Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon"
                      ><i class="fe fe-shopping-cart"></i>E-Commerce
                      <i class="fa fa-angle-down horizontal-icon"></i
                    ></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true">
                        <a href="product.vue"> Products</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="product_details.vue">Product Details</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="cart.vue">Shopping Cart</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" class="sub-icon"
                      ><i class="fe fe-unlock"></i>Custom
                      <i class="fa fa-angle-down horizontal-icon"></i
                    ></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true">
                        <a href="login.vue">Login</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="register.vue">Register</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="forgot_password.vue">Forgot Password</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="lockscreen.vue">Lock screen</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <!--Nav-->
            </div>
          </div>

          <!-- Right-sidebar-->
          <div class="sidebar sidebar-right sidebar-animate">
            <div class="tab-menu-heading siderbar-tabs border-0">
              <div class="tabs-menu">
                <!-- Tabs -->
                <ul class="nav panel-tabs">
                  <li class="">
                    <a href="#tab1" class="active" data-toggle="tab">Chat</a>
                  </li>
                  <li><a href="#tab2" data-toggle="tab">Activity</a></li>
                  <li><a href="#tab3" data-toggle="tab">Todo</a></li>
                </ul>
              </div>
            </div>
            <div class="panel-body tabs-menu-body side-tab-body p-0 border-0">
              <div class="tab-content border-top">
                <div class="tab-pane active" id="tab1">
                  <div class="chat">
                    <div class="contacts_card">
                      <div class="input-group p-3">
                        <input
                          type="text"
                          placeholder="Search..."
                          class="form-control search"
                        />
                        <div class="input-group-prepend">
                          <span class="input-group-text search_btn"
                            ><i class="fa fa-search"></i
                          ></span>
                        </div>
                      </div>
                      <ul class="contacts mb-0">
                        <li>
                          <div class="d-flex bd-highlight">
                            <div class="img_cont">
                              <img
                                src="../../assets/images/users/male/3.jpg"
                                class="rounded-circle user_img"
                                alt="img"
                              />
                              <span class="online_icon"></span>
                            </div>
                            <div class="user_info">
                              <h6 class="mt-1 mb-0">Maryam Naz</h6>
                              <small class="text-muted">Maryam is online</small>
                            </div>
                            <div
                              class="float-right text-right ml-auto mt-auto mb-auto"
                            >
                              <small>01-02-2019</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex bd-highlight">
                            <div class="img_cont">
                              <img
                                src="../../assets/images/users/female/1.jpg"
                                class="rounded-circle user_img"
                                alt="img"
                              />
                            </div>
                            <div class="user_info">
                              <h6 class="mt-1 mb-0">Sahar Darya</h6>
                              <small class="text-muted"
                                >Sahar left 7 mins ago</small
                              >
                            </div>
                            <div
                              class="float-right text-right ml-auto mt-auto mb-auto"
                            >
                              <small>01-02-2019</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex bd-highlight">
                            <div class="img_cont">
                              <img
                                src="../../assets/images/users/female/9.jpg"
                                class="rounded-circle user_img"
                                alt="img"
                              />
                              <span class="online_icon"></span>
                            </div>
                            <div class="user_info">
                              <h6 class="mt-1 mb-0">Maryam Naz</h6>
                              <small class="text-muted">Maryam is online</small>
                            </div>
                            <div
                              class="float-right text-right ml-auto mt-auto mb-auto"
                            >
                              <small>01-02-2019</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex bd-highlight">
                            <div class="img_cont">
                              <img
                                src="../../assets/images/users/female/10.jpg"
                                class="rounded-circle user_img"
                                alt="img"
                              />
                            </div>
                            <div class="user_info">
                              <h6 class="mt-1 mb-0">Yolduz Rafi</h6>
                              <small class="text-muted">Yolduz is online</small>
                            </div>
                            <div
                              class="float-right text-right ml-auto mt-auto mb-auto"
                            >
                              <small>02-02-2019</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex bd-highlight">
                            <div class="img_cont">
                              <img
                                src="../../assets/images/users/male/5.jpg"
                                class="rounded-circle user_img"
                                alt="img"
                              />
                              <span class="online_icon"></span>
                            </div>
                            <div class="user_info">
                              <h6 class="mt-1 mb-0">Nargis Hawa</h6>
                              <small class="text-muted"
                                >Nargis left 30 mins ago</small
                              >
                            </div>
                            <div
                              class="float-right text-right ml-auto mt-auto mb-auto"
                            >
                              <small>02-02-2019</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex bd-highlight">
                            <div class="img_cont">
                              <img
                                src="../../assets/images/users/male/7.jpg"
                                class="rounded-circle user_img"
                                alt="img"
                              />
                              <span class="online_icon"></span>
                            </div>
                            <div class="user_info">
                              <h6 class="mt-1 mb-0">Khadija Mehr</h6>
                              <small class="text-muted"
                                >Khadija left 50 mins ago</small
                              >
                            </div>
                            <div
                              class="float-right text-right ml-auto mt-auto mb-auto"
                            >
                              <small>03-02-2019</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex bd-highlight">
                            <div class="img_cont">
                              <img
                                src="../../assets/images/users/female/8.jpg"
                                class="rounded-circle user_img"
                                alt="img"
                              />
                            </div>
                            <div class="user_info">
                              <h6 class="mt-1 mb-0">Khadija Mehr</h6>
                              <small class="text-muted"
                                >Khadija left 50 mins ago</small
                              >
                            </div>
                            <div
                              class="float-right text-right ml-auto mt-auto mb-auto"
                            >
                              <small>03-02-2019</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab2">
                  <div class="list d-flex align-items-center border-bottom p-4">
                    <div class="">
                      <span class="avatar bg-primary brround avatar-md"
                        >CH</span
                      >
                    </div>
                    <div class="wrapper w-100 ml-3">
                      <p class="mb-0 d-flex">
                        <b>New Websites is Created</b>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <i class="mdi mdi-clock text-muted mr-1"></i>
                          <small class="text-muted ml-auto">30 mins ago</small>
                          <p class="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom p-4">
                    <div class="">
                      <span class="avatar bg-danger brround avatar-md">N</span>
                    </div>
                    <div class="wrapper w-100 ml-3">
                      <p class="mb-0 d-flex">
                        <b>Prepare For the Next Project</b>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <i class="mdi mdi-clock text-muted mr-1"></i>
                          <small class="text-muted ml-auto">2 hours ago</small>
                          <p class="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom p-4">
                    <div class="">
                      <span class="avatar bg-info brround avatar-md">S</span>
                    </div>
                    <div class="wrapper w-100 ml-3">
                      <p class="mb-0 d-flex">
                        <b>Decide the live Discussion Time</b>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <i class="mdi mdi-clock text-muted mr-1"></i>
                          <small class="text-muted ml-auto">3 hours ago</small>
                          <p class="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom p-4">
                    <div class="">
                      <span class="avatar bg-warning brround avatar-md">K</span>
                    </div>
                    <div class="wrapper w-100 ml-3">
                      <p class="mb-0 d-flex">
                        <b>Team Review meeting at yesterday at 3:00 pm</b>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <i class="mdi mdi-clock text-muted mr-1"></i>
                          <small class="text-muted ml-auto">4 hours ago</small>
                          <p class="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom p-4">
                    <div class="">
                      <span class="avatar bg-success brround avatar-md">R</span>
                    </div>
                    <div class="wrapper w-100 ml-3">
                      <p class="mb-0 d-flex">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <i class="mdi mdi-clock text-muted mr-1"></i>
                          <small class="text-muted ml-auto">1 days ago</small>
                          <p class="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom p-4">
                    <div class="">
                      <span class="avatar bg-pink brround avatar-md">MS</span>
                    </div>
                    <div class="wrapper w-100 ml-3">
                      <p class="mb-0 d-flex">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <i class="mdi mdi-clock text-muted mr-1"></i>
                          <small class="text-muted ml-auto">1 days ago</small>
                          <p class="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list d-flex align-items-center border-bottom p-4">
                    <div class="">
                      <span class="avatar bg-purple brround avatar-md">L</span>
                    </div>
                    <div class="wrapper w-100 ml-3">
                      <p class="mb-0 d-flex">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <i class="mdi mdi-clock text-muted mr-1"></i>
                          <small class="text-muted ml-auto"
                            >45 mintues ago</small
                          >
                          <p class="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list d-flex align-items-center p-4">
                    <div class="">
                      <span class="avatar bg-blue brround avatar-md">U</span>
                    </div>
                    <div class="wrapper w-100 ml-3">
                      <p class="mb-0 d-flex">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <i class="mdi mdi-clock text-muted mr-1"></i>
                          <small class="text-muted ml-auto">2 days ago</small>
                          <p class="mb-0"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab3">
                  <div class="">
                    <div class="d-flex p-3">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox1"
                          value="option1"
                          checked=""
                        />
                        <span class="custom-control-label">Do Even More..</span>
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                          checked=""
                        />
                        <span class="custom-control-label">Find an idea.</span>
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox3"
                          value="option3"
                          checked=""
                        />
                        <span class="custom-control-label"
                          >Hangout with friends</span
                        >
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox4"
                          value="option4"
                        />
                        <span class="custom-control-label"
                          >Do Something else</span
                        >
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox5"
                          value="option5"
                        />
                        <span class="custom-control-label"
                          >Eat healthy, Eat Fresh..</span
                        >
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox6"
                          value="option6"
                          checked=""
                        />
                        <span class="custom-control-label"
                          >Finsh something more..</span
                        >
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox7"
                          value="option7"
                          checked=""
                        />
                        <span class="custom-control-label"
                          >Do something more</span
                        >
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox8"
                          value="option8"
                        />
                        <span class="custom-control-label"
                          >Updated more files</span
                        >
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox9"
                          value="option9"
                        />
                        <span class="custom-control-label">System updated</span>
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="d-flex p-3 border-top border-bottom">
                      <label class="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="example-checkbox10"
                          value="option10"
                        />
                        <span class="custom-control-label"
                          >Settings Changings...</span
                        >
                      </label>
                      <span class="ml-auto">
                        <i
                          class="si si-pencil text-primary mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Edit"
                        ></i>
                        <i
                          class="si si-trash text-danger mr-2"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Delete"
                        ></i>
                      </span>
                    </div>
                    <div class="text-center pt-5">
                      <a href="#" class="btn btn-primary">Upgrade more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Rightsidebar-->
          <!--Footer-->
        </div>
      </div>
    </body>
  </vue>
</template>


		<script src="../../assets/js/jquery-3.4.1.min.js"></script>


		<script src="../../assets/plugins/bootstrap/js/popper.min.js"></script>
		<script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>


		<script src="../../assets/js/jquery.sparkline.min.js"></script>


		<script src="../../assets/js/circle-progress.min.js"></script>


		<script src="../../assets/plugins/rating/jquery.rating-stars.js"></script>

		<script src="../../assets/plugins/moment/moment.min.js"></script>


		<script src="../../assets/plugins/bootstrap-daterangepicker/daterangepicker.js"></script>


		<script src="../../assets/plugins/horizontal-menu/horizontal-menu.js"></script>


		<script src="../../assets/js/sticky.js"></script>


		<script src="../../assets/plugins/p-scrollbar/p-scrollbar.js"></script>
		<script src="../../assets/plugins/p-scrollbar/p-scrollbar-hormenu.js"></script>


		<script src="../../assets/plugins/peitychart/jquery.peity.min.js"></script>
		<script src="../../assets/plugins/peitychart/peitychart.init.js"></script>


		<script src="../../assets/plugins/sidebar/sidebar.js"></script>


		<script src="../../assets/plugins/chart/chart.bundle.js"></script>
		<script src="../../assets/plugins/chart/utils.js"></script>


		<script src="../../assets/plugins/morris/raphael-min.js"></script>
		<script src="../../assets/plugins/morris/morris.js"></script>


		<script src="../../assets/plugins/counters/jquery.missofis-countdown.js"></script>
		<script src="../../assets/plugins/counters/counter.js"></script>


		<script src="../../assets/js/index1.js"></script>


		<script src="../../assets/js/custom.js"></script>



<script>
import despesas from "../despesas/despesas.vue"
import receita from "../receita/receita.vue"
import intermediorotas from "../intermediorotas.vue"
import App from "./App.vue";
import novofooter from "./novofooter.vue";
import novomenu from "./novomenu.vue";
import modal from "./modal.vue";
import about from "./about.vue";
import accordion from "./accordion.vue";
import alerts from "./alerts.vue";
import avatars from "./avatars.vue";
import badge from "./badge.vue";
import blog from "./blog.vue";
import breadcrumbs from "./breadcrumbs.vue";
import buttons from "./buttons.vue";
import calendar from "./calendar.vue";
import calendar2 from "./calendar2.vue";
import cards_image from "./cards-image.vue";
import cards from "./cards.vue";
import carousel from "./carousel.vue";
import cart from "./cart.vue";
import chat from "./chat.vue";
import colors from "./colors.vue";
import construction from "./construction.vue";
import crypto_currencies from "./crypto-currencies.vue";
import dropdown from "./dropdown.vue";
import editprofile from "./editprofile.vue";
import email from "./email.vue";
import emailservices from "./emailservices.vue";
import empty from "./empty.vue";
import faq from "./faq.vue";
import footers from "./footers.vue";
import forgot_password from "./forgot-password.vue";
import form_elements from "./form-elements.vue";
import form_wizard from "./form-wizard.vue";
import gallery from "./gallery.vue";
import icons from "./icons.vue";
import icons2 from "./icons2.vue";
import icons3 from "./icons3.vue";
import icons4 from "./icons4.vue";
import icons5 from "./icons5.vue";
import icons6 from "./icons6.vue";
import icons7 from "./icons7.vue";
import icons8 from "./icons8.vue";
import icons9 from "./icons9.vue";
import icons10 from "./icons10.vue";
import index from "./index.vue";
import index2 from "./index2.vue";
import index3 from "./index3.vue";
import index4 from "./index4.vue";
import index5 from "./index5.vue";
import invoice from "./invoice.vue";
import jumbotron from "./jumbotron.vue";
import list from "./list.vue";
import loaders from "./loaders.vue";
import lockscreen from "./lockscreen.vue";
import login from "./login.vue";
import maps from "./maps.vue";
import mediaobject from "./mediaobject.vue";

import navigation from "./navigation.vue";
import notify from "./notify.vue";
import pagination from "./pagination.vue";
import panels from "./panels.vue";
import pricing from "./pricing.vue";
import product_details from "./product-details.vue";
import product from "./product.vue";
import profile from "./profile.vue";
import progress from "./progress.vue";
import rangeslider from "./rangeslider.vue";
import rating from "./rating.vue";
import register from "./register.vue";
import scroll from "./scroll.vue";
import search from "./search.vue";
import services from "./services.vue";
import sweetalert from "./sweetalert.vue";
import tables from "./tables.vue";
import tabs from "./tabs.vue";
import tags from "./tags.vue";
import terms from "./terms.vue";
import thumbnails from "./thumbnails.vue";
import typography from "./typography.vue";
import users_list from "./users-list.vue";
import widgets from "./widgets.vue";
import wysiwyag from "./wysiwyag.vue";
import a400 from "./a400.vue";
import a401 from "./a401.vue";
import a403 from "./a403.vue";
import a404 from "./a404.vue";
import a500 from "./a500.vue";
import a503 from "./a503.vue";
import chart_chartist from "./chart-chartist.vue";
import chart_dygraph from "./chart-dygraph.vue";
import chart_echart from "./chart-echart.vue";
import chart_flot from "./chart-flot.vue";
import chart_js from "./chart-js.vue";
import chart_morris from "./chart-morris.vue";
import chart_nvd3 from "./chart-nvd3.vue";
import chart_peity from "./chart-peity.vue";
import counters from "./counters.vue";
import datatable from "./datatable.vue";
import time_line from "./time-line.vue";
import tooltipandpopover from "./tooltipandpopover.vue";

export default {
  name: "novomenu",
  components: {
    despesas,
    receita,
    intermediorotas,
    App,
    novofooter,
    novomenu,
    modal,
    about,
    accordion,
    alerts,
    avatars,
    badge,
    blog,
    breadcrumbs,
    buttons,
    calendar,
    calendar2,
    cards_image,
    cards,
    carousel,
    cart,
    chat,
    colors,
    construction,
    crypto_currencies,
    dropdown,
    editprofile,
    email,
    emailservices,
    empty,
    faq,
    footers,
    forgot_password,
    form_elements,
    form_wizard,
    gallery,
    icons,
    icons2,
    icons3,
    icons4,
    icons5,
    icons6,
    icons7,
    icons8,
    icons9,
    icons10,
    index,
    index2,
    index3,
    index4,
    index5,
    invoice,
    jumbotron,
    list,
    loaders,
    lockscreen,
    login,
    maps,
    mediaobject,
    navigation,
    notify,
    pagination,
    panels,
    pricing,
    product_details,
    product,
    profile,
    progress,
    rangeslider,
    rating,
    register,
    scroll,
    search,
    services,
    sweetalert,
    tables,
    tabs,
    tags,
    terms,
    thumbnails,
    typography,
    users_list,
    widgets,
    wysiwyag,
    a400,
    a401,
    a403,
    a404,
    a500,
    a503,
    chart_chartist,
    chart_dygraph,
    chart_echart,
    chart_flot,
    chart_js,
    chart_morris,
    chart_nvd3,
    chart_peity,
    counters,
    datatable,
    time_line,
    tooltipandpopover,
  },
};
</script>

<style>
</style>



<script>
 export default {
  name: 'novomenu',
  data () {
    return{

    }
  }
}
</script>


<style>

/* @import './../../assets/css/skin-modes.css';
@import './../../assets/css/icons.css';
@import './../../assets/css/style.css';
@import './../../assets/css/dark-style.css';
@import './../../assets/css/morris.css';
@import  './../../assets/css/sidebar.css';
@import  './../../assets/css/horizontal-menu.css';
@import './../../assets/css/p-scrollbar.css';
@import './../../assets/css/daterangepicker.css'; */


</style>
