import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import './Chart.css'

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart(props) {
    return (
        <div className='chart-div'>
            <Pie data={props.data} options={props.options} />
        </div>
    );
}

export default Chart;