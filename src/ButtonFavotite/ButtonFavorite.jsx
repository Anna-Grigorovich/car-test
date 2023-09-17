import sprite from './sprite.svg';
import { useState } from 'react';
import { Button, ButtonIcon } from './ButtonFavorite.styled';

// export const ButtonFavorite = ({ id, addFavorite, favorites }) => {
//   const [isLiked, setIsLiked] = useState(favorites.includes(id));

//   const handleButtonLikeClick = e => {
//     setIsLiked(!isLiked);
//     addFavorite(e.currentTarget);
//     // console.log(e.currentTarget);
//   };

//   return (
//     <Button
//       onClick={handleButtonLikeClick}
//       aria-label="like"
//       id={id}
//       sx={{ opacity: isLiked ? 1 : 0.8 }}
//     >
//       <ButtonIcon isLiked={isLiked}>
//         <use href={sprite + '#icon-like'}></use>
//       </ButtonIcon>
//     </Button>
//   );
// };
export const ButtonFavorite = ({ id, addFavorite, favorites }) => {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem('favorite')?.includes(id) || false
  );

  const handleButtonLikeClick = e => {
    setIsLiked(!isLiked);
    addFavorite(e.currentTarget);
    // console.log(e.currentTarget);
  };

  return (
    <Button
      onClick={handleButtonLikeClick}
      aria-label="like"
      id={id}
      sx={{ opacity: isLiked ? 1 : 0.8 }}
    >
      <ButtonIcon isLiked={isLiked}>
        <use href={sprite + '#icon-like'}></use>
      </ButtonIcon>
    </Button>
  );
};
