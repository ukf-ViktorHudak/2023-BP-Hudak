import './ProjectDescription.css'
import man from '../icons/man.png';
import kraj from '../icons/kraj.png';
import cislo2 from '../icons/cislo2.png';
import cislo3 from '../icons/cislo3.png';

function ProjectDescription() {
    return (
        <div className='project-description'>
            <div className='project-description-top-text'>
                <p>Pandémia <span className='description-highlight'>COVID-19</span> priniesla so sebou veľa zmien v životoch ľudí z celého sveta.</p>
                <p>Okrem zdravotných dopadov, mala pandémia vplyv na mnoho aspektov každodenného života.</p>
                <p>Táto infografika sa zameriava na sociálne dopady pandémie <span className='description-highlight'>COVID-19</span> vizualizuje zmeny <br></br>  <span style={{textDecoration: 'underline'}}>stravovacích návykov, osobnej doprave</span> a ďalších aspektoch života počas pandémie.</p>

            </div>
            <br></br>
            <br></br>
            <h2>Kto boli naši respondenti?</h2>

            <div className='project-description-node'>
                <div className='project-description-node-div'>
                <text className='number-of-res'>V dotazníku nám odpovedalo respondentov</text>
                <img className='right-img' src={cislo2} alt="Logo" />
                </div>
                <p>&emsp;</p>
                
            </div>

            <div className='project-description-node'>
                <p>&emsp;</p>
                <div className='project-description-node-div'>
                    <img className='right-img' src={man} alt="Logo" />
                    <p><span className='number'>53%</span> respondentov boli muži</p>
                </div>
            </div>

            
            <div className='project-description-node'>
                <div className='project-description-node-div'>
                <text className='number-of-res'>Priemerný vek našich <br></br>respondentov bol</text> 
                <img className='age-img' src={cislo3} alt="Logo" />
                </div>
                
                <p>&emsp;</p>
            </div>
            <div className='project-description-node'>
                <p>&emsp;</p>
                <div className='project-description-node-div'>
                    <img className='right-img' src={kraj} alt="Logo" />
                    <p><span className='number'>45%</span> respondentov bolo z Trnavského kraja</p>
                </div>

            </div>

        </div>
    );
}

export default ProjectDescription;