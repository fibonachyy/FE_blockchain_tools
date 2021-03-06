import React, { useState } from "react";
const SidBarItem = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <li>
      <a
        className="has-arrow  "
        onClick={() => setCollapse(!collapse)}
        href="#"
        aria-expanded={collapse}
      >
        <i className="fa fa-tachometer"></i>
        <span className="hide-menu">
          Dashboard{" "}
          <span className="label label-rouded label-primary pull-right">6</span>
        </span>
      </a>
      <ul
        aria-expanded={collapse}
        className={collapse ? "collapsed" : "collapse"}
      >
        <li>
          <a href="index.html">Dashboard 1 </a>
        </li>
        <li>
          <a href="index1.html">Dashboard 2 </a>
        </li>
        <li>
          <a href="index2.html">Dashboard 3 </a>
        </li>
        <li>
          <a href="index3.html">Dashboard 4 </a>
        </li>
        <li>
          <a href="index4.html">Dashboard 5 </a>
        </li>
        <li>
          <a href="index5.html">Dashboard 6 </a>
        </li>
      </ul>
    </li>
  );
};
const Sidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebar-menu">
            <li className="nav-devider"></li>
            <li className="nav-label">Home</li>
            <SidBarItem />
            <li className="nav-label">Layout</li>
            <li>
              {" "}
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-columns"></i>
                <span className="hide-menu">Layout</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="layout-blank.html">Blank</a>
                </li>
                <li>
                  <a href="layout-boxed.html">Boxed</a>
                </li>
                <li>
                  <a href="layout-fix-header.html">Fix Header</a>
                </li>
                <li>
                  <a href="layout-fix-sidebar.html">Fix Sidebar</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Apps &amp; Charts</li>
            <li>
              {" "}
              <a className="has-arrow " href="#" aria-expanded="false">
                <i className="fa fa-envelope"></i>
                <span className="hide-menu">Mailbox</span>
              </a>
              <ul aria-expanded="true" className="collapse">
                <li>
                  <a href="email-compose.html">Compose</a>
                </li>
                <li>
                  <a href="email-read.html">Read</a>
                </li>
                <li>
                  <a href="email-inbox.html">Inbox</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-bar-chart"></i>
                <span className="hide-menu">Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="chart-morris.html">Morris</a>
                </li>
                <li>
                  <a href="chart-chartjs.html">ChartJs</a>
                </li>
                <li>
                  <a href="chart-chartist.html">Chartist </a>
                </li>
                <li>
                  <a href="chart-amchart.html">AmChart</a>
                </li>
                <li>
                  <a href="chart-echart.html">EChart</a>
                </li>
                <li>
                  <a href="chart-sparkline.html">Sparkline</a>
                </li>
                <li>
                  <a href="chart-peity.html">Peity</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Features</li>
            <li>
              {" "}
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-suitcase"></i>
                <span className="hide-menu">
                  Ui Elements{" "}
                  <span className="label label-rouded label-danger pull-right">
                    12
                  </span>
                </span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="ui-alert.html">Alert</a>
                </li>
                <li>
                  <a href="ui-button.html">Button</a>
                </li>
                <li>
                  <a href="ui-dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="ui-progressbar.html">Progressbar</a>
                </li>
                <li>
                  <a href="ui-tab.html">Tab</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="uc-calender.html">Calender</a>
                </li>
                <li>
                  <a href="uc-datamap.html">Datamap</a>
                </li>
                <li>
                  <a href="uc-nestedable.html">Nestedable</a>
                </li>
                <li>
                  <a href="uc-sweetalert.html">Sweetalert</a>
                </li>
                <li>
                  <a href="uc-toastr.html">Toastr</a>
                </li>
                <li>
                  <a href="uc-weather.html">Weather</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-wpforms"></i>
                <span className="hide-menu">Forms</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="form-basic.html">Basic Forms</a>
                </li>
                <li>
                  <a href="form-layout.html">Form Layout</a>
                </li>
                <li>
                  <a href="form-validation.html">Form Validation</a>
                </li>
                <li>
                  <a href="form-editor.html">Editor</a>
                </li>
                <li>
                  <a href="form-dropzone.html">Dropzone</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-table"></i>
                <span className="hide-menu">Tables</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="table-bootstrap.html">Basic Tables</a>
                </li>
                <li>
                  <a href="table-datatable.html">Data Tables</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="ti-wallet m-r-5"></i>
                <span className="hide-menu">Widgets</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="widget.html">Widgets</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">EXTRA</li>
            <li>
              {" "}
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-book"></i>
                <span className="hide-menu">
                  Sample Pages{" "}
                  <span className="label label-rouded label-success pull-right">
                    8
                  </span>
                </span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="#" className="has-arrow">
                    Authentication{" "}
                    <span className="label label-rounded label-success">3</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="page-login.html">Login</a>
                    </li>
                    <li>
                      <a href="page-register.html">Register</a>
                    </li>
                    <li>
                      <a href="page-invoice.html">Invoice</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow">
                    Error Pages
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="page-error-400.html">400</a>
                    </li>
                    <li>
                      <a href="page-error-403.html">403</a>
                    </li>
                    <li>
                      <a href="page-error-404.html">404</a>
                    </li>
                    <li>
                      <a href="page-error-500.html">500</a>
                    </li>
                    <li>
                      <a href="page-error-503.html">503</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-map-marker"></i>
                <span className="hide-menu">Maps</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="map-vector.html">Vector Map</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a className="has-arrow" href="#" aria-expanded="false">
                <i className="fa fa-level-down"></i>
                <span className="hide-menu">Multi level dd</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="#">item 1.1</a>
                </li>
                <li>
                  <a href="#">item 1.2</a>
                </li>
                <li>
                  {" "}
                  <a className="has-arrow" href="#" aria-expanded="false">
                    Menu 1.3
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="#">item 1.3.1</a>
                    </li>
                    <li>
                      <a href="#">item 1.3.2</a>
                    </li>
                    <li>
                      <a href="#">item 1.3.3</a>
                    </li>
                    <li>
                      <a href="#">item 1.3.4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">item 1.4</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
