import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative pb-8">
      <div className="text-5xl font-semibold text-white pt-12 font-[DotBold]">daisugi</div>
      <div className="block md:flex justify-between">
        <div className="flex gap-24 mt-12">
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 font-semibold">Quick Links</p>
            <Link>
              <p className="text-white hover:opacity-[0.4] transition ease-in-out font-semibold">
                Home
              </p>
            </Link>
            <Link>
              <p className="text-white hover:opacity-[0.4] transition ease-in-out font-semibold">
                Blog
              </p>
            </Link>
            <Link>
              <p className="text-white hover:opacity-[0.4] transition ease-in-out font-semibold">
                Pricing
              </p>
            </Link>
            <Link>
              <p className="text-white hover:opacity-[0.4] transition ease-in-out font-semibold">
                Help Center
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 font-semibold">Company</p>
            <Link>
              <p className="text-white hover:opacity-[0.4] transition ease-in-out font-semibold">
                Career
              </p>
            </Link>
            <Link>
              <p className="text-white hover:opacity-[0.4] transition ease-in-out font-semibold">
                About
              </p>
            </Link>
            <Link>
              <p className="text-white hover:opacity-[0.4] transition ease-in-out font-semibold">
                Join us
              </p>
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="flex flex-col gap-3">
            <p className="text-gray-400 text-2xl font-semibold">We value your feedback and would love <br /> to hear from you! Email us at </p>
            <p className="text-white text-2xl font-semibold">support@daisugi.com</p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-white font-semibold">
        Copyright @DAISUGI 2023
      </div>
    </div>
  );
};

export default Footer;
