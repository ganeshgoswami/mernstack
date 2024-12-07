import { Link } from "react-router-dom";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mb-3 text-center text-md-start">
              <h6 className="footer-description">
                Xmaster.COM is the Nr. 1 sou  rce for free VIDEOS. Millions of
                movies aggregated from hundreds of sites, closely monitored to
                give you a safe and pleasurable experience!
              </h6>
            </div>

            <div className="col-md-2 col-sm-6 mb-3">
              <h4 className="">Support</h4>
              <ul className="footer-links list-unstyled mb-2">
                <li className="mb-2">
                  <Link className="text-light">FAQ</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-light">Help Us Improve</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-light">Contact Us</Link>
                </li>
              </ul>
              <div>
                <h4>Advertisers</h4>
                <ul className="footer-links list-unstyled">
                  <Link className="text-light">Buy Traffic / Get Listed</Link>
                </ul>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-3">
              <h4 className="">Legal</h4>
              <ul className="footer-links list-unstyled">
                <li className="mb-2">
                  <Link className="text-light">Terms of Service</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-light">Privacy Statement</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-light">DMCAa</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-light">Digital Services Act</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-light">
                    Notice and Action Policy (Link Removal)
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-light">Acceptable Content Policy</Link>
                </li>
                <li className="mb-2">
                  <Link className="text-light">Digital Services Act</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-sm-12 text-center text-md-start">
              <h4 className="">Parents</h4>
              <p className="footer-description">
                XMaster.com uses the (RTA) website label to better enable
                parental filtering. content and block access to this site by
                using parental controls.
              </p>
            </div>
          </div>

          <div className="text-center mt-3">
            <p>© 2024 XMaster.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
