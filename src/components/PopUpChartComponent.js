import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './PopUpChartComponent.css'

ChartJS.register(ArcElement, Tooltip, Legend);

function PopUpChartComponent(props) {
    return (
        <div className='pop-up-bar-chart-div'>
            <Bar data={props.data} options={props.options} />
            
        </div>

    );
}

export default PopUpChartComponent;