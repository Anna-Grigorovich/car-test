// import { styled } from '@mui/material/styles';
const { styled } = require('styled-components');

export const ModalWrap = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '540px',
  height: '540px',
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  padding: '40px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const ButtonClose = styled('button')({
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '24px',
  height: '24px',

  //   display: 'flex',
  //   justifyContent: 'center',
  alignItems: 'center',
  color: ' #121417',
  backgroundColor: 'transparent',

  border: 'none',
  transition: ' 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    color: '#0B44CD',
    transform: 'scale(1.2)',
  },
});

export const CloseIcon = styled('svg')({
  //   width: '30px',
  //   height: '30px',
  //   stroke: 'currentcolor',
  width: '24px',
  height: '24px',
  stroke: 'currentcolor',
  display: 'block',
});

export const Img = styled.img`
  height: 248px;
  //   width: 461px;
  border-radius: 14px;
  margin-bottom: 14px;
  object-fit: cover;
  //   background-size: auto;
  //   object-position: center bottom;
`;

export const P = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-nottom: 8px;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const ListInfo = styled.div`
  // color: rgba(18, 20, 23, 0.5);
  // font-family: Manrope;
  // font-size: 12px;
  // font-style: normal;
  // font-weight: 400;
  // line-height: 18px;
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // white-space: nowrap;
  // overflow: hidden; /* Скрываем содержимое, которое не помещается в контейнер */
  // text-overflow: ellipsis; /

  width: 277px;
  margin-bottom: 14px;
`;

export const ItemInfo = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  margin-right: 6px;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: none;
  }
`;
export const Description = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`;
export const Accessories = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
`;
export const ListInfoAccessories = styled.div`
  margin-bottom: 24px;
`;
export const Rental = styled.p`
  margin-bottom: 8px;
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const RentalItem = styled.li`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
  border-radius: 35px;
  background: #f9f9f9;
  display: inline;
  padding: 7px 14px;
  //   &:first-child {
  //     display: block;
  //     margin-bottom: 8px; /* или другой отступ, который вам нужен */
  //   }

  //   /* Остальные элементы остаются с inline-отображением */
  //   &:not(:first-child) {
  //     display: inline;
  //   }
`;
export const RentalSpan = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
  //   margin-right: 8px;
`;
