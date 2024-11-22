import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            {/* Logo and Description Section */}
            <div className="col-md-4 col-sm-12 mb-3 text-center text-md-start">
              <h1 className="footer-logo d-flex ">
                <h5 className="shadow p-2 mb-4 bg-body-primary rounded">O</h5>
                <h5 className="shadow p-2 mb-4 bg-body-primary rounded">r</h5>
                <h5 className="shadow p-2 mb-4 bg-body-primary rounded">c</h5>
                <h5 className="shadow p-2 mb-4 bg-body-primary rounded">h</h5>
                <h5 className="shadow p-2 mb-4 bg-body-primary rounded">i</h5>
                <h5 className="shadow p-2 mb-4 bg-body-primary rounded">D</h5>
                <h5 className="shadow p-2 mb-4 bg-body-primary rounded">o</h5>
              </h1>
              <h6 className="footer-description">
                OrchiDo.COM is the Nr. 1 source for free VIDEOS. Millions of
                movies aggregated from hundreds of sites, closely monitored to
                give you a safe and pleasurable experience!
              </h6>
            </div>
            {/* Support Section */}
            <div className="col-md-2 col-sm-6 mb-3">
              <h5 className="footer-heading">Support</h5>
              <ul className="footer-links list-unstyled mb-2">
                <li className="mb-2">
                  <a href="#" className="text-light">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Help Us Improve
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Contact Us
                  </a>
                </li>
              </ul>
            <div>
              <h5>Advertisers</h5>
              <ul className="footer-links list-unstyled">
             
                <a href="#" className="text-light">
                Buy Traffic / Get Listed
                  </a>
              </ul>
            </div>
            </div>
            {/* Legal Section */}
            <div className="col-md-2 col-sm-6 mb-3">
              <h5 className="footer-heading">Legal</h5>
              <ul className="footer-links list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Privacy Statement
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    DMCAa / Copyright
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Digital Services Act
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Notice and Action Policy (Link Removal)
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Acceptable Content Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Digital Services Act
                  </a>
                </li>
              </ul>
            </div>
            {/* Parents Section */}
            <div className="col-md-4 col-sm-12 text-center text-md-start">
              <h5 className="footer-heading">Parents</h5>
              <p className="footer-description">
                Qorno.com uses the (RTA) website label to better enable parental
                filtering. content and block access to this site by using
                parental controls.
              </p>
              <div className="footer-icons">
                <img src="asacp.png" alt="ASACP" className="img-fluid" />
                <img src="rta.png" alt="RTA" className="img-fluid" />
                <img
                  src="pineapple.png"
                  alt="Pineapple Support"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="text-center mt-3">
            <p>© 2024 OrchiDo.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
