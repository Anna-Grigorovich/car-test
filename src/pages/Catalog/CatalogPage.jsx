import { CartItem } from 'CarItem/CarItem';
import { Container, ContainerMain, ItemCar } from './CatalogPage.styled';
import { Button } from '@mui/material';

export const CatalogPage = ({ cars, onClick, addFavorite }) => {
  return (
    <ContainerMain>
      <Container>
        {cars.map(car => (
          <ItemCar key={car.id}>
            <CartItem car={car} addFavorite={addFavorite} />
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
    </ContainerMain>
  );
};
