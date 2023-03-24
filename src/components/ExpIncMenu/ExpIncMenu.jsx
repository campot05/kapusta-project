import { Grid, Divider } from '@mui/material/';
import { ExpIncMenuItem } from 'components/ExpIncMenuItem/ExpIncMenuItem';
import { useWindowSize } from 'react-use';
import { StyledGrid } from './ExpIncMenu.styled';
import React from 'react';
export const ExpIncMenu = ({
  categories = [],
  children,
  onCategoryClick = () => null,
}) => {
  const { width } = useWindowSize();
  return (
    <StyledGrid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
    >
      {children}
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: '20px' }}
      >
        {categories.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <Grid item xs={4} sm={3} md={2} key={idx}>
                <ExpIncMenuItem item={item} onCategoryClick={onCategoryClick} />
              </Grid>
              {width <= 480 && (idx + 1) % 3 === 0 && (
                <Grid item xs={12}>
                  <Divider
                    orientation="horizontal"
                    sx={{ borderBottomWidth: 2 }}
                    variant="middle"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  />
                </Grid>
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    </StyledGrid>
  );
};
