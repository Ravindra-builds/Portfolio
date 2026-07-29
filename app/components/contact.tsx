import React from "react";
import { Mail, MapPin, Coffee } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 slideRight">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>

        <p className="text-md text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto slideLeft">
          I am currently looking for new opportunities. Whether you have a
          question or just want to say hi, I will try my best to get back to
          you!
        </p>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl shadow-gray-200/50 dark:shadow-none slideUp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-400">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <a
                href="mailto:yadavravindra7292@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                yadavravindra7292@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 text-purple-400">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ranchi, Jharkhand (INDIA)
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-green-400">
                <Coffee size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Lets Talk
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Open to freelance & full-time roles
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Ravindra-builds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/YadavRavin7292"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaTwitter size={24} />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <a
              href="mailto:yadavravindra7292@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Say Hello
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
