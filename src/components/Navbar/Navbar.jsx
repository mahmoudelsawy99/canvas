/* eslint-disable react/prop-types */
import { useState } from "react";
import image1 from "../../../public/images/image1.png";
import { jsPDF } from "jspdf";

const Navbar = ({ canvasInstanceRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  function generatePDF() {
    if (canvasInstanceRef) {
        const canvas = canvasInstanceRef.current;

        const imgData = canvas.toDataURL({
            format: "png",
            multiplier: 4,
        });

        // eslint-disable-next-line react/prop-types
        const canvasWidth = canvas.getWidth();
        // eslint-disable-next-line react/prop-types
        const canvasHeight = canvas.getHeight();

        const repeatCount = 4; 
        const spaceBetween = 20; 

        const totalHeight =
            canvasHeight * repeatCount + spaceBetween * (repeatCount - 1);

        const fixedPdfWidth = 1000;

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [fixedPdfWidth, totalHeight],
        });

        const xOffset = (fixedPdfWidth - canvasWidth) / 2;

        for (let i = 0; i < repeatCount; i++) {
            pdf.addImage(
                imgData,
                "PNG",
                xOffset,
                (canvasHeight + spaceBetween) * i,
                canvasWidth,
                canvasHeight
            );
        }

        // Adding a repeated watermark to the PDF
        const watermarkText = "https://www.thems.io"; // Replace with your watermark text
        pdf.setTextColor(200, 200, 200); // Light gray color for watermark
        pdf.setFontSize(30); // Font size for watermark
        pdf.setFont("helvetica", "bold");

        const watermarkXSpacing = 200; // Horizontal spacing between watermarks
        const watermarkYSpacing = 150; // Vertical spacing between watermarks

        // Add watermark text in a grid pattern on each page
        const pageCount = pdf.internal.getNumberOfPages();
        for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
            pdf.setPage(pageNum);

            for (let y = 0; y < totalHeight; y += watermarkYSpacing) {
                for (let x = 0; x < fixedPdfWidth; x += watermarkXSpacing) {
                    pdf.text(watermarkText, x, y, {
                        angle: 45, // Rotate the watermark text
                    });
                }
            }
        }

        pdf.save("fabric-canvas-repeated-watermark.pdf");
    }
}

  return (
    <nav className="h-16 bg-white border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* left side buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-200 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleProfileMenu}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img className="size-8 rounded-full" src={image1} alt="" />
                </button>
              </div>
              {isProfileMenuOpen && (
                <div
                  className="absolute left-2 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 text-right"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    تسجيل الخروج
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navbar */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <button
                  className="rounded-md bg-gray-200 px-3 mx-6 py-2 text-sm font-medium text-black"
                  onClick={generatePDF}
                >
                  تنزيل ملف
                </button>
              </div>
            </div>
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMobileMenuOpen && (
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
              {/* Icon when menu is open */}
              {isMobileMenuOpen && (
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
