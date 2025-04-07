import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col mx-auto px-6 py-4 max-w-screen-lg sm:flex-row items-center justify-between">
        <p>&copy; 2025 Varsinais-Suomen Kaverikoirat</p>
        <Image
          src="/kaverikoira_pysty_orig_web.jpg"
          alt="Kennelliiton Kaverikoira-logo"
          width={385}
          height={210}
        />
      </div>
    </footer>
  );
};

export default Footer;
