import { CartItem } from 'CarItem/CarItem';
import { Container, ItemCar } from './CatalogPage.styled';

export const CatalogPage1 = ({ cars }) => {
  return (
    <Container>
      {cars.map(car => (
        <ItemCar key={car.id}>
          {/* <Img src={car.img} alt="car" />
          <BtnIcon>
            <Icon />
          </BtnIcon> */}
          <ul>
            <li>{car.make}</li>
            <li>{car.model}</li>
            <li>{car.year}</li>
            <li>{car.rentalPrice}</li>
          </ul>
          <ul>
            <li>{car.address}</li>
            <li>{car.rentalCompany}</li>
            <li>{car.type}</li>
            <li>{car.model}</li>
            <li>{car.id}</li>
            <li>{car.accessories[1]}</li>
          </ul>
          <button>Learn more</button>
        </ItemCar>
      ))}
    </Container>
  );
};

export const CatalogPage = ({ cars }) => {
  return (
    <Container>
      {cars.map(car => (
        <ItemCar key={car.id}>
          <CartItem car={car} />
        </ItemCar>
      ))}
    </Container>
  );
};
