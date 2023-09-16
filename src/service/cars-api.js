import axios from 'axios';
axios.defaults.baseURL = 'https://64943fad0da866a953676a2d.mockapi.io/';
export const fetchCars = async page => {
  try {
    const { data } = await axios.get(`/cars?page=${page}&limit=8`);
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCarsId = async id => {
  try {
    const { data } = await axios.get(`/cars/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
