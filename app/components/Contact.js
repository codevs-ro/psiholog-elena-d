import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="py-12 md:py-36  min-h-screen w-full px-8 md:px-16 gap-44 lg:px-32 xl:px-36 2xl:px-96 flex items-center justify-between bg-gradient-to-r from-teal-300/20 to-red-400/20">
      {/* div imagine pc */}
      <div className="md:w-6/12 md:block hidden">
        <Image
          src="/contact-img.svg"
          priority
          width={800}
          height={800}
          className="w-full"
          alt="Poza Lucrari"
        />
      </div>
      <div className="md:w-9/12">
        <h1 className="text-black font-semibold text-2xl">
          Fă din viața ta arta ta!
        </h1>
        <Image
          src="/contact-img.svg"
          priority
          width={800}
          height={800}
          className="md:hidden my-8 w-full"
          alt="Poza Lucrari"
        />
        <p className="mt-8 mb-12">
          Ești pregătit să începi călătoria ta către echilibru emoțional? Sunt
          aici să te ghidez. Vrei să aflii mai multe despre Art Terapie? Sunt la
          un click distanță.
        </p>
        <div className="flex  text-center flex-col md:flex-row w-full md:w-auto gap-4">
          <Link
            className="px-8 py-2 bg-red-400 text-white border-2 border-red-400 hover:rounded-2xl rounded-md ease-in-out transition-all"
            href="/terapie"
          >
            Descoperă Terapia
          </Link>
          <Link
            className="px-8 py-2 bg-red-400/20 border-2 border-red-400 hover:rounded-2xl rounded-md ease-in-out transition-all"
            href="mailto:elena.dordea@gmail.com?subject=Colaborare&body=Buna%20ziua%20"
          >
            Contactează-mă
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
