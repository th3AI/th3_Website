import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import logo from "../assets/logo.png";

export default function Footer() {
  const links = [
    {
      title: "Product",
      items: [
        { name: "AI Chatbots", href: "#solutions" },
        { name: "Process Automation", href: "#solutions" },
        { name: "Custom Agents", href: "#solutions" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Help Center", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, href: "#" },
    { icon: <FaTwitter size={20} />, href: "#" },
    { icon: <FaGithub size={20} />, href: "#" },
    { icon: <FaDiscord size={20} />, href: "#" },
    { icon: <SiNotion size={20} />, href: "#" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 mb-12 xl:mb-0">
            <div className="flex items-center space-x-2">
              <img src={logo} className="h-10 w-auto" alt="th3 logo" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-white">
                th3
              </span>
            </div>
            <p className="text-white/70 max-w-xs">
              Building the future of AI-powered automation and intelligent systems.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="text-white/60 hover:text-cyan-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            {links.map((column, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white/90 mb-4">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <a
                          href={item.href}
                          className="text-sm text-white/60 hover:text-cyan-400 transition-colors"
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} th3, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-white/60 hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/60 hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-white/60 hover:text-cyan-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}