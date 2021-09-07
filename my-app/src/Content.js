import Part from "./Part";
import { useHistory } from 'react-router-dom';
const Content = (props) => {
    console.log(props);
    let parts = props.parts;
    let exercises = props.exercises;
    let number_of_exercises = parts.length;
    const items = []
    const history = useHistory()

    for (let i=0; i<number_of_exercises; i++){
        items.push(<Part part={parts[i]} exercise={exercises[i]}></Part>)
    }

    return (
        <div>
            <p> 
                {items}
            </p>
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
        
        
    )
}
export default Content;