import { Button } from 'ButtonFavotite/ButtonFavorite.styled';
import { CartItem } from 'CarItem/CarItem';
import { Container, ItemCar } from 'pages/Catalog/CatalogPage.styled';

export const FavoritePage = ({ filteredCars, addFavorite }) => {
  return (
    <>
      <Container>
        {filteredCars.map(car => (
          <ItemCar key={car.id}>
            <CartItem car={car} addFavorite={addFavorite} />
          </ItemCar>
        ))}
      </Container>
      <Button
        // onClick={onClick}
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
