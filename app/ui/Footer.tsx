import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto xl:max-w-screen-lg flex flex-col sm:flex-row items-center justify-between">
        <p>&copy; 2024 Varsinais-Suomen Kaverikoirat</p>
        <Image src="/kaverikoira_pysty_orig_web.jpg" alt="Kennelliiton Kaverikoira-logo" width={385} height={210} />
      </div>
    </footer>
  );
};

export default Footer;