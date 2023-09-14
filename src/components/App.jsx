import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CatalogPage } from 'pages/Catalog/CatalogPage';

// import { fetchCars } from 'service/car-api';
axios.defaults.baseURL = 'https://64943fad0da866a953676a2d.mockapi.io/';

export const App = () => {
  const [cars, setCars] = useState([]);
  const fetchCars = async () => {
    const { data } = await axios.get('/cars');
    return setCars(data);
  };

  useEffect(() => {
    fetchCars();
  }, []);
  console.log(cars);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage cars={cars} />} />
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
