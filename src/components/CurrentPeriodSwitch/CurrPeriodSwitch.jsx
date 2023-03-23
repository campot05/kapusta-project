import { Typography } from "@mui/material"
import { CarouselItem } from "components/CarouselItem/CarouselItem"
import { StyledCarouselDiv } from "components/CarouselItem/CarouselItem.styled"

export const CurrPeriodSwitch = () => {
    return (
        <StyledCarouselDiv>
        <Typography variant="h5" component="p">Current period: </Typography>
        <CarouselItem items={['NOVEMBER 2019', 'DECEMBER 2019', 'JANUARY 2020']} id='js-period' />
        </StyledCarouselDiv>
    )
}