import kaverikoiraLogo from '../../public/kaverikoira_pysty_orig_web.jpg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto xl:w-[40%] flex items-center justify-between">
        <p>&copy; 2024 Varsinais-Suomen Kaverikoirat</p>
        <Image src={kaverikoiraLogo} alt="Kennelliiton Kaverikoira-logo" width={300} />
      </div>
    </footer>
  );
};

export default Footer;