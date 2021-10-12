import Eightball from './Eightball';


function Reset() {

    function handleClick(){
        console.log("From handleClick of Reset")
        return {Eightball}
    }

    return (
        <div className='reset'>
            <button className='btn' onClick={handleClick}>
                Reset
            </button>
        </div>
    );
}


// Start/Reset button - on click, calls eightball?? , and changes to "Reset"
// 


export default Reset;