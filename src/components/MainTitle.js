import './MainTitle.css';

function MainTitle(props) {
    return (
        <div className='title'>
            <h1>{props.text}</h1>
        </div>
    );
}

export default MainTitle;