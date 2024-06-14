import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { menuLinks, socialLinks } from '../data';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {menuLinks.map((menuLink) => {
              const { id, url, text } = menuLink;
              return (
                <li key={id}>
                  <a href={url} className="link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social-icons">
          {socialLinks.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
