
import { Grid } from '@mui/material';
import { useWindowSize } from 'react-use';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";


const BarChart = ({chartData}) => {
    const { width } = useWindowSize();
    return(
        <Grid
        container
        spacing={0}
        > <Bar data={chartData} />
        </Grid>
    )
};
export default BarChart;

