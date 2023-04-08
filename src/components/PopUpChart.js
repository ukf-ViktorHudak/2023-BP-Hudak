import React from 'react';
import Popup from 'reactjs-popup';
import './PopUpChart.css'
import PopUpChartComponent from './PopUpChartComponent';

function PopUpChart(props) {
    return (
        <div style={{display:'flex', alignItems: 'center', flexDirection:'column'}}>
            <Popup
                contentStyle={{ width: "80vw", height: '80vh', borderRadius: '13px' }}
                trigger={<button className="button"> Zobraziť dôvody zrušenia dovoleniek </button>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="content">
                            {' '}
                            <PopUpChartComponent data={props.data} options={props.options}></PopUpChartComponent>
                        </div>
                        <div className="actions">
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
};
export default PopUpChart;