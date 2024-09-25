import Link from "next/link";

const TerapieSecond = () => {
  return (
    <div className=" py-6 md:py-12  w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50">
      {/* Individuală */}
      <div className="w-full">
        <h1 className="font-semibold text-black text-2xl slide-in">
          Individuală
        </h1>
        <p className="w-full text-black mt-8 slide-in">
          CÂT DUREAZĂ: 60 de minute
        </p>
        <p className="w-full text-black mt-2  slide-in">CÂT COSTĂ: 150 lei </p>
        <p className="w-full text-black mt-2 mb-16  slide-in">
          UNDE: online, fizic sau mixt
        </p>
      </div>
      {/* Abonament */}
      <div className="w-full">
        <h1 className="font-semibold text-black text-2xl mb-8 slide-in">
          Prin abonament
        </h1>
        <div className="md:w-10/12 mx-auto flex items-center gap-12 justify-between md:flex-row flex-col">
          {/* abonament 1 */}

          <div className="bg-red-400/20 w-full  md:mt-24 mt-0 flex flex-col items-center p-2 md:p-4 rounded-md border-2 border-red-400 borde-red-400 hover:rounded-2xl ease-in-out transition-all ">
            <h3 className="text-xl font-semibold">Abonamentul BASIC</h3>
            <div className="mt-4 flex flex-col text-sm justify-start gap-2">
              <p>CÂT DUREAZĂ: 6 ședințe a câte 60 de minute fiecare</p>
              <p>
                CÂT COSTĂ: 810 lei - achiți toată suma anticipat și beneficiezi
                de 10% reducere
              </p>
              <p>
                UNDE: în format fizic - beneficiezi de toată gama de materiale
                art terapeutice din cabinet
              </p>
            </div>
          </div>
          {/* abonament 2 */}

          <div className="bg-teal-400/20 w-full  md:mt-8 mt-0 flex flex-col items-center p-2 md:p-4 rounded-md border-2 border-teal-400 borde-red-400 hover:rounded-2xl ease-in-out transition-all ">
            <h3 className="text-xl font-semibold">Abonamentul PREMIUM</h3>
            <div className="mt-4 flex text-sm flex-col justify-start gap-2">
              <p>CÂT DUREAZĂ: 12 ședințe a câte 60 de minute fiecare</p>
              <p>
                CÂT COSTĂ: 1620 lei - achiți toată suma anticipat și beneficiezi
                de 10% reducere
              </p>
              <p>UNDE: online</p>
              <p>
                - primești link-ul către spațiul virtual cu 30 de minute înainte
                de ședință;
              </p>
              <p>
                - vei primi lista de materiale art terapeutice atent selectate
                pentru tine, pe care îți recomand să le ai la îndemână la
                fiecare ședință
              </p>
            </div>
          </div>
          {/* abonament 3 */}

          <div className="bg-red-400/20 w-full  md:mt-24 mt-0 flex flex-col items-center p-2 md:p-4 rounded-md border-2 border-red-400 borde-red-400 hover:rounded-2xl ease-in-out transition-all ">
            <h3 className="text-xl font-semibold">Abonamentul REGULAR</h3>
            <div className="mt-4 flex flex-col text-sm justify-start gap-2">
              <p>CÂT DUREAZĂ: 20 de ședințe a câte 60 de minute fiecare</p>
              <p>
                CÂT COSTĂ: 2700 lei - achiți toată suma anticipat și beneficiezi
                de prima și ultima ședință gratuite
              </p>
              <p>UNDE: online, fizic sau mixt</p>
            </div>
          </div>
        </div>
        {/* link formular  */}
        <div className="flex items-center justify-start gap-8 mt-12 md:flex-row flex-col">
          <h1 className="font-semibold text-black text-2xl">
            Ce abonament te-ar tenta?
          </h1>
          <Link
            href="/formular"
            className="bg-teal-600 w-full text-center  md:w-auto py-2 px-8 text-white rounded-md hover:rounded-2xl ease-in-out transition-all"
          >
            Formular
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TerapieSecond;
