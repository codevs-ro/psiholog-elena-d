const TerapieFirst = () => {
  return (
    <div className="py-24 md:py-36 w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50">
      <h1 className="slide-in text-black font-semibold mb-8 text-2xl">
        Terapie: individuală sau prin abonamente
      </h1>
      {/* text terapie */}
      <div className="w-full flex items-start justify-between md:flex-row flex-col gap-8">
        {/* primul div */}
        <div className="flex flex-col gap-8 slide-in">
          <p>
            Îți propun să te bucuri din toată inima, precum copiii, de spațiul
            tău privat și strict confidențial de “joacă”: fiindcă ale adulților
            sunt munca și relațiile lor, vom lucra împreună subiectele care te
            interesează.
          </p>
          <p>
            Mai întâi vom stabili cadrul, apoi vom explora resurse, limitări,
            blocaje, soluții, le vom identifica & adapta, așa încât să le poți
            lua cu tine în traiul de zi cu zi, să-ți aducă starea de bine, de
            bucurie și entuziasm.
          </p>
        </div>
        {/* al doilea div */}
        <div className="flex flex-col gap-8 slide-in">
          <p>
            Îmi doresc ca tu să devii un om fericit și împăcat cu tine și cu
            toți cei din jurul tău, iar pentru asta avem la dispoziție felurite
            metode și instrumente pe care le-am strâns de-a lungul cursurilor
            absolvite și experienței acumulate.
          </p>
          <p>
            La sfârșitul “jocului”, campion va fi zâmbetul tău larg adresat
            Vieții.
          </p>
          <p>Fă din viața ta arta ta!</p>
        </div>
      </div>
    </div>
  );
};

export default TerapieFirst;
