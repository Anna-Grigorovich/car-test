import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CatalogPage } from 'pages/Catalog/CatalogPage';
import { fetchCars } from 'service/cars-api';

axios.defaults.baseURL = 'https://64943fad0da866a953676a2d.mockapi.io/';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const handleClickLoad = () => {
    setPage(prev => prev + 1);
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
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/catalog"
            element={<CatalogPage cars={cars} onClick={handleClickLoad} />}
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
