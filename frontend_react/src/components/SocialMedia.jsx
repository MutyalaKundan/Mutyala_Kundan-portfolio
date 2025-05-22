import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai'; // Removed AiOutlineFileSearch since it's unused

const SocialMedia = () => (
  <div className="app__social">
    {/* LinkedIn */}
    <div>
      <a
        href="https://www.linkedin.com/in/kundan-mutyala-222b0226a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>

    {/* LeetCode */}
    <div>
      <a
        href="https://leetcode.com/u/kundan_mutyala/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillCode />
      </a>
    </div>

    {/* Instagram */}
    <div>
      <a
        href="https://www.instagram.com/kundan_mutyala_5802/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
