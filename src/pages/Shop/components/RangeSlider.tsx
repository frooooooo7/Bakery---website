import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';


interface RangeSliderProps {
  onValueChange: (value: number[]) => void;
}


export default function RangeSlider({ onValueChange }: RangeSliderProps) {
  const [value, setValue] = useState<number[]>([1, 30]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    onValueChange(newValue as number[]);
  };

  return (
    <Box sx={{ width: 350 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1}
        max={200}
      />
    </Box>
  );
}