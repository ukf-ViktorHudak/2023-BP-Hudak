import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './DoghnutChartComponent.css'

ChartJS.register(ArcElement, Tooltip, Legend);

function DoghnutChartComponent(props) {
    return (
        <div className='doghnut-chart-div'>
            <Doughnut data={props.data} options={props.options} />
            
        </div>

    );
}

export default DoghnutChartComponent;