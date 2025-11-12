
import {useState} from 'react';

function UpdARRAYinState(){

    const[foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood(){

    }

    function handleRemoveFood(){

    }
 
    return(<div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}    
            </ul>    
        </div>)
}

export default UpdARRAYinState;