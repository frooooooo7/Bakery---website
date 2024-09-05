import { useEffect, useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface Props {
  onQuantityChange: (value: number) => void;
  initialQuantity?: number;
}

const QuantitySelector = ({ onQuantityChange, initialQuantity = 1}: Props) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity]);

  return (
    <Box display="flex" alignItems="center">
      <Button onClick={handleDecrement} variant="outlined" color='secondary'>-</Button>
      <Typography variant="h6" sx={{ mx: 2 }}>{quantity}</Typography>
      <Button onClick={handleIncrement} variant="outlined" color='secondary'>+</Button>
    </Box>
  );
};

export default QuantitySelector;