import { useWindowSize } from 'react-use';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
const BarChart = ({ chartData }) => {
 
  const { width } = useWindowSize();
  const options = {
    
    indexAxis: width <= 480 && 'y',
    barThickness: width <= 480 ? 15 : 38,
    responsive: true,
    
    scales:{
       
        x:{
            display:true,
            max:Math.max(...chartData.datasets[0].data)*1.2,
            grid: {
                display: false
              },
            ticks: {
                display: width >= 480 ? true : false,
                align:'top',
                // labelOffset:50,
                
            },
            border:{
                display: width >= 480 ? true : false,
            }
              

        },
        y:{
            display:true,
            max: Math.max(...chartData.datasets[0].data)*1.1,
            ticks: {
                z:1,
                padding:10,
                labelOffset:-15,
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
            anchor: 'end',
            align: width >= 480 ?'top':'top',
            offset:5,
            formatter: (val, context) => (`${val.toFixed(2)} UAH`),
            font: {
                weight: 400,
                size: 12,
                color:'#52555F'
            },
           
        },
        
        legend:{
            display:false,
        }
    }
    
    
  };
  return (
    
      <Bar 
      data={chartData}
      options={options}
      plugins={[ChartDataLabels]}
      style={{marginTop:'32px',padding:'10px 26px',backgroundColor:'white', borderRadius:'30px',}}
      />
     
  );
};
export default BarChart;
