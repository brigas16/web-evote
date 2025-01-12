import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.piecelabel.js'

const PieChart = () => {
    const dataChart = {
        labels: ['Calon 1', 'Calon 2'],
        datasets: [
          {
            data: [6, 50],
            backgroundColor: [
              '#356AD1',
              '#FF6E30',
            ],
          },
        ],
      }
    
      const option = {
        tooltips: {
          callbacks: {
            pieceLabel: {
              fontColor: 'black',
              fontSize: 20,
            },    
            label: (tooltipItem, data) => {
              const dataset = data.datasets[tooltipItem.datasetIndex]
              const total = dataset.data.reduce((prevValue, currValue) => prevValue + currValue)
              const currValue = dataset.data[tooltipItem.index]
              const percentage = Math.floor(((currValue / total) * 100) + 0.5)
        
              return `${currValue} (${percentage}%)`
            },
            title: (tooltipItem, data) => data.labels[tooltipItem[0].index],
          },
        },
        legend: {
          display: true,
          position: 'right', 
          labels: {
            boxWidth: 15,
          },  
        },
        pieceLabel: {
          fontColor: '#fff',
          fontSize: 18,
        },
      }
    
    return (
        <div>
            <Pie 
                data={dataChart} 
                options={option}
            />             
        </div>
    )
}

export default PieChart
