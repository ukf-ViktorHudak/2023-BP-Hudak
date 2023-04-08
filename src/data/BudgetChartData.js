const data = {
  labels: ['Zostal rovnaký', 'Znížil sa asi o 25%', 'Znížil sa asi o 50%', 'Znížil sa viac ako 50%', 'Zvýšil sa'],
  datasets: [
    {
      label: 'počet %',
      data: [74.6, 7.9, 9.5, 7.9, 1.6],
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffce56',
        '#4bc0c0',
        '#6a4bc0'
      ],
      hoverBackgroundColor: [
        '#ff2857',
        '#18a1fc',
        '#ffb700e1',
        '#00c8c8',
        '#4f3498'
      ],
      borderColor: [
        '#2B3467',
      ],
      borderWidth: 3,
      hoverOffset: 50
    },
  ],
};




const options = {
  responsive: true,
  animation: {
    animateRotate: true,
    animateScale: true,
  },
  layout: {
    padding: 30
  },
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
      text: 'Rozpočet',
      position: 'bottom',
      align: 'left',
      color: '#2B3467',
      font: {
        size: 30,
      },
    },

    legend: {
      display: true,
      position: 'right',
      align:'right',
      labels: {
        color: '#2B3467',
        font: {
          size: 15,
          weight: "bold"
        }
      }
    },
    datalabels: {
      display: false,
      borderRadius: 25,
      borderWidth: 3,
      color: '#FCFFE7',
      font: {
        weight: "bold"
      },
      padding: 6
    },

    tooltip: {
      callbacks: {
        label: (ttItem) => `${ttItem.parsed} %`
      }
    }
  }
}

export { data, options };