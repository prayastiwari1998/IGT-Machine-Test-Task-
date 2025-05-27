


const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-800">
          {/* About Us */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Support Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Customer Support</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Copyright</a></li>
              <li><a href="#" className="hover:text-blue-600">Popular Campaign</a></li>
            </ul>
          </div>

          {/* Our Information */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">Our Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Return Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600">Site Map</a></li>
              <li><a href="#" className="hover:text-blue-600">Store Hours</a></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">My Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Press inquiries</a></li>
              <li><a href="#" className="hover:text-blue-600">Social media</a></li>
              <li><a href="#" className="hover:text-blue-600">Directories</a></li>
              <li><a href="#" className="hover:text-blue-600">Images & B–roll</a></li>
              <li><a href="#" className="hover:text-blue-600">Permissions</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">Policy</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Application security</a></li>
              <li><a href="#" className="hover:text-blue-600">Software principles</a></li>
              <li><a href="#" className="hover:text-blue-600">Unwanted software policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Responsible supply chain</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

