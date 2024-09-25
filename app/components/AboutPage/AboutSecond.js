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
          src="/kit-img.png"
          alt="Poza Kit"
          className="w-10/12 slide-right"
        />
      </div>
      {/* div content */}
      <div className="md:w-5/12">
        <h1 className="text-2xl md:text-3xl font-semibold slide-in">
          Kitul tău: instrument perfect pentru exprimare emoțională
        </h1>
        <Image
          priority
          width={800}
          height={800}
          src="/kit-img.png"
          alt="Poza Kit"
          className="md:hidden my-8 w-10/12 mx-auto slide-in"
        />
        <p className="md:mt-8 md:mb-12 mt-4 mb-6 slide-in">
          Sesiunile tale de terapie sunt experiențe personalizate cu ajutorul
          kitului. Această trusă conține materialele necesare pentru a explora
          liber și creativ stările tale (culori, texturi variate, diferite
          elemente care te vor ajuta să îți explorezi posibilitățile). Fiecare
          element este atent selecționat pentru a stimula procesul tău de
          conștientizare, oferindu-ți spațiul ideal să reflectezi și să te
          descoperi. Kitul este un partener de încredere pe acest drum, de aceea
          vei primi indicații despre ce materiale va conține.
        </p>
      </div>
    </div>
  );
};

export default AboutSecond;
