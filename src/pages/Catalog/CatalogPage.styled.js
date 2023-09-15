import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;

  // flex-wrap: wrap; /* Разрешаем перенос карточек на новую строку */
  // justify-content: space-between; /* Равномерное распределение между карточками */
  // gap: 29px; /* Задаем расстояние между карточками */
`;

export const ItemCar = styled.li`
  // width: 274px;
  border: 1px solid #ccc;
  flex-basis: calc((100% - 29px) / 4);
  position: relative;
  margin-bottom: 50px;
  // flex-basis: calc((100% - 29px) / 4);
  // position: relative;
  // flex: 0 1 calc(25% - 29px);
`;
