import { Typography } from '@mui/material/';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { ArrowNext,ArrowPrev } from 'images/images';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledCarouselDiv } from './CarouselItem.styled';
import { useSwitchContext } from 'contexts/SwitchProvider';



export const CarouselItem = ({items = [],id}) =>{
    const {toggle} = useSwitchContext();
     
    return(
        <StyledCarouselDiv>
        <Carousel
            className={id}
            style={{ width: '155px',display:'flex' }}
            slide={false}
            interval={null}
            indicators={false}
            nextIcon={<ArrowNext />}
            prevIcon={<ArrowPrev />}
            onSlid={() => {
                const divEl = document.querySelector(`.${id}`);
                const value = divEl.querySelector('.active.carousel-item').firstChild.textContent;
                if(id === 'js-trans'){
                    toggle(value);
                    return;
                }else if(id === 'js-period'){
                    // dispatch(getByDate)
                }
               
            } }
        >
            {items.map((item, idx) => (
                <Carousel.Item
                    key={idx}
                    style={{
                        backgroundColor: 'trasparent',
                        color: 'black',
                        marginTop: '20px',
                        textAlign: 'center',
                        margin: 'auto'
                    }}
                >
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <Typography variant="button" >
                        {item}
                    </Typography>
                    </div>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel></StyledCarouselDiv>
    )
}