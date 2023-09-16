const { default: styled } = require('styled-components');
// export const Box = styled.div`
//   width: 274px;
// `;
export const Img = styled.img`
  height: 268px;
  width: 274px;
  border-radius: 14px;
`;
export const ImgWrap = styled.div`
  position: relative;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const P = styled.p`
  font-family: Manrope;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 14px;
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

  width: 274px;
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
