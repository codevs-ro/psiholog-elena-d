import Link from "next/link";

const TerapieSecond = () => {
  return (
    <div className=" py-6 md:py-12  w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50">
      {/* Individuala */}
      <div className="w-full">
        <h1 className="font-semibold text-black text-2xl">Individuală</h1>
        <p className="w-full text-black mt-8 mb-16">Text</p>
      </div>
      {/* Abonament */}
      <div className="w-full">
        <h1 className="font-semibold text-black text-2xl mb-8">
          Prin Abonament
        </h1>
        <div className="md:w-8/12 mx-auto flex items-center gap-12 justify-between md:flex-row flex-col">
          {/* abonament 1 */}

          <div className="bg-red-400/20 w-full  md:mt-24 mt-0 flex flex-col items-center p-2 md:p-4 rounded-md border-2 border-red-400 borde-red-400 hover:rounded-2xl ease-in-out transition-all ">
            <h3 className="text-xl font-semibold">Abonamentul 1</h3>
            <div className="mt-4 flex flex-col justify-start gap-6">
              <p>Feature</p>
              <p>Feature</p>
              <p>Feature</p>
              <p>Feature</p>
            </div>
          </div>
          {/* abonament 2 */}

          <div className="bg-teal-400/20 w-full  md:mt-8 mt-0 flex flex-col items-center p-2 md:p-4 rounded-md border-2 border-teal-400 borde-red-400 hover:rounded-2xl ease-in-out transition-all ">
            <h3 className="text-xl font-semibold">Abonamentul 2</h3>
            <div className="mt-4 flex flex-col justify-start gap-6">
              <p>Feature</p>
              <p>Feature</p>
              <p>Feature</p>
              <p>Feature</p>
            </div>
          </div>
          {/* abonament 3 */}

          <div className="bg-red-400/20 w-full  md:mt-24 mt-0 flex flex-col items-center p-2 md:p-4 rounded-md border-2 border-red-400 borde-red-400 hover:rounded-2xl ease-in-out transition-all ">
            <h3 className="text-xl font-semibold">Abonamentul 3</h3>
            <div className="mt-4 flex flex-col justify-start gap-6">
              <p>Feature</p>
              <p>Feature</p>
              <p>Feature</p>
              <p>Feature</p>
            </div>
          </div>
        </div>
        {/* link formular  */}
        <div className="flex items-center justify-start gap-8 mt-12 md:flex-row flex-col">
          <h1 className="font-semibold text-black text-2xl">
            Ce Abonament te-ar tenta ?
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
