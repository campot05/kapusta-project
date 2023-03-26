import { Typography } from "@mui/material";
import { StyledCarouselDiv } from "components/CarouselItem/CarouselItem.styled";
import { useSwitchContext } from "contexts/SwitchProvider";
import { ArrowNext, ArrowPrev } from "images/images";
import { Carousel } from "react-bootstrap";

export const ExpIncSwitch =({setChartToDefault=()=>null}) => {
    const {toggle} = useSwitchContext();
    return (
        <><StyledCarouselDiv>
            <Carousel
                className='js-trans'
                style={{ width: '155px', display: 'flex' }}
                slide={false}
                interval={null}
                indicators={false}
                nextIcon={<ArrowNext />}
                prevIcon={<ArrowPrev />}
                onSlid={(idx) => {
                    const divEl = document.querySelector('.js-trans');
                    const value = divEl.querySelector('.active.carousel-item').firstChild.textContent;
                    toggle(value);
                    setChartToDefault();
                } }
            >
                {['EXPENSES','INCOME'].map((item, idx) => (
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
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="button">{item}</Typography>
                        </div>
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </StyledCarouselDiv></>
    )
}