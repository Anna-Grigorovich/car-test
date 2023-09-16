import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import { CatalogPage } from 'pages/Catalog/CatalogPage';
import { fetchCars } from 'service/cars-api';
import { FavoritePage } from 'pages/FavoritePage/FavoritePage';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const handleClickLoad = () => {
    setPage(prev => prev + 1);
  };

  const addFavorite = e => {
    // console.log(e.id);
    const id = parseInt(e.id); // Преобразует id в число
    const updatedFavorites = [...favorites];

    // Проверяем, есть ли id в массиве favorites
    const index = updatedFavorites.indexOf(id);

    if (index === -1) {
      // Если id не найден, то добавляем его в массив
      updatedFavorites.push(id);
    } else {
      // Если id найден, то удаляем его из массива
      updatedFavorites.splice(index, 1);
    }

    // Обновляем состояние favorites
    setFavorites(updatedFavorites);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCars(page);
        if (page === 1) setCars(data);
        if (page > 1) setCars(prev => [...prev, ...data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    // Фильтруем список автомобилей при изменении favorites
    const filtered = cars.filter(car => favorites.includes(car.id));
    setFilteredCars(filtered);
  }, [favorites, cars]); // Обновление filteredCars при изменении favorites и cars
  console.log(`filter ${filteredCars}`);
  console.log(`favorites ${favorites}`);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                cars={cars}
                onClick={handleClickLoad}
                addFavorite={addFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritePage
                filteredCars={filteredCars}
                addFavorite={addFavorite}
              />
            }
          />
          {/* <Route
            path="/catalog"
            element={<CatalogPage cars={cars} onClick={onModal} />}
          />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    </>
  );
};
