const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="my-9">
          {/* Flex Container */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3 flex flex-col sm:flex-row gap-8">
              <div className="w-full sm:w-1/2 space-y-5">
                {/* Shop Section */}
                <h3 className="text-white text-lg font-medium">Meseum</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Plan Your Visit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Browse Exhibitions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Objects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Become a Member
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Accessibility Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 space-y-5">
                {/* Company Section */}
                <h3 className="text-white text-lg font-medium">Company</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Who we are
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col sm:flex-row gap-8">
              <div className="w-full sm:w-1/2 space-y-5">
                {/* Account Section */}
                <h3 className="text-white text-lg font-medium">Account</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Manage Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Returns & Exchanges
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Redeem a Gift Card
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 space-y-5">
                {/* Connect Section */}
                <h3 className="text-white text-lg font-medium">Connect</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Pinterest
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 space-y-5">
              {/* Newsletter Section */}
              <h3 className="text-white text-lg font-medium">
                Sign up for our newsletter
              </h3>
              <p className="text-sm">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-4 flex flex-col sm:flex-row">
                <div className="w-full sm:w-3/4">
                  <input
                    id="email-address"
                    type="email"
                    required
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full sm:w-1/4 sm:ms-5 mt-4 sm:mt-0">
                  <button
                    type="submit"
                    className="ml-3 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 ">
          <p className="text-sm text-gray-400 mt-10">
            © Techindeck 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
