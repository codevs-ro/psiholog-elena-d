import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 px-8 py-12 flex md:flex-row flex-col items-top justify-between">
      <div className="flex flex-col md:w-3/12">
        <h3 className="font-semibold ">Psiholog Elena Dordea</h3>
        <p className="text-sm mt-4 text-black/50">Fă din viața ta arta ta!</p>
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
        <h3 className="font-semibold">Articolele Mele</h3>
        <Link
          href="/articole/adictii"
          className="text-sm hover:text-red-400 transition-all "
        >
          Adicţiile
        </Link>
        <Link
          href="/articole/nu-esti-singur"
          className="text-sm hover:text-red-400 transition-all "
        >
          Nu ești singur
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Rețele Sociale</h3>
        <Link
          href="https://www.facebook.com/share/UuJ3Pxvh1iTkbjvo/?mibextid=LQQJ4d"
          className="text-sm hover:text-red-400 transition-all "
        >
          Facebook
        </Link>
        <Link
          href="https://www.instagram.com/in_trecere_pe_aici?igsh=MTFpZDEyc250YzlsdA%3D%3D&utm_source=qr"
          className="text-sm hover:text-red-400 transition-all "
        >
          Instagram
        </Link>
        <Link
          href="https://www.linkedin.com/in/elena-dordea-14b2b143?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          className="text-sm hover:text-red-400 transition-all "
        >
          Linkedin
        </Link>
        <Link
          href="https://www.tiktok.com/@e.dor.de.ea?_t=8pxETGGO1NA&_r=1"
          className="text-sm hover:text-red-400 transition-all "
        >
          Tiktok
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Contactare</h3>
        <Link
          href="mailto:elena.dordea@gmail.com?subject=Colaborare&body=Buna%20ziua%20"
          className="text-sm hover:text-red-400 transition-all "
        >
          Email{" "}
        </Link>
        <Link
          href="tel:40729190001"
          className="text-sm hover:text-red-400 transition-all "
        >
          Telefon
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
