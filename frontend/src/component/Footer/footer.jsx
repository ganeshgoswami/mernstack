import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-md-4 col-sm-12 mb-3 text-center text-md-start">
              {/* <div className="ms-1 d-flex">
                <h3 className="text-danger">
                  <b>X </b>
                  Master
                </h3>
              </div> */}

              <h6 className="footer-description">
                Xmaster.COM is the Nr. 1 source for free VIDEOS. Millions of
                movies aggregated from hundreds of sites, closely monitored to
                give you a safe and pleasurable experience!
              </h6>
            </div>

            <div className="col-md-2 col-sm-6 mb-3">
              <h4 className="">Support</h4>
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
                <h4>Advertisers</h4>
                <ul className="footer-links list-unstyled">
                  <a href="#" className="text-light">
                    Buy Traffic / Get Listed
                  </a>
                </ul>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-3">
              <h4 className="">Legal</h4>
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
                    DMCAa
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

            <div className="col-md-4 col-sm-12 text-center text-md-start">
              <h4 className="">Parents</h4>
              <p className="footer-description">
                XMaster.com uses the (RTA) website label to better enable parental
                filtering. content and block access to this site by using
                parental controls.
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
