import { CartItem } from 'CarItem/CarItem';
import { Container, ContainerMain, ItemCar } from './CatalogPage.styled';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ModalLearnMore } from 'components/Modal/Modal';

export const CatalogPage = ({ cars, onClick, addFavorite, favorites }) => {
  const [isOpen, setIsOpen] = useState();
  const [dataOneCar, setdataOneCar] = useState({});
  const toggleModal = () => setIsOpen(!isOpen);

  const onModal = car => {
    // console.log(car);
    setIsOpen(!isOpen);
    setdataOneCar(car);
  };

  return (
    <ContainerMain>
      <Container>
        {cars.map(car => (
          <ItemCar key={car.id}>
            <CartItem
              car={car}
              addFavorite={addFavorite}
              onClickLearnMore={onModal}
              favorites={favorites}
            />
          </ItemCar>
        ))}
      </Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
      </div>
      {isOpen && (
        <ModalLearnMore open={isOpen} onClose={toggleModal} car={dataOneCar} />
      )}
    </ContainerMain>
  );
};
