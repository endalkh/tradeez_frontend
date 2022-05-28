import logo from "../assests/images/logo_dark.png";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row footer">
        <div className="col-12 col-md-6">
          <img src={logo} className="footerImage" />
        </div>
        <div className="col-12 col-md-6">
          <div className="footer_links row">
            <div className="links col-12 col-md-4">
              <div className="link">FAQ</div>
              <div className="link">CONTACT</div>
            </div>
            <div className="links col-12 col-md-8">
              <div className="link">SUPPORT</div>
              <div className="link">PRIVACY</div>
              <div className="link">TERMS & CONDITIONS</div>
            </div>
          </div>
          <p>
            Start Your Business With Shopify. Sign Up For Our Annual Plan And
            Get A 10% Discount. Shopify® Is an Easy-To-Use Online Store Builder
            Trusted by Millions of Stores. Mobile Commerce Ready. Fraud
            Prevention. Drop Shipping Integration. 99.99% Average Uptime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
