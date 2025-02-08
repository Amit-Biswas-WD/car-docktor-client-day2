const Footer = () => {
  return (
    <footer className="footer sm:flex bg-[#151515] text-white p-10 flex-wrap justify-between">
      <aside>
        <img
          className="w-16 h-auto"
          src="https://i.ibb.co/20KWn32G/Screenshot-4.png"
          alt="Brand Logo"
        />
        <p>
          Your Company is a leading tech firm specializing in <br />
          software solutions and web development.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a href="#" className="link link-hover">
          Home
        </a>
        <a href="#" className="link link-hover">
          Service
        </a>
        <a href="#" className="link link-hover">
          Contact
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a href="#" className="link link-hover">
          Why Choose Us
        </a>
        <a href="#" className="link link-hover">
          Our Team
        </a>
        <a href="#" className="link link-hover">
          Testimonials
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a href="#" className="link link-hover">
          Terms of Use
        </a>
        <a href="#" className="link link-hover">
          Privacy Policy
        </a>
        <a href="#" className="link link-hover">
          Cookie Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
