import { Grid } from '@mui/material';
import { useWindowSize } from 'react-use';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
const BarChart = ({ chartData }) => {
  // eslint-disable-next-line
  const { width } = useWindowSize();
  const options = {
    indexAxis: width <= 480 && 'y',
    barThickness: width <= 480 ? 15 : 38,
    layout:{
        autoPadding:true,
    },
    scales:{
        x:{
            display:true,
            grid: {
                display: false
              },
            ticks: {
                display: width >= 480 ? true : false,
                align:'top',
            },
            border:{
                display: width >= 480 ? true : false,
            }
              

        },
        y:{
            display:true,
            ticks: {
                display: width <= 480 ? true : false,
            },
            border:{
                display:false,
            },
            grid: {
                display: width >= 480 ? true : false
              }
            
        }
        
    },
    plugins:{
        datalabels: {
            display:true,
            anchor: 'end',
            align: width >= 480 ?'top':'top',
            formatter: (val, context) => (`${val.toFixed(2)} UAH`),
            font: {
                weight: 400,
                size: 12,
                color:'#52555F'
            },
           
        },
        
        legend:{
            display:true,
            position:'top',
            labels:'food',
        }
    }
    
    
  };
  return (
    
      <Bar 
      data={chartData}
      options={options}
      plugins={[ChartDataLabels]}
      style={{marginTop:'32px',padding:'20px 33px',backgroundColor:'white',borderRadius:'30px'}}
      />
    
  );
};
export default BarChart;
