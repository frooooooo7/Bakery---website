import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface RangeSliderProps {
  onValueChange: (value: number[]) => void;
}


export default function RangeSlider({ onValueChange }: RangeSliderProps) {
  const [value, setValue] = React.useState<number[]>([30, 100]);

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
        max={1000}
      />
    </Box>
  );
}