import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="mx-auto px-6 lg:px-0 max-w-screen-lg flex flex-col sm:flex-row items-center justify-between py-4 border-t border-gray-300">
        <p>&copy; 2025 Varsinais-Suomen Kaverikoirat</p>
        <Image
          src="/kaverikoira_pysty_orig_web.jpg"
          alt="Kennelliiton Kaverikoira-logo"
          className="border-1 border-gray-300"
          width={385}
          height={210}
        />
      </div>
    </footer>
  );
};

export default Footer;
