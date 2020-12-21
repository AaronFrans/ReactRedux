import React from "react";
import { useSelector } from 'react-redux';




const Bool = () =>{

    const checked = useSelector(state => state.checked);

    return(
        <div>
            <p>
                The value is {checked.value.toString()}
            </p>
        </div>
    )
}
export default Bool