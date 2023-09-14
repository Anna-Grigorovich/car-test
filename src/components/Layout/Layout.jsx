import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const StyledLink = styled(NavLink)`
  color: white;
  font-weight: 500;
  font-style: normal;
  font-family: Manrope;
  &.active {
    color: black;
  }
`;
export const Layout = () => {
  return (
    <>
      <header>
        <AppBar component="nav">
          <Toolbar sx={{ gap: '20px' }}>
            <StyledLink to="/">Home</StyledLink>

            <StyledLink to="/catalog">Catalog</StyledLink>

            <StyledLink to="/favorites">Favorites</StyledLink>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
