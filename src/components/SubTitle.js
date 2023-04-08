import './SubTitle.css';

function SubTitle(props) {
    return (
        <div className='sub-title'>
            <h2>{props.text}</h2>
        </div>
    );
}

export default SubTitle;