import './Footer.css'

function Footer() {
    return (
        <div className='footer-summary'>
            <div className='footer-summary-node'>
                <p className='footer-summary-node-left'>Autor:&emsp;<span className='name-text'>Viktor Hudák</span></p>
                <p className='footer-summary-node-right'>Táto webová stránka bola spracovaná pre účel bakalárskej práce na tému:  </p>
    
            </div>
            <div className='footer-summary-node'>
                <p className='footer-summary-node-left'>Rok:&emsp;<span className='name-text'>2023</span></p>
                <p className='footer-summary-node-right'><span className='name-text'>Tvorba infografiky s prvkami animácie</span></p>
                
            </div>
            <div className='footer-summary-node'>
                <p className='footer-summary-node-left'>Účel:&emsp;<span className='name-text'>Projekt k bakalárskej práci</span></p>
            </div>
        </div>
    );
}

export default Footer;