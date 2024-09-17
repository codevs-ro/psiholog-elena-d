import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 px-8 py-12 flex md:flex-row flex-col items-top justify-between">
      <div className="flex flex-col md:w-3/12">
        <h3 className="font-semibold ">Psiholog Elena Dordea</h3>
        <p className="text-sm mt-4 text-black/50">Viața ta, arta ta!</p>
      </div>

      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Navigație</h3>
        <Link href="/" className="text-sm hover:text-red-400 transition-all ">
          Acasă
        </Link>
        <Link
          href="/despre"
          className="text-sm hover:text-red-400 transition-all "
        >
          Despre
        </Link>
        <Link
          href="/terapie"
          className="text-sm hover:text-red-400 transition-all "
        >
          Terapie
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Rețele Sociale</h3>
        <Link href="/" className="text-sm hover:text-red-400 transition-all ">
          Facebook
        </Link>
        <Link href="/" className="text-sm hover:text-red-400 transition-all ">
          Instagram
        </Link>
        <Link href="/" className="text-sm hover:text-red-400 transition-all ">
          Linkedin
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Contactare</h3>
        <Link
          href="mailto:elena.dordea@gmail.com?subject=Colaborare&body=Buna%20ziua%20"
          className="text-sm hover:text-red-400 transition-all "
        >
          elena.dordea@gmail.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
