const data = {
  labels: ['Zvýšila sa', 'Zostala rovnaká', 'Znížila sa', 'Nepožívam alkohol'],
  datasets: [
    {
      label: 'počet %',
      data: [5.6, 42.3, 33.8, 18.3],
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
      text: 'Alkohol',
      position: 'bottom',
      align: 'left',
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
      color: '#FCFFE7',
      font: {
        weight: "bold"
      },
      padding: 6
    },
    tooltip: {
      callbacks: {
        label: (ttItem) => `${ttItem.parsed} %`
      }}}}
export { data, options };