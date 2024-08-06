import RangeSlider from "../components/RangeSlider";
import CheckboxLabels from "../components/CheckboxLabels";
import { useContext, useState } from "react";
import { RangeContext } from "../context/RangeSliderContext";


const Filters = () => {
  const [rangeValue, setRangeValue] = useState<number[]>([1, 30]);

  const { setSliderValue } = useContext(RangeContext);

  const handleValueChange = (value: number[]) => {
    setRangeValue(value);
  };

  const handleFilter = () => {
    setSliderValue(rangeValue);
  }

  return (
    <section className="pt-10 px-2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-bold border-b border-gray-300 pb-3 uppercase">Filtruj przez cenę</h1>
          <RangeSlider onValueChange={handleValueChange} />
          <div className="w-full flex items-center justify-between">
            <button onClick={handleFilter} className='mt-2 px-4 lg:px-10 py-1 lg:py-5 bg-pink-700 text-white border-2 border-pink-800 rounded-lg font-bold active:bg-pink-500'>FILTRUJ</button>
            <h1>Cena: ${rangeValue[0]} - ${rangeValue[1]}</h1>
          </div>
        </div>
        <div>
          <h1 className="mt-10 text-center font-bold border-b border-gray-300 pb-3 uppercase">Kategorie</h1>
           <CheckboxLabels/>
        </div>
      </div>
    </section>
  );
};

export default Filters;