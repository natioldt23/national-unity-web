import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";


const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link to={href}>{title}</Link>
    </li>
  );
};

LinkItem.propTypes = {
  title: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
const IconItem = ({ icon, href, ariaLabel }) => {
  return (
    <li>
      <Link to={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} alt={ariaLabel}>
        <i className={icon} />
      </Link>
    </li>
  );
};

IconItem.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Footer = () => {
  const { t } = useTranslation()
  const footer = t("footer")

  const links = [
    {
      title: (
        <>
          {footer.terminosCondiciones}
        </>
      ),
      href: "/tyc",
    },
    {
      title: (
        <>
          {footer.contacto}
        </>
      ),
      href: "/contacto",
    },
  ];
  
  const icons = [
    {
      icon: "fab fa-facebook-f",
      href: "https://www.facebook.com/NationalUnityIC/",
      label: "Facebook Logo"
    },
    {
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/nationalunity_seguros/",
      label: "Instagram Logo"
    },
    {
      icon: "fab fa-linkedin-in",
      href: "https://mx.linkedin.com/company/national-unity-insurance-company?trk=ppro_cprof",
      label: "Linkedin Logo"
    },
  ];
  return (
    <div className="bottom-footer lg-pb-20 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
              {links.map((link, index) => (
                <LinkItem key={index} title={link.title} href={link.href} />
              ))}
            </ul>
          </div>
          <div className="col-lg-4 order-lg-2 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
              {icons.map((icon, index) => (
                <IconItem key={index} icon={icon.icon} href={icon.href} ariaLabel={icon.label}/>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 order-lg-1 mt-15">
            <p className="copyright text-center m0">
              Copyright © {new Date().getFullYear()}{" "}
              
                National Unity Insurance Company
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
