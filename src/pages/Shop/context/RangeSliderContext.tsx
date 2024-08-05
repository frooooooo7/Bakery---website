import { createContext, useState } from "react"

interface RangeContextValue {
  sliderValue: number[];
  setSliderValue: (value: number[]) => void;
}

export const RangeContext = createContext<RangeContextValue>({
  sliderValue: [1,100],
  setSliderValue: () => {},
});

export const RangeSliderProvider: React.FC<React.PropsWithChildren> = ( {children} ) => {
    const [sliderValue, setSliderValue] = useState<number[]>([1,100]);

  return (
    <RangeContext.Provider value={{sliderValue, setSliderValue}}>
        {children}
    </RangeContext.Provider>
  );
};


