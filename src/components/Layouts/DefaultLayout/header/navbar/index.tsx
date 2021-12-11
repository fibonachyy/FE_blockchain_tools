import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar top-navbar navbar-expand-md navbar-light">
      <div className="navbar-header">
        <a className="navbar-brand" href="index.html">
          <b>
            <img src="/assets/images/logo.png" alt="homepage" className="dark-logo" />
          </b>
          <span>
            <img
              src="assets/images/logo-text.png"
              alt="homepage"
              className="dark-logo"
            />
          </span>
        </a>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto mt-md-0">
          <li className="nav-item">
            {' '}
            <a
              className="nav-link toggle-nav hidden-md-up text-muted  "
              href="javascript:void(0)"
            >
              <i className="mdi mdi-menu"></i>
            </a>{' '}
          </li>
          <li className="nav-item m-l-10">
            {' '}
            <a
              className="nav-link sidebartoggle hidden-sm-down text-muted  "
              href="javascript:void(0)"
            >
              <i className="ti-menu"></i>
            </a>{' '}
          </li>
          <li className="nav-item dropdown mega-menu">
            {' '}
            <a
              className="nav-link dropdown-toggle text-muted  "
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="ti-wallet m-r-5"></i> Wallet
            </a>
            <div className="dropdown-menu animated slideInDown">
              <ul className="mega-menu-menu row">
                <li className="col-lg-3  m-b-30">
                  <h4 className="m-b-20">Bitcoin BTC</h4>
                  <ul className="list-style-none">
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="col-lg-3 col-xlg-3 m-b-30">
                  <h4 className="m-b-20">Bitcoin BTC</h4>
                  <ul className="list-style-none">
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="col-lg-3 col-xlg-3 m-b-30">
                  <h4 className="m-b-20">Bitcoin BTC</h4>
                  <ul className="list-style-none">
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="col-lg-3 col-xlg-3 m-b-30">
                  <h4 className="m-b-20">Bitcoin BTC</h4>
                  <ul className="list-style-none">
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="cc BTC"></i> Bitcoin Transaction
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav my-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-muted text-muted  "
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {' '}
              <i className="fa fa-bell"></i>
              <div className="notify">
                {' '}
                <span className="heartbit"></span>{' '}
                <span className="point"></span>{' '}
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right mailbox animated slideInRight">
              <ul>
                <li>
                  <div className="drop-title">Notifications</div>
                </li>
                <li>
                  <div className="header-notify">
                    <a href="#">
                      <i className="cc BTC m-r-10 f-s-40" title="BTC"></i>

                      <div className="notification-contnet">
                        <h5>All Transaction BTC</h5>{' '}
                        <span className="mail-desc">
                          Just see the my new admin!
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <i className="cc LTC m-r-10 f-s-40" title="BTC"></i>
                      <div className="notification-contnet">
                        <h5>This is LTC coin</h5>{' '}
                        <span className="mail-desc">
                          Just a reminder that you have event
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <i className="cc DASH m-r-10 f-s-40" title="BTC"></i>
                      <div className="notification-contnet">
                        <h5>This is DASH coin</h5>{' '}
                        <span className="mail-desc">
                          You can customize this template as you want
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <i className="cc XRP m-r-10 f-s-40" title="BTC"></i>
                      <div className="notification-contnet">
                        <h5>This is LTC coin</h5>{' '}
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className="nav-link text-center"
                    href="javascript:void(0);"
                  >
                    {' '}
                    Check all notifications{' '}
                    <i className="fa fa-angle-right"></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-muted  "
              href="#"
              id="2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {' '}
              <i className="fa fa-envelope"></i>
              <div className="notify">
                {' '}
                <span className="heartbit"></span>{' '}
                <span className="point"></span>{' '}
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right mailbox animated slideInRight"
              aria-labelledby="2"
            >
              <ul>
                <li>
                  <div className="drop-title">You have 4 new messages</div>
                </li>
                <li>
                  <div className="header-notify">
                    <a href="#">
                      <div className="notification-contnet">
                        <h5>Michael Qin</h5>{' '}
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notification-contnet">
                        <h5>John Doe</h5>{' '}
                        <span className="mail-desc">
                          I've sung a song! See you at
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notification-contnet">
                        <h5>Mr. John</h5>{' '}
                        <span className="mail-desc">I am a singer!</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notification-contnet">
                        <h5>Michael Qin</h5>{' '}
                        <span className="mail-desc">
                          Just see the my admin!
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className="nav-link text-center"
                    href="javascript:void(0);"
                  >
                    {' '}
                    See all e-Mails <i className="fa fa-angle-right"></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-muted  "
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right animated slideInRight">
              <ul className="dropdown-user">
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#"> Profile</a>
                </li>
                <li>
                  <a href="#"> Balance</a>
                </li>
                <li>
                  <a href="#"> Inbox</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#"> Setting</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#"> Logout</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
