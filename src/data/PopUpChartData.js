const data = {
    labels: ['Strach z pandémie', 'Neschopnosť vycestovať', 'Finančné dôvody', 'Iné'],
    datasets: [
        {
            label: 'Slovensko',
            data: [0, 90.9, 27.3, 0],
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
            label: 'Zahraničie',
            data: [32.1, 67.9, 28.6, 7.2],
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
        }
    ],
};


const options = {
    indexAxis: 'y',
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
            text: 'Toto sú najčastejšie dôvody, ktoré viedli respondentov k zrušeniu plánovanej dovolenky',
            position: 'bottom',
            align: 'center',
            color: '#2B3467',
            font: {
                size: 25,
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
                label: (ttItem) => `${ttItem.dataset.label}: ${ttItem.parsed.x}%`
            }
        },
    },
};

export { data, options };