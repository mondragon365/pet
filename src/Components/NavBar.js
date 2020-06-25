import React, { useState } from 'react';
import logo from '../Images/logo-black.svg';

const Navbar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar navbar-light">
      <div className="container">
        <a className="navbar-brand py-0" href="/html/index.html" target="_blank"><span style={{ backgroundImage: `url(${logo})` }}></span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar-content">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-1"><a className="nav-link" href="/html/index.html">Adopciones</a></li>
            <li className="nav-item mx-1"><a className="nav-link" href="/html/index.html">Padrinos</a></li>
            <li className="nav-item mx-1"><a className="nav-link" href="/html/index.html">Dona Comida</a></li>
            <li className="nav-item mx-1"><a className="nav-link" href="/html/index.html">Valutario</a></li>
            <li className="nav-item mx-1"><a className="nav-link" href="/html/index.html">Dona Esterilizacion</a></li>
            {/* <li className="nav-item mx-1 dropdown">
            <a className="nav-link dropdown-toggle" id="demos-dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
            <div className="dropdown-menu animated_dropdown shadow-lg" aria-labelledby="demos-dropdown"><a className="dropdown-item" href="/html/demo/demo-basic.html">Basic</a><a className="dropdown-item" href="/html/demo/demo-startup1.html">Startup 1</a><a className="dropdown-item" href="/html/demo/demo-startup2.html">Startup 2</a><a className="dropdown-item" href="/html/demo/demo-startup3.html">Startup 3</a><a className="dropdown-item" href="/html/demo/demo-saas1.html">SaaS 1</a><a className="dropdown-item" href="/html/demo/demo-saas2.html">SaaS 2</a><a className="dropdown-item" href="/html/demo/demo-mobile.html">Mobile</a><a className="dropdown-item" href="/html/demo/demo-meetup.html">Meetup</a></div>
          </li>
          <li className="nav-item mx-1 dropdown">
            <a className="nav-link dropdown-toggle" id="pages-dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
            <div className="dropdown-menu animated_dropdown shadow-lg" aria-labelledby="pages-dropdown"><a className="dropdown-item" href="/html/pages/page-about.html">About</a><a className="dropdown-item" href="/html/pages/page-pricing.html">Pricing 1</a><a className="dropdown-item" href="/html/pages/page-pricing2.html">Pricing 2</a><a className="dropdown-item" href="/html/pages/page-contact-us.html">Contact us</a><a className="dropdown-item" href="/html/pages/page-faq.html">FAQ</a><a className="dropdown-item" href="/html/pages/page-login.html">Login &amp; Register 1</a><a className="dropdown-item" href="/html/pages/page-login2.html">Login &amp; Register 2</a><a className="dropdown-item" href="/html/pages/page-password-recovery.html">Password recovery</a><a className="dropdown-item" href="/html/pages/page-404.html">404 error</a><a className="dropdown-item" href="/html/pages/page-privacy.html">Privacy &amp; terms</a><a className="dropdown-item" href="/html/pages/page-careers.html">Careers</a><a className="dropdown-item" href="/html/pages/page-careers-single.html">Careers page</a><a className="dropdown-item" href="/html/pages/page-apply.html">Apply form</a></div>
          </li>
          <li className="nav-item mx-1 dropdown">
            <a className="nav-link dropdown-toggle" id="blog-dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
            <div className="dropdown-menu animated_dropdown shadow-lg" aria-labelledby="blog-dropdown"><a className="dropdown-item" href="/html/blog/blog-sidebar.html">Blog 1</a><a className="dropdown-item" href="/html/blog/blog-sidebar-article.html">Blog article 1</a><a className="dropdown-item" href="/html/blog/blog-fullwidth.html">Blog 2</a><a className="dropdown-item" href="/html/blog/blog-fullwidth-article.html">Blog article 2</a></div>
          </li>
          <li className="nav-item ml-1 mr-3 dropdown">
            <a className="nav-link dropdown-toggle" id="docs-dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a>
            <div className="dropdown-menu animated_dropdown shadow-lg" aria-labelledby="docs-dropdown"><a className="dropdown-item" href="/html/docs/getting_started/docs-introduction.html">Getting started</a><a className="dropdown-item" href="/html/docs/getting_started/docs-changelog.html">Changelog</a><a className="dropdown-item" href="/html/docs/getting_started/docs-support.html">Support</a><a className="dropdown-item" href="/html/docs/graphics/docs-icons.html">Icons</a></div>
          </li>
          <li className="nav-item mx-2 pt-1"><a className="rounded-pill px-3 btn btn-sm btn-dark" id="buy-button" href="https://themes.getbootstrap.com/product/replacer-2/">Buy</a></li>
          <li className="nav-item mx-1"><button className="nav-link btn btn-link" type="button" data-toggle="modal" data-target="#login-modal"><i className="far fa-user mr-2"></i>Login</button></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
//https://getreplacer.com/html/demo/demo-basic.html