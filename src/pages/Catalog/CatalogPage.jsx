import { CartItem } from 'CarItem/CarItem';
import { Container, ItemCar } from './CatalogPage.styled';
import { Button } from '@mui/material';

export const CatalogPage = ({ cars, onClick }) => {
  return (
    <>
      <Container>
        {cars.map(car => (
          <ItemCar key={car.id}>
            <CartItem car={car} />
          </ItemCar>
        ))}
      </Container>
      <Button
        onClick={onClick}
        variant="text"
        sx={{
          color: '#3470FF',
          fontFamily: 'Manrope',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '24px',
          textDecorationLine: 'underline',
          textTransform: 'none',
        }}
      >
        Load more
      </Button>
    </>
  );
};
