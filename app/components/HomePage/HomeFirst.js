import Image from "next/image";
import Link from "next/link";
const HomeFirst = () => {
  return (
    <div className="pt-36 pb-12 md:pb-0 md:pt-12 min-h-screen w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex items-center justify-between">
      {/* div imagine pc */}
      <div className="w-5/12 hidden md:flex justify-start items-center">
        <Image
          priority
          width={800}
          height={800}
          src="/hero-img.svg"
          alt="Poza Elena Dordea"
          className="w-10/12"
        />
      </div>
      {/* div content */}
      <div className="md:w-5/12">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Descoperă puterea vindecătoare a artei: ghidează-ți emoțiile prin art
          terapie
        </h1>
        <Image
          priority
          width={800}
          height={800}
          src="/hero-img.svg"
          alt="Poza Elena Dordea"
          className="md:hidden my-8 w-10/12 mx-auto"
        />
        <p className="md:mt-8 md:mb-12 mt-4 mb-6">
          Explorează un spațiu sigur și creativ, unde arta devine un instrument
          de vindecare. În ședințele noastre de art terapie, vei descoperi cum
          exprimarea artistică te poate ajuta să îți înțelegi și să îți
          gestionezi emoțiile, să reduci stresul și să îți îmbunătățești starea
          de bine.
        </p>
        <div className="flex ">
          <Link
            href="/despre"
            className="px-8 py-2 mt-8 md:w-auto text-center w-full text-white bg-teal-600 rounded-md hover:rounded-2xl transition-all ease-in-out"
          >
            Află Mai Mult
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFirst;
