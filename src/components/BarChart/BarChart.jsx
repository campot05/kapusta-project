import { useWindowSize } from 'react-use';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { StyledBarChart } from './BarChart.styled';
import { useLayoutEffect } from 'react';

const BarChart = ({ chartData }) => {
  const { width } = useWindowSize();
  let numOfElem = chartData.labels.length;
    const maintainBarThickness = () => {
        const ratio = {
            mobile:5,
            tablet:29,
            desktop:40,
        }

        if(width <= 480 && numOfElem >= 13){
            return ((width - (numOfElem-1)*ratio.mobile)/numOfElem).toFixed(0)
        }else if(width <= 480 && numOfElem <= 13){
            return 20;
        }else if(width <= 768 && numOfElem >= 10){
            return ((width - (numOfElem-1)*ratio.tablet)/numOfElem).toFixed(0)
        }else if(width <= 768 && numOfElem <=10){
            return 95;
        }else if(width >= 768 && numOfElem >= 9){
            return ((width - (numOfElem-1)*ratio.desktop)/numOfElem).toFixed(0)
        }else if(width >= 768 && numOfElem <= 9){
            return 100;
        }
    }
    useLayoutEffect(() => {
      let chartHeight = 400;
      const chartBox = document.querySelector('.chart-box')
      if(numOfElem >= 12 && width <= 480){
        let newHeight =(numOfElem - 12)* 60 + chartHeight;
        chartBox.style.height = `${newHeight}px`;
      }else if(numOfElem <=3 && width <= 480){
        chartBox.style.height = `200px`;
      }
      else{
        chartBox.style.height = `410px`;
      }
      // eslint-disable-next-line
    },[numOfElem])

  const options = {
    indexAxis: width <= 480 && 'y',
    barThickness: maintainBarThickness(),
    // barPercentage:0.5,
    // categoryPercentage: .5,
    responsive: true,
    maintainAspectRatio:false,
    scales: {
      x: {
        display: true,
        max: Math.max(...chartData.datasets[0].data) * 1.3,
        grid: {
          display: false,
        },
        ticks: {
          display: width >= 480 ? true : false,
          align: 'top',
          // labelOffset:50,
        },
        border: {
          display: width >= 480 ? true : false,
        },
      },
      y: {
        display: true,
        max: Math.max(...chartData.datasets[0].data) * 1.2,
        ticks: {
          z: 1,
          padding: 10,
          mirror: true,
          display: width <= 480 ? true : false,
        },
        border: {
          display: false,
        },
        grid: {
          display: width >= 480 ? true : false,
        },
      },
    },

    plugins: {
      datalabels: {
        anchor: 'end',
        align: width >=480 ? 'top':'top',
        rotation:width >=480 ? -15 : 0 ,
        padding:{
          left:0,
          bottom:25,
        },
        offset:-4,
        formatter: (val, ctx) => `${val.toFixed(0)} UAH`,
        font: {
          weight: 400,
          size: 12,
          color: '#52555F',
        },
      },

      legend: {
        display: false,
      },
    },
  };
  return (
    <StyledBarChart className='chart-box'>
      <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
    </StyledBarChart>
  );
};
export default BarChart;
