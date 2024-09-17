import Image from "next/image";

const AboutSecond = () => {
  return (
    <div className="pt-36 pb-12 min-h-screen w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex items-center justify-between flex-row-reverse">
      {/* div imagine pc */}
      <div className="w-5/12 hidden md:flex justify-end items-center">
        <Image
          priority
          width={800}
          height={800}
          src="/kit-img.svg"
          alt="Poza Kit"
          className="w-10/12"
        />
      </div>
      {/* div content */}
      <div className="md:w-5/12">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Kitul tău: instrument perfect pentru exprimare emoțională
        </h1>
        <Image
          priority
          width={800}
          height={800}
          src="/kit-img.svg"
          alt="Poza Kit"
          className="md:hidden my-8 w-10/12 mx-auto"
        />
        <p className="md:mt-8 md:mb-12 mt-4 mb-6">
          Sesiunea ta de terapie este o experiență personalizată cu ajutorul
          Kitului. Aceasta mini trusa conține materialele necesare pentru a
          explora liber și creativ starile tale (culori, texturi variate,
          diferite elemente care te vor ajuta să îți explorezi posibilitatile).
          Fiecare element este atent ales pentru a stimula procesul tău de
          constientizare, oferindu-ți spațiul ideal să reflectezi și să te
          descoperi. Kitul este un partener de încredere pe drumul tău către
          atingerea echilibrului și autocunoașterii.
        </p>
      </div>
    </div>
  );
};

export default AboutSecond;
