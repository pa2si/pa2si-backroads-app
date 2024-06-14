import { menuLinks, socialLinks } from '../data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {menuLinks.map((menuLink) => {
          const { id, url, text } = menuLink;
          return (
            <li key={id}>
              <a href={url} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((sociallink) => {
          const { id, url, icon } = sociallink;
          return (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i>{icon}</i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
