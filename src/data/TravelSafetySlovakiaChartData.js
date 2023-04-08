const data = {
    labels: ['Zvýšila sa', 'Zostala rovnaká', 'Znížila sa', 'Nevyužívam'],
    datasets: [
        {
            label: 'MHD',
            data: [7, 19.7, 33.8, 39.4],
            backgroundColor: [
                '#ff6384',
            ],
            hoverBackgroundColor: [
                '#ff2857',
            ],
            borderColor: [
                '#2B3467',
            ],
            hoverBorderWidth: 5,
            borderWidth: 2,
        },
        {
            label: 'Verejná doprava',
            data: [9.9, 23.9, 39.4, 26.8],
            backgroundColor: [
                '#36a2eb',
            ],
            hoverBackgroundColor: [
                '#18a1fc',
            ],
            borderColor: [
                '#2B3467',
            ],
            hoverBorderWidth: 5,
            borderWidth: 2,
        },
        {
            label: 'Osobný automobil',
            data: [36.6, 38, 12.7, 12.7],
            backgroundColor: [
                '#ffce56',
            ],
            hoverBackgroundColor: [
                '#ffb700',
            ],
            borderColor: [
                '#2B3467',
            ],
            hoverBorderWidth: 5,
            borderWidth: 2,
        },
        {
            label: 'Bezmotorové vozidlo',
            data: [14.1, 32.4, 2.8, 50, 7],
            backgroundColor: [
                '#4bc0c0'
            ],
            hoverBackgroundColor: [
                '#00c8c8'
            ],
            borderColor: [
                '#2B3467',
            ],
            hoverBorderWidth: 5,
            borderWidth: 2,
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
    scales: {
        x: {
            ticks: {
                color: '#2B3467',
                font: {
                    size: 20,
                    weight: "bold"
                }
            },
            grid: {
                color: '#2B3467',
                borderColor: 'green'
            }
        },
        y: {
            ticks: {
                color: '#2B3467',
                font: {
                    size: 15,
                    weight: "bold"
                }
            },
            grid: {
                color: '#2B3467',
                borderColor: 'green'
            }
        }
    },
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: '#2B3467',
                font: {
                    size: 20,
                    weight: "bold"
                }
            }
        },
        title: {
            display: true,
            text: 'Doprava',
            position: 'bottom',
            align: 'center',
            color: '#2B3467',
            font: {
                size: 30,
                
            },
        },
        datalabels: {
            display: false,
            borderRadius: 25,
            borderWidth: 3,
            color: '#2B3467',
            font: {
                weight: "bold"
            },
            padding: 6
        },
        tooltip: {
            callbacks: {
                label: (ttItem) => `${ttItem.dataset.label}: ${ttItem.parsed.y}%`
            }
        },
    },
};

export { data, options };