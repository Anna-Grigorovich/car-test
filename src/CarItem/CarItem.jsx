import { Button } from '@mui/material';
import { Box, Div, Img, P, Span } from './CarItem.styled';

export const CartItem = ({ car }) => {
  return (
    <Box>
      <Img src={car.img} alt="car" />
      <Div>
        <P>
          {car.make} <Span>{car.model}</Span>, {car.year}
        </P>
        <P>{car.rentalPrice}</P>
      </Div>

      <ul>
        <li>{car.address}</li>
        <li>{car.rentalCompany}</li>
        <li>{car.type}</li>
        <li>{car.model}</li>
        <li>{car.id}</li>
        <li>{car.accessories[1]}</li>
      </ul>
      <Button variant="contained">Learn more</Button>
    </Box>
  );
};
