import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-8 mb-3 text-center text-md-start">
              <h6 >
              <b className="text-danger fs-5">b</b>adwap.fun <span className="fw-light fs-6">is the NO. 1 source for free Fucking VIDEOS.
                movies aggregated from hundreds of sites, closely monitored to
                give you a safe and pleasurable experience!</span> 
              </h6>
            </div>

            <div className="col-md-2 col-sm-6 mb-3">
              <h4 >Support</h4>
              <ul className="list-unstyled mb-2">
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
                  <Link className="text-light" to={"/our-network"}>Our Network</Link>
                </ul>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-3">
              <h4 >Legal</h4>
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
               
              </ul>
            </div>

            <div className="col-md-4 col-sm-12 text-center text-md-start">
              <h4 >Parents</h4>
              <p className="fs-6">
                <b className="text-danger fs-5">b</b>adwap.fun <span className="fw-light">uses the (RTA) website label to better enable
                parental filtering. content and block access to this site by
                using parental controls.</span> 
              </p>
            </div>
          </div>

          <div className="text-center mt-3">
            <p>© 2024 badwap.fun All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
