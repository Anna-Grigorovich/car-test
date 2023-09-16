import styled from '@emotion/styled';
export const ContainerMain = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

export const Container = styled.ul`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  // list-style: none;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ItemCar = styled.li`
  border: 1px solid #ccc;

  flex-basis: calc((100% - 87px) / 4);
  position: relative;
  gap: 29px;
  height: 450px;
  width: 274px;
  position: relative;
  overflow-wrap: break-word;
`;
