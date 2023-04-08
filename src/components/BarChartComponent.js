import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './BarChartComponent.css'

ChartJS.register(ArcElement, Tooltip, Legend);

function BarChartComponent(props) {
    return (
        <div className='bar-chart-div'>
            <Bar data={props.data} options={props.options} />
        </div>
    );
}

export default BarChartComponent;