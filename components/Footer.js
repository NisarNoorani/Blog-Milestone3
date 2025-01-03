import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="mt-0 bg-[#171717] pt-6">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px]">
            <h1 className="text-yellow-500 font-extrabold text-[24px]">
              BLOG<span className="text-white">SPHERE</span>
            </h1>
            <p className="mt-4 text-[15px] font-normal text-white/[80%]">
              Welcome to BlogSphere — your ultimate blogging destination. Connect, create, and discover amazing
              stories from around the world.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-white hover:text-yellow-500">
                <FaFacebook size={28} />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-500">
                <FaLinkedin size={28} />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-500">
                <FaInstagram size={28} />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-500">
                <FaTwitter size={28} />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-500">
                <FaYoutube size={28} />
              </Link>
            </div>
          </div>

          <div className="md:w-[316px] mt-6 md:mt-0">
            <div className="flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-yellow-500">
                <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="..." />
                </svg>
              </div>
              <div className="ml-4">
                <Link href="tel:+911800123444" className="text-[14px] font-medium text-white">
                  +91 1800123444
                </Link>
                <p className="text-[12px] font-medium text-white/[80%]">Support Number</p>
              </div>
            </div>
            <div className="mt-4 flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-yellow-500">
                <svg width="20" height="15" fill="white">...</svg>
              </div>
              <div className="ml-4">
                <Link href="mailto:help@blogsphere.com" className="text-[14px] font-medium text-white">
                  help@blogsphere.com
                </Link>
                <p className="text-[12px] font-medium text-white/[80%]">Support Email</p>
              </div>
            </div>
            <div className="mt-4 flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-yellow-500">
                <svg width="18" height="21" fill="white">...</svg>
              </div>
              <div className="ml-4">
                <Link href="#" className="text-[14px] font-medium text-white">
                  Sub Nerul, Mumbai, India, 123456
                </Link>
                <p className="text-[12px] font-medium text-white/[80%]">Address</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div>
              <p className="text-[18px] font-medium text-white">Pages</p>
              <ul>
                <li className="mt-4">
                  <Link className="text-[15px] font-normal hover:font-semibold text-white hover:text-yellow-500" href="/">
                    Home
                  </Link>
                </li>
                <li className="mt-4">
                  <Link className="text-[15px] font-normal hover:font-semibold text-white hover:text-yellow-500" href="/news">
                    News
                  </Link>
                </li>
                <li className="mt-4">
                  <Link className="text-[15px] font-normal hover:font-semibold text-white hover:text-yellow-500" href="/contact">
                    Contact
                  </Link>
                </li>
                <li className="mt-4">
                  <Link
                    className="text-[15px] font-normal hover:font-semibold text-white hover:text-yellow-500"
                    href="/plans"
                  >
                    Plans and Pricing
                  </Link>
                </li>
                <li className="mt-4">
                  <Link className="text-[15px] font-normal hover:font-semibold text-white hover:text-yellow-500" href="/terms">
                    Terms and Conditions
                  </Link>
                </li>
                <li className="mt-4">
                  <Link className="text-[15px] font-normal hover:font-semibold text-white hover:text-yellow-500" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              <p className="text-[18px] font-medium text-white">Download the App</p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-yellow-500">
                  <AiFillAndroid size={36} />
                </Link>
                <Link href="#" className="text-white hover:text-yellow-500">
                  <AiFillApple size={36} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-6 border-white/[50%]" />
        <div className="flex items-center justify-center py-6">
          <p className="text-[12px] font-normal text-white/[80%] md:text-[14px]">
            © Copyright 2024, All Rights Reserved by BLOGSPHERE PVT. LTD.
          </p>
        </div>
      </div>
    </div>
  );
}
