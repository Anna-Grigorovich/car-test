import { Modal } from '@mui/material';
import {
  Accessories,
  ButtonClose,
  CloseIcon,
  Description,
  Img,
  ItemInfo,
  ListInfo,
  ListInfoAccessories,
  ModalWrap,
  P,
  Rental,
  RentalItem,
  RentalSpan,
  Span,
} from './Modal.styled';
import sprite from '../../ButtonFavotite/sprite.svg';

export const ModalLearnMore = ({ open, onClose, car }) => {
  const address = car.address;
  const parts = address.split(', ');
  const city = parts[1];
  const country = parts[2];
  const rentalConditions = car.rentalConditions;
  const conditionsArray = rentalConditions.split('\n');
  // Функция для выделения чисел синим цветом
  const highlightNumbers = text => {
    // Используем регулярное выражение для поиска чисел в строке
    const numbers = text.match(/\d+/g);

    if (numbers) {
      // Если найдены числа, заменяем их в строке на синий цвет
      numbers.forEach(number => {
        text = text.replace(
          number,
          `<span style="color: #3470ff; font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;">${number}</span>`
        );
      });
    }

    return text;
  };
  console.log(car.img);
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal learn more"
      aria-describedby="get more information about chosen car"
      slotProps={{
        backdrop: {
          sx: {
            width: '541px',
            height: '752px',
            backgroundColor: 'rgba(18, 20, 23, 0.50)',
            backdropFilter: 'blur(6px)',
          },
        },
      }}
    >
      <ModalWrap>
        <ButtonClose type="button" onClick={onClose}>
          <CloseIcon>
            <use
              width={'18px'}
              height={'18px'}
              href={sprite + '#icon-close'}
            ></use>
          </CloseIcon>
        </ButtonClose>
        <Img src={car.img} alt="car" />
        <P>
          {car.make} <Span>{car.model}</Span>, {car.year}
        </P>
        <ListInfo>
          <ItemInfo>{city}</ItemInfo>
          <ItemInfo>{country}</ItemInfo>
          <ItemInfo>Id:{car.id}</ItemInfo>
          <ItemInfo>{car.year}</ItemInfo>
          <ItemInfo>{car.type}</ItemInfo>
          <ItemInfo>Fuel Consumption:{car.fuelConsumption}</ItemInfo>
          <ItemInfo>Engine Size:{car.engineSize}</ItemInfo>
        </ListInfo>
        <Description>{car.description}</Description>
        <Accessories>Accessories and functionalities:</Accessories>
        <ListInfoAccessories>
          {car.accessories.map((accessory, index) => (
            <ItemInfo key={index}>{accessory}</ItemInfo>
          ))}
        </ListInfoAccessories>
        <Rental>Rental Conditions: </Rental>{' '}
        <ul>
          {conditionsArray.map((condition, index) => (
            <RentalItem
              key={index}
              dangerouslySetInnerHTML={{ __html: highlightNumbers(condition) }}
            />
          ))}
          <RentalItem>
            Milis:
            <RentalSpan>{car.mileage}</RentalSpan>
          </RentalItem>
          <RentalItem>
            Price:
            <RentalSpan>{car.rentalPrice}</RentalSpan>
          </RentalItem>
        </ul>
      </ModalWrap>
    </Modal>
  );
};
