import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Cta from "@/components/cta";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Cta />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8 md:py-12 xl:gap-20">
          {/* 1st block - Company Info */}
          <div className="space-y-2">
            <div className="mb-4 flex items-center justify-start">
              <Logo />
            </div>
            <address className="not-italic text-sm text-gray-200 leading-relaxed">
              70 NW 25th St<br />
              Miami, FL 33127<br />
              <a href="mailto:support@blueprint2.me" className="text-indigo-200/65 hover:text-indigo-500 transition">support@blueprint2.me</a><br />
              <a href="tel:+13059625351" className="text-indigo-200/65 hover:text-indigo-500 transition">(305)-962-5351</a>
            </address>
          </div>
          {/* 2nd block - Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white mb-2">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 underline"
                  href="https://blueprint2.me/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 underline"
                  href="https://blueprint2.me/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block - Social */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white mb-2">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500 underline"
                  href="https://linkedin.com/company/blueprint2me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-300">
          <div className="mb-2 md:mb-0">
            © Blueprint AI LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
