import React, { useState } from 'react';
import './BMI.css';

const BMI = () => {
    const[weight, setWeight] = useState(null);
    const[height, setHeight] = useState(null);
    const[bmi, setBmi] = useState(0);
    const[status, setStatus] = useState([]);

    const onSetHeight = e => {
        const value = e.target.value;
        setHeight(value);
    }

    const onSetWeight = e => {
        const value = e.target.value;
        setWeight(value);
    }

    const calculateBMI = () => {
        const height2 = height*height;
        const result = weight/height2;
        setBmi(result.toFixed(2));

        let bmiStatus = "Obese";
        if(result < 18.5){
            bmiStatus = "UnderWeight"
        }else if(result >= 18.5 && result <= 24.9){
            bmiStatus = "Healthy";
        }else if(result >= 25 && result <= 29.9){
            bmiStatus = "Overweight";
        }else {
            bmiStatus = "Obese";
        }

        setStatus(bmiStatus);
    }

    return (
        <div className='parent-container'>
            <div className='child-container'>
                <label style={{marginRight:"5px"}}>Weight: </label>
                <input onChange={onSetWeight} value={weight} type="number" placeholder='in kg'/>
            </div>

            <div className='child-container'>
                <label htmlFor="" style={{marginRight:"5px"}}>Height: </label>
                <input onChange={onSetHeight} value={height} type="number" placeholder='in meter'/>
            </div>

            <div className='child-container'>
                <button disabled={!weight && !height} onClick={calculateBMI}>What's my BMI?</button>
            </div>
            
            <div>
                <p>Your BMI is - {bmi} </p>
                <p><b>You are {status}!</b></p>
            </div>
            
        </div>
    );
};

export default BMI;