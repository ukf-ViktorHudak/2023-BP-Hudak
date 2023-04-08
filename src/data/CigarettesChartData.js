const data = {
  labels: ['Zvýšila sa', 'Zostala rovnaká', 'Znížila sa', 'Neužívam tabakové výrobky'],
  datasets: [
    {
      label: 'počet %',
      data: [12.7, 9.9, 12.7, 64.8],
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
      hoverOffset: 60
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
      text: 'Tabak',
      position: 'bottom',
      align: 'center',
      color: '#2B3467',
      font: {
        size: 30,
        family: 'Istok Web'
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