import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';


interface Props {
  price: number;
  discountPrice?: number;
  isDiscount: boolean;
}


const QuantitySelector = ( {price, discountPrice, isDiscount}: Props ) => {
  const [quantity, setQuantity] = useState(1);
  

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <Box display="flex" alignItems="center">
      <Button onClick={handleDecrement} variant="outlined" color='secondary'>-</Button>
      <Typography variant="h6" sx={{ mx: 2 }}>{quantity}</Typography>
      <Button onClick={handleIncrement} variant="outlined" color='secondary'>+</Button>
      <Typography variant="h6" sx={{ ml: 2 }}>${(quantity * price).toFixed(2)}</Typography>
    </Box>
  );
}

export default QuantitySelector;
