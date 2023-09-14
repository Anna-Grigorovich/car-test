import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Container>
      <h1>Choose your rental car.</h1>
      <Button variant="contained">
        <Link to="/catalog"> Click here</Link>
      </Button>
    </Container>
  );
};
