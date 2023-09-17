// import { Button } from 'ButtonFavotite/ButtonFavorite.styled';
// import { Button } from '@mui/material';
import { CartItem } from 'CarItem/CarItem';
import {
  Container,
  ContainerMain,
  ItemCar,
} from 'pages/Catalog/CatalogPage.styled';

export const FavoritePage = ({ filteredCars, addFavorite, favorites }) => {
  return (
    <ContainerMain>
      <Container>
        {filteredCars.map(car => (
          <ItemCar key={car.id}>
            <CartItem
              car={car}
              addFavorite={addFavorite}
              favorites={favorites}
            />
          </ItemCar>
        ))}
      </Container>
    </ContainerMain>
  );
};
