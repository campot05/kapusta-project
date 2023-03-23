import { Grid, Divider } from '@mui/material/';
import { nanoid } from '@reduxjs/toolkit';
import { ExpIncMenuItem } from 'components/ExpIncMenuItem/ExpIncMenuItem';
import { useWindowSize } from 'react-use';

export const ExpIncMenu = ({ categories = [] }) => {
    const { width, height } = useWindowSize();
  return (
    <Grid
      container
    //   spacing={{ xs: 3, md: 4 }}
    //   columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing='30px'
        rowSpacing='20px'
      style={{ marginTop: '20px', backgroundColor: 'white' }}
      justifyContent="center"
      alignItems="center"
    >
      {categories.map((item, idx) => {
        return (
            <>
          <Grid item xs={4} sm={3} md={2} key={idx}>
            <ExpIncMenuItem  item={item} />
          </Grid>
          {width <= 480 && (idx + 1)%3 === 0 && 
          <Grid item xs={12}>
          <Divider  orientation="horizontal" variant='fullWidth'/>
          </Grid> 
          }
          </>
          
        );
      })}
    </Grid>
  );
};
