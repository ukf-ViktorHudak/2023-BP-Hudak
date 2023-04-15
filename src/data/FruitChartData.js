const data = {
  labels: ['Zvýšila sa', 'Zostala rovnaká', 'Znížila sa', 'Nekonzumujem'],
  datasets: [
    {
      label: 'počet %',
      data: [32.4, 45.1, 22.5, 0],
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffce56',
        '#4bc0c0'
      ],
      hoverBackgroundColor: [
        '#ff2857',
        '#18a1fc',
        '#ffb700e1',
        '#00c8c8'
      ],
      borderColor: [
        '#2B3467',
      ],
      borderWidth: 2,
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
      display: true,
      text: 'Ovocie a zelenina',
      position: 'bottom',
      align: 'center',
      color: '#2B3467',
      font: {
        size: 30,
      },
    },
    
    legend: {
      display: true,
      position: 'right',
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