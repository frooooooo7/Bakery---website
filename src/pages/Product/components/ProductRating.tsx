import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


interface ProductRatingProps {
  value: number;
}

const ProductRating = ({value} : ProductRatingProps) => {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
    </Stack>
  )
}

export default ProductRating
