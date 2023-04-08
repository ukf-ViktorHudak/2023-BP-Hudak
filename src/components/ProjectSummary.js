import './ProjectSummary.css'
import zdravie from '../icons/zdravie.png';
import zdravie2 from '../icons/zdravie2.png';
import depresia from '../icons/depresiaa.png';
import uvaznenie from '../icons/uvaznenie.png';
import socialne_vazby from '../icons/socialne_vazby.png';


function ProjectSummary() {
    return (
        <div className='project-summary'> 
            <div className='project-summary-node'>
                <div className='project-summary-node-div'>
                    <img className='right-img' src={zdravie} alt="Logo" />
                    <p className='project-summary-node-left'><span className='number'>31%</span> ľudí malo veľký, <br></br>až extrémny strach o svoje zdravie</p>
                </div>
                <div id="arrowAnim">
                        <div class="arrowSliding">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay1">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay2">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay3">
                            <div class="arrow"></div>
                        </div>
                        </div>

                <p>&emsp;</p>
            </div>

            <div className='project-summary-node'>
                <p>&emsp;</p>
                <div id="arrowAnim">
                        <div class="arrowSliding">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay1">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay2">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay3">
                            <div class="arrow"></div>
                        </div>
                        </div>                
                <div className='project-summary-node-div'>
                    <img className='right-img' src={zdravie2} alt="Logo" />
                    <p className='project-summary-node-right'>až <span className='number'>58%</span> ľudí malo veľký, <br></br>až extrémny strach o zdravie niekoho iného</p>
                </div>
                
            </div>

            <div className='project-summary-node'>
                <div className='project-summary-node-div'>
                    <img className='right-img' src={depresia} alt="Logo" />
                    <p className='project-summary-node-left'>pri <span className='number'>34%</span> respondentov sa<br></br>prejavili výrazné  príznaky úzkosti a depresie</p>
                </div>
                <div id="arrowAnim">
                        <div class="arrowSliding">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay1">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay2">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay3">
                            <div class="arrow"></div>
                        </div>
                        </div>
                <p>&emsp;</p>
            </div>

            <div className='project-summary-node'>
                <p>&emsp;</p>
                <div id="arrowAnim">
                        <div class="arrowSliding">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay1">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay2">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay3">
                            <div class="arrow"></div>
                        </div>
                        </div>
                <div className='project-summary-node-div'>
                    <img className='right-img' src={uvaznenie} alt="Logo" />
                    <p className='project-summary-node-right'>iba <span className='number'>10%</span> ľudí malo počas<br></br> pandémie extrémny stres z uväznenia v domácnosti</p>
                </div>
            </div>

            <div className='project-summary-node'>
                <div className='project-summary-node-div'>
                    <img className='right-img' src={socialne_vazby} alt="Logo" />
                    <p className='project-summary-node-left'><span className='number'>38%</span> respondentov sa veľmi<br></br> obávalo o udržanie sociálnych väzieb</p>
                </div>

                <p>&emsp;</p>
            </div>


        </div >
    );
}

export default ProjectSummary;