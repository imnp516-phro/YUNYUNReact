import { useState } from 'react';

function UpdOBJECTinState() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
 });
    function handleYearChange(event){
      setCar({ ...car, year: 2025});

    }
    function handleMakeChange(event){
      
    }
    function handleModelChange(event){
      
    }

 

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>

      <input type="number" value ={car.year} onChange={handleYearChange}/><br/>
      <input type="text" value= {car.make} onChange={handleMakeChange}/><br/>
      <input type="text" value = {car.model} onChange={handleModelChange}/><br/>
    </div>
  );
}

export default UpdOBJECTinState;
