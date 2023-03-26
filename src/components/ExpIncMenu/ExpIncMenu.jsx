import React from 'react';
import { Grid, Divider, Typography } from '@mui/material/';
import { ExpIncMenuItem } from 'components/ExpIncMenuItem/ExpIncMenuItem';
import { useWindowSize } from 'react-use';
import { StyledGrid } from './ExpIncMenu.styled';
import { FinanceAmico } from 'images/images';
// import {motion} from 'framer-motion';

const animatedItem = {
  hidden: { opacity: 0, scale:0 },
  visible: {
    opacity: 1,
    
   scale:1,
    transition: {
      duration:0.25,
    }
  }
};
const animTitle= {
  hidden: { opacity: 0, x:100 },
  visible: {
    opacity: 1,
   x:0,
   transition: {
    type: 'spring',
    damping: 12,
    stiffness: 100,
  },
  }
};

const animSvg = {
  hidden: { 
    opacity: 0,
     x:-100 ,
     transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
    },
  visible: {
    opacity: 1,
    
   x:0,
   transition: {
    type: 'spring',
    damping: 12,
    stiffness: 100,
  },
  }
};

export const ExpIncMenu = ({
  categories = [],
  children,
  onCategoryClick = () => null,
}) => {
  const { width } = useWindowSize();
  return (
    <StyledGrid
      container
      // component={motion.div}
      // variants={animatedItem}
      // initial='hidden'
      // animate='visible'
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
        {categories.length > 0 ? categories.map((item, idx) => {
          return (
            <React.Fragment 
            key={idx}
            >
              <Grid 
              item 
              xs={4} 
              sm={3} 
              md={2} 
              key={idx}>
                <ExpIncMenuItem 
                idx={idx}
                item={item} 
                onCategoryClick={onCategoryClick} />
              </Grid>
              {width <= 480 && ((idx + 1) % 3 === 0 || idx === categories.length-1 ) && (
                <Grid item xs={12}>
                  <Divider
                    orientation="horizontal"
                    sx={{ borderBottomWidth: 2 ,bgcolor: "secondary.light"}}
                    variant="middle"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  />
                </Grid>
              )}
            </React.Fragment>
          );
        }):(<div>
        <Typography
            variant="button"
            // component={motion.p}
            // variants={animTitle}
            // initial='hidden'
            // animate='visible'
          >
            no categories to show!
          </Typography>
          {/* <motion.div 
          variants={animSvg}
          initial='hidden'
          animate='visible'
          > */}
          <FinanceAmico/>
          {/* </motion.div> */}
              </div>)}
      </Grid>
    </StyledGrid>
  );
};
