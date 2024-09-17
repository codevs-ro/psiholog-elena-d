import Image from "next/image";

const AboutFirst = () => {
  return (
    <div className="pt-36 pb-12 min-h-screen w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-red-400 flex items-center justify-between">
      {/* div imagine pc */}
      <div className="hidden md:block md:w-5/12">
        <Image
          src="/about-img.svg"
          width={800}
          height={800}
          priority
          alt="Poza Lucrari"
        />
      </div>
      <div className="md:w-5/12 text-white">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Întâlnește-ți adevăratul eu prin art terapie: redescoperă pacea
          interioară
        </h1>
        <Image
          priority
          width={800}
          height={800}
          src="/about-img.svg"
          alt="Poza Lucrari"
          className="md:hidden my-8 w-10/12 mx-auto"
        />
        <p className="md:mt-8 md:mb-12 mt-4 mb-6">
          Creativitatea este o poartă spre lumea ta interioară, unde fiecare
          gand și emoție pot fi exprimate. Cu ajutorul terapiei și al unui Kit
          special pregătit pentru tine, vei învăța să dai o forma trairilor
          tale, deschizând drumul spre o mai bună înțelegere de Sine și spre
          armonie. Fie că te confrunți cu stresul zilnic sau cu provocări de
          lunga durata, terapia te ajută să găsești echilibrul, claritatea și
          liniștea de care ai nevoie Acum si Aici.
        </p>
      </div>
    </div>
  );
};

export default AboutFirst;
