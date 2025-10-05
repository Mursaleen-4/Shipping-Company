import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  User,
  Image,
  Newspaper,
  Quote,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCompaniesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsCompaniesOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav className="bg-white/40 backdrop-blur-md text-gray-800 shadow-lg sticky top-0 z-50 border-b border-white/20 w-full">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Logo */}
            <Link
            to="/"
            className="group flex items-center py-2 flex-shrink-0 z-50"
          >
            <img
              src="/images/baksh1.png"
              alt="Baksh Group Logo"
              className="h-12 w-auto mr-2"
            />
          </Link>  

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>

            {/* Companies Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsCompaniesOpen(true)}
              onMouseLeave={() => setIsCompaniesOpen(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 flex items-center">
                GROUP OF COMPANIES
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isCompaniesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isCompaniesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50"
                  >
                    <DropdownLink
                      to="/baksh-group"
                      title="Baksh Group"   
                      desc="Financial Services"
                      img="/images/Bakhs_group.jpg"
                    />
                    <DropdownLink
                      to="/baksh-investment"
                      title="Baksh Investment Limited"
                      desc="Financial Services"
                      img="/images/bakhs_limited.jpg"
                    />
                    <DropdownLink
                      to="/yaaseen-about"
                      title="Yaaseen Shipping Lines"
                      desc="Global Shipping"
                      img="/images/yaseen_logo.png"
                    />
                    <DropdownLink
                      to="/yaaseen-shipping-pvt"
                      title="Yaaseen Shipping Lines (PVT) Ltd"
                      desc="Global Shipping"
                      img="/images/yaseen_logo.png"
                    />
                    <DropdownLink
                      to="/uosl"
                      title="UOSL Shipping & Logistics"
                      desc="End-to-end logistics"
                      img="/images/uosl_logo.jpg"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
  <a
    href="/services"
    className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 flex items-center"
  >
    SERVICES
    <ChevronDown
      className={`ml-1 h-4 w-4 transition-transform ${
        isServicesOpen ? "rotate-180" : ""
      }`}
    />
  </a>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 z-50"
                  >
                    <DropdownItem to="/services/1" label="Liner Shipping" />
                    <DropdownItem to="/services/2" label="Freight Forwarding" />
                    <DropdownItem to="/services/3" label="Container Services" />
                    <DropdownItem to="/services/4" label="Ship Husbandry" />
                    <DropdownItem to="/services/5" label="Warehousing" />
                    <DropdownItem to="/services/6" label="Customs Clearance" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/gallery">
              <Image className="w-4 h-4 mr-1" /> GALLERY
            </NavLink>
            <NavLink to="/blogs">
              <Newspaper className="w-4 h-4 mr-1" /> BLOGS
            </NavLink>
            <NavLink to="/tariffs">TARIFFS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/schedule">VESSEL SCHEDULE</NavLink>

            {/* Right side */}
            <NavLink to="/login">
              <User className="w-4 h-4 mr-1" /> LOGIN
            </NavLink>
            <Link
              to="/quote"
              className="px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm hover:from-blue-700 hover:to-blue-800 transition"
            >
              <Quote className="w-4 h-4 mr-1 inline" /> GET QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-white/30"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              <MobileLink to="/" label="Home" />
              <MobileLink to="/about" label="About" />
              <MobileLink to="/gallery" label="Gallery" icon={<Image />} />
              <MobileLink to="/blogs" label="Blogs" icon={<Newspaper />} />

              {/* Mobile Companies */}
              <button
                onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                Group Of Companies
                <ChevronDown
                  className={`h-5 w-5 transition ${
                    isCompaniesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isCompaniesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 space-y-1"
                  >
                    <MobileLink to="/baksh-group" label="Baksh Group" />
                    <MobileLink
                      to="/baksh-investment"
                      label="Baksh Investment"
                    />
                    <MobileLink to="/yaaseen-about" label="Yaaseen Shipping" />
                    <MobileLink
                      to="/yaaseen-pvt-ltd"
                      label="Yaaseen Shipping (PVT) Ltd"
                    />
                    <MobileLink to="/uosl" label="UOSL Shipping" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Services */}
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 space-y-1"
                  >
                    <MobileLink to="/services/1" label="Liner Shipping" />
                    <MobileLink to="/services/2" label="Freight Forwarding" />
                    <MobileLink to="/services/3" label="Container Services" />
                    <MobileLink to="/services/4" label="Ship Husbandry" />
                    <MobileLink to="/services/5" label="Warehousing" />
                    <MobileLink to="/services/6" label="Customs Clearance" />
                  </motion.div>
                )}
              </AnimatePresence>

              <MobileLink to="/tariffs" label="Tariffs" />
              <MobileLink to="/schedule" label="Vessel Schedule" />
              <MobileLink to="/contact" label="Contact" />
              <MobileLink to="/login" label="Login" icon={<User />} />
              <Link
                to="/quote"
                className="block text-center px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper Components
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg flex items-center"
  >
    {children}
  </Link>
);

const DropdownLink = ({
  to,
  title,
  desc,
  img,
}: {
  to: string;
  title: string;
  desc: string;
  img: string;
}) => (
  <Link
    to={to}
    className="flex items-center px-4 py-3 hover:bg-blue-50 transition"
  >
    <img src={img} alt={title} className="w-8 h-8 rounded-md mr-3" />
    <div className="flex-1">
      <div className="font-medium">{title}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-400" />
  </Link>
);

const DropdownItem = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
  >
    {label}
  </Link>
);

const MobileLink = ({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon?: React.ReactNode;
}) => (
  <Link
    to={to}
    className="flex items-center px-4 py-3 text-base text-gray-700 hover:bg-blue-50 rounded-lg"
  >
    {icon && <span className="mr-3">{icon}</span>}
    {label}
  </Link>
);

export default Navigation;