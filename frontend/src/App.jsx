import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { data, profileDetails } from "./assets/assets";



export default function Index() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-200">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <circle cx="700" cy="100" r="120" fill="#a5b4fc" fillOpacity="0.3" />
          <circle cx="100" cy="500" r="180" fill="#fbcfe8" fillOpacity="0.25" />
          <circle cx="400" cy="300" r="200" fill="#c4b5fd" fillOpacity="0.18" />
        </svg>
      </div>

      {/* Main Card */}
      <div className="flex-grow flex items-center justify-center z-10 relative">
        <div className="bg-white/80 shadow-2xl rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center backdrop-blur-md border border-white/40">
          {/* Person Image */}
          <div className="flex justify-center mb-6">
            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-indigo-200 shadow-lg object-cover"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 tracking-tight drop-shadow">
            Webinfloo
          </h1>
          <p className="text-lg font-medium text-gray-700 mb-8">
            <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full mb-2">
              Full-Stack Web Developer
            </span>
            <br />
            Crafting modern, scalable, and beautiful web experiences.
          </p>
          {/* Contact Section */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <a
              href="mailto:youremail@example.com"
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
              <span className="text-base">{profileDetails.mail_id}</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
              aria-label="Phone"
            >
              <FaPhone size={20} />
              <span className="text-base">{profileDetails.phone_no}</span>
            </a>
          </div>
          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-6">
            <a
              href={profileDetails.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={profileDetails.linkedIn_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center py-4 bg-white/60 backdrop-blur-sm z-10 relative">
        <p className="text-gray-700 font-medium">
          🚧 This website is currently under development. Stay tuned for updates! 🚧
        </p>
      </footer>
    </div>
  );
}