const data = {
  labels: ['Áno, vycestoval/a som', 'Áno, zrušil/a som to', 'Nie'],
  datasets: [
    {
      label: 'počet %',
      data: [52.1, 15.5, 32.4],
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffce56',
      ],
      hoverBackgroundColor: [
        '#ff2857',
        '#18a1fc',
        '#ffb700e1',
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
      text: 'Na Slovensko',
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