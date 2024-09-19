import { Button, Typography, Box } from '@mui/material';

interface Props {
  quantity: number;
  onQuantityChange: (value: number) => void;
}

const QuantitySelector = ({ quantity, onQuantityChange }: Props) => {

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Button onClick={handleDecrement} variant="outlined" color="secondary">
        -
      </Button>
      <Typography variant="h6" sx={{ mx: 2 }}>
        {quantity}
      </Typography>
      <Button onClick={handleIncrement} variant="outlined" color="secondary">
        +
      </Button>
    </Box>
  );
};

export default QuantitySelector;
