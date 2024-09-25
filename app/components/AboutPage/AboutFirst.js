import Image from "next/image";

const AboutFirst = () => {
  return (
    <div className="pt-36 pb-12 min-h-screen w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-red-400 flex items-center justify-between">
      {/* div imagine pc */}
      <div className="hidden md:block md:w-5/12">
        <Image
          src="/about-img.png"
          width={800}
          height={800}
          priority
          alt="Poza Lucrari"
          className="slide-left"
        />
      </div>
      <div className="md:w-5/12 text-white">
        <h1 className="text-2xl md:text-3xl font-semibold slide-in">
          Întâlnește-ți autenticitatea
        </h1>
        <Image
          priority
          width={800}
          height={800}
          src="/about-img.png"
          alt="Poza Lucrari"
          className="md:hidden my-8 w-10/12 mx-auto slide-in"
        />
        <p className="md:mt-8 md:mb-12 mt-4 mb-6 slide-in">
          Creativitatea este o poartă spre lumea ta interioară, unde fiecare
          gând și emoție pot fi exprimate. Cu ajutorul terapiei și al unui kit
          special gândit de mine și pregătit de tine, vei învăța să dai o formă
          trăirilor tale, deschizând astfel drumul spre o mai bună înțelegere de
          sine și spre armonie. Fie că te confrunți cu stresul zilnic sau cu
          provocări de lungă durată, terapia te ajută să îți găsești echilibrul,
          claritatea și liniștea de care ai nevoie Acum și Aici.
        </p>
      </div>
    </div>
  );
};

export default AboutFirst;
