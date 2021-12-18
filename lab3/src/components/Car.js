import React,{useState} from 'react'


function Car() {
    const [Color, setColor]= useState("red");
    const [car,setCar] = useState({
        brand: "toyota",
        color; "green",
        year: 2010,
    });

  const chCar = (year, color) => {
      setColor(color);
      let y = year +10;
      setCar({year: y});
  };

    return(
        <>
        <p>My car color is {color}, year {car.year}
        </p>
        <button >
            onClick={(){
            chCar(2011, "green");
        }}
        change
        </button>
        </>
    );
}
export default Car