function Footer() {
  return (
    <footer className="footer p-6 bg-[#000a19] flex flex-col lg:flex-row justify-between lg:items-start items-center">
      <div className="flex flex-col gap-2 mb-6 lg:mb-0 text-white items-center lg:items-start">
        <p className="text-center lg:text-left">
          Let's Chat.
          <br />
          Providing real-time chatting experience
        </p>
      </div>
      <nav className="flex flex-col mb-6 lg:mb-0 items-center lg:items-start">
        <h6 className="footer-title text-lg font-bold text-white text-center lg:text-left">Services</h6>
        <a className="link link-hover text-white hover:text-[#4e44e3] cursor-pointer text-center lg:text-left">Branding</a>
        <a className="link link-hover text-white hover:text-[#4e44e3] cursor-pointer text-center lg:text-left">Advertisement</a>
      </nav>
      <nav className="flex flex-col mb-6 lg:mb-0 items-center lg:items-start">
        <h6 className="footer-title text-lg font-bold text-white text-center lg:text-left">Company</h6>
        <a className="link link-hover text-white hover:text-[#4e44e3] cursor-pointer text-center lg:text-left">About us</a>
        <a className="link link-hover text-white hover:text-[#4e44e3] cursor-pointer text-center lg:text-left">Contact</a>
      </nav>
      <nav className="flex flex-col mb-6 lg:mb-0 items-center lg:items-start">
        <h6 className="footer-title text-lg font-bold text-white text-center lg:text-left">Legal</h6>
        <a className="link link-hover text-white hover:text-[#4e44e3] cursor-pointer text-center lg:text-left">Terms of use</a>
        <a className="link link-hover text-white hover:text-[#4e44e3] cursor-pointer text-center lg:text-left">Privacy policy</a>
      </nav>
    </footer>
  );
}

export default Footer;