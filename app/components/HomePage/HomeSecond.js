const HomeSecond = () => {
  return (
    <div className="py-12 md:py-36 w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-[url('/picture-bg.png')]">
      {/* primul div */}
      <div className="flex items-top justify-between gap-4 md:gap-12 md:flex-row flex-col">
        <h1 className="text-white md:w-5/12 font-semibold text-2xl">
          Eliberează-ți sufletul: un drum creativ către echilibru emoțional
        </h1>
        <p className="text-white md:w-5/12 mt-4">
          Descoperă o metodă specială de a-ți explora și integra emoțiile prin
          puterea transformatoare a creativității. În ședințele de art terapie,
          utilizând materiale specifice, vei învăța să îți exprimi gândurile și
          sentimentele prin diferite activități, deschizându-ți calea către
          autocunoaștere, reducerea anxietății și îmbunătățirea calității vieții
          tale.
        </p>
      </div>
      {/* al doilea div */}

      <div className="flex items-center justify-between gap-4 md:gap-12 md:flex-row-reverse flex-col-reverse">
        <h1 className="text-red-400/80 md:w-5/12 italic text-2xl mt-4">
          {"''"} Un desen e pur și simplu o linie mergând la plimbare {"''"}
          <span className="text-sm text-normal ml-2">(Paul Klee)</span>
        </h1>
        <p className="text-white md:w-5/12 mt-8">
          Fără a fi absolut deloc nevoie de abilități artistice anterioare, art
          terapia îți oferă ocazia să te conectezi cu Sinele tău profund într-un
          mod intuitiv și eliberator. Acest tip de terapie îți permite să îți
          degajezi tensiunile și să găsești soluții într-un mod unic,
          oferindu-ți în același timp o sursă continuă de inspirație și
          regenerare. Cu fiecare sesiune, vei descoperi cum propria ta
          imaginație poate deveni o oglindă a stărilor tale interioare și un
          ghid spre claritate și liniște interioară.
        </p>
      </div>
    </div>
  );
};

export default HomeSecond;
