import Head from 'next/head'
import Image from 'next/image'
import Script from "next/script";

export default function Home() {
  return (
  
    <div>
    <Head>
	  
		
    </Head>
    
    <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <div className="app-header header-shadow">
                <div className="app-header__logo">
                    <div className="logo-src"></div>
                    <div className="header__pane ms-auto">
                       <div>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
				
				
				 <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>
				
				<div className="app-header__content">
                    <div className="app-header-left">
                        <div className="search-wrapper">
                            <div className="input-holder">
                                <input type="text" className="search-input" placeholder="Type to search" />
                                <button className="search-icon">
                                    <span></span>
                                </button>
                            </div>
                            <button className="btn-close"></button>
                        </div>
                    </div>
                </div>
				
				<div className="app-header-right">
                        <div className="header-dots">
						  <div className="dropdown">
                                <button type="button" data-bs-toggle="dropdown" className="p-0 me-2 btn btn-link">
                                    <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                                        <span className="icon-wrapper-bg bg-focus"></span>
                                        <span className="language-icon opacity-8 flag large DE"></span>
                                    </span>
                                </button>
                                <div tabIndex="-1" role="menu" aria-hidden="true"
                                    className="rm-pointers dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-menu-header">
                                        <div className="dropdown-menu-header-inner pt-4 pb-4 bg-focus">
                                            <div className="menu-header-image opacity-05" style={{backgroundColor: "#44014C" }}></div>
                                            <div className="menu-header-content text-center text-white">
                                                <h6 className="menu-header-subtitle mt-0"> Choose Language</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 tabIndex="-1" className="dropdown-header"> Popular Languages</h6>
                                    <button type="button" tabIndex="0" className="dropdown-item">
                                        <span className="me-3 opacity-8 flag large US"></span>
                                        USA
                                    </button>
                                    <button type="button" tabIndex="0" className="dropdown-item">
                                        <span className="me-3 opacity-8 flag large CH"></span>
                                        Switzerland
                                    </button>
                                    <button type="button" tabIndex="0" className="dropdown-item">
                                        <span className="me-3 opacity-8 flag large FR"></span>
                                        France
                                    </button>
                                    <button type="button" tabIndex="0" className="dropdown-item">
                                        <span className="me-3 opacity-8 flag large ES"></span>
                                        Spain
                                    </button>
                                    <div tabIndex="-1" className="dropdown-divider"></div>
                                    <h6 tabIndex="-1" className="dropdown-header">Others</h6>
                                    <button type="button" tabIndex="0" className="dropdown-item active">
                                        <span className="me-3 opacity-8 flag large DE"></span>
                                        Germany
                                    </button>
                                    <button type="button" tabIndex="0" className="dropdown-item">
                                        <span className="me-3 opacity-8 flag large IT"></span>
                                        Italy
                                    </button>
                                </div>
                          </div>
						
						
						
						
						<div className="header-btn-lg pe-0">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            <a data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                <img  width="42" className="rounded-circle" src="images/avatars/1.jpg" alt="" />
                                                <i className="fa fa-angle-down ms-2 opacity-8"></i>
                                            </a>
                                            <div tabIndex="-1" role="menu" aria-hidden="true"
                                                className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                                <div className="dropdown-menu-header">
                                                    <div className="dropdown-menu-header-inner bg-info">
                                                        <div className="menu-header-image opacity-2" style={{ backgroundImage: "url('images/dropdown-header/city3.jpg')" }} ></div>
                                                        <div className="menu-header-content text-start">
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left me-3">
                                                                        <img width="42" className="rounded-circle"
                                                                            src="images/avatars/1.jpg"  alt="" />
                                                                    </div>
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-heading">Alina Mcloughlin</div>
                                                                        <div className="widget-subheading opacity-8">A short profile description</div>
                                                                    </div>
                                                                    <div className="widget-content-right me-2">
                                                                        <button className="btn-pill btn-shadow btn-shine btn btn-focus">Logout</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                              
                                                <ul className="nav flex-column">
                                                    <li className="nav-item-divider mb-0 nav-item"></li>
                                                </ul>
                                                
                                                <ul className="nav flex-column">
                                                    <li className="nav-item-divider nav-item"></li>
                                                    <li className="nav-item-btn text-center nav-item">
                                                        <button className="btn-wide btn btn-primary btn-sm"> Open Messages</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget-content-left  ms-3 header-user-info">
                                        <div className="widget-heading"> Alina Mclourd</div>
                                        <div className="widget-subheading"> VP People Manager</div>
                                    </div>
                                    <div className="widget-content-right header-user-info ms-3">
                                        <button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                            <i className="fa text-white fa-calendar pe-1 ps-1"></i>
                                        </button>
                                    </div>


                                    
                                </div>
                            </div>
                        </div></div>
			    </div>
				
				
				
			</div>

            <div className="app-main">
                <div className="app-sidebar sidebar-shadow">
                    <div className="app-header__logo">
                        <div className="logo-src"></div>
                        <div className="header__pane ms-auto">
                            <div>
                                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app-header__mobile-menu">
                        <div>
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                            </button>
                        </span>
                    </div>
                    <div className="scrollbar-sidebar">
                        <div className="app-sidebar__inner">
                            <ul className="vertical-nav-menu">
                                <li className="app-sidebar__heading">Menu</li>
                                <li>
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-rocket"></i>
                                        Dashboards
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="/admin/analytics">
                                                <i className="metismenu-icon"></i>
                                                Analytics
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/admin/commerce">
                                                <i className="metismenu-icon"></i>
                                                Commerce
                                            </a>
                                        </li>
                                    </ul>
                                 </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <div className="app-page-title">
                            <div className="page-title-wrapper">
                                <div className="page-title-heading">
                                    <div className="page-title-icon">
                                        <i className="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
                                    </div>
                                    <div>
                                        Regular Tables
                                        <div className="page-title-subheading">Tables are the backbone of almost all web applications.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="main-card mb-3 card">
                                    <div className="card-body">
                                        <h5 className="card-title">Simple table</h5>
                                        <table className="mb-0 table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="main-card mb-3 card">
                                    <div className="card-body">
                                        <h5 className="card-title">Table bordered</h5>
                                        <table className="mb-0 table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

		
		
		
    </div>
    <div className="app-drawer-overlay d-none animated fadeIn"></div>

	  <Script type="text/javaScript"   src="/admin/vendors/jquery/dist/jquery.min.js" />
        <Script type="text/javaScript" src="/admin/vendors/bootstrap/dist/js/bootstrap.bundle.min.js" />
        <Script type="text/javaScript" src="/admin/vendors/moment/moment.js" />
        <Script type="text/javaScript" src="/admin/vendors/metismenu/dist/metisMenu.js" />
        <Script type="text/javaScript" src="/admin/vendors/bootstrap4-toggle/js/bootstrap4-toggle.min.js" />
        <Script type="text/javaScript" src="/admin/vendors/jquery-circle-progress/dist/circle-progress.min.js" />
        <Script type="text/javaScript" src="/admin/vendors/perfect-scrollbar/dist/perfect-scrollbar.min.js" />
        <Script type="text/javaScript" src="/admin/vendors/toastr/build/toastr.min.js" />
	 <Script type="text/javascript"    src="/admin/vendors/jquery.fancytree/dist/jquery.fancytree-all-deps.min.js" />
	    <Script type="text/javascript" src="/admin/js/circle-progress.js" />
        <Script type="text/javascript" src="/admin/js/demo.js" />
        <Script type="text/javascript" src="/admin/js/scrollbar.js" />
        <Script type="text/javascript" src="/admin/js/toastr.js" />
        <Script type="text/javascript" src="/admin/js/treeview.js" />

        <Script type="text/javascript" src="/admin/js/form-components/toggle-switch.js" />
        <Script type="text/javascript" src="/admin/js/app.js" />
	 
	 
    </div>
    
  )
}
