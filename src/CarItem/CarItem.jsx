import { Button } from '@mui/material';
import {
  Div,
  Img,
  ImgWrap,
  ItemInfo,
  ListInfo,
  P,
  Span,
} from './CarItem.styled';
import { ButtonFavorite } from 'ButtonFavotite/ButtonFavorite';

export const CartItem = ({ car, addFavorite, isLike, onClickLearnMore }) => {
  const address = car.address;
  const parts = address.split(', ');
  const city = parts[1];
  const country = parts[2];

  return (
    <>
      <ImgWrap>
        <ButtonFavorite id={car.id} addFavorite={addFavorite} isLike={isLike} />
        <Img src={car.img} alt="car" />
      </ImgWrap>
      <Div>
        <P>
          {car.make} <Span>{car.model}</Span>, {car.year}
        </P>
        <P>{car.rentalPrice}</P>
      </Div>

      <ListInfo>
        <ItemInfo>{city}</ItemInfo>
        <ItemInfo>{country}</ItemInfo>
        <ItemInfo>{car.rentalCompany}</ItemInfo>
        <ItemInfo>{car.type}</ItemInfo>
        <ItemInfo>{car.model}</ItemInfo>
        <ItemInfo>{car.id}</ItemInfo>
        <ItemInfo>{car.accessories[1]}</ItemInfo>
      </ListInfo>
      <Button
        variant="contained"
        onClick={() => onClickLearnMore(car)}
        sx={{
          width: '274px',
          height: '44px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '12px',
          background: '#3470FF',
          color: 'white',
          fontFamily: 'Manrope',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '20px',
          textTransform: 'none',
          display: 'block',
          margin: ' 0 auto',
          marginTop: '28px',
        }}
      >
        {' '}
        Learn more
      </Button>
    </>
  );
};
