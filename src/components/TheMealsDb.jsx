import { useState , useEffect } from "react"; //(UseState): A hook that lets you create variables (state) inside your React component that can change over time.
//A hook that lets you run code when your component loads (like “on page load”).

import axios from 'axios'; //A library to make HTTP requests (like GET, POST) to your backend API.

function TheMealsDb() {
    const [foodData , setFoodData] = useState([]);//foodData → A variable that stores the data (initially an empty array []).
    //setFoodData → A function to update foodData.
    //So when we get new data from backend, we call setFoodData(newData) and React will re-render the UI.

    const getMeals = async () => { //async → Means this function can use await (for waiting until data comes).
        const Response = await axios.get("http://localhost:2000/api/view");//axios.get("http://localhost:2000/api/view") → Calls your backend API to get the data.
        console.log(Response.data.data);//Response → The reply from backend (contains all the data).
        setFoodData(Response.data.data);//Response.data.data → This is where the actual list of food/users is stored.
        //setFoodData(Response.data.data) → Saves the data in foodData state.
    }
    useEffect(()=>{ //useEffect runs code when the component loads.
        getMeals();  //getMeals() will be called one time when the page first opens.
    },[])  //[] → Means run only once (not again and again).

    return(
        <div>
            {foodData.map((results,index)=>{  //.map() is used to loop through an array in React. 
            //For each results (which is one item from your backend), we return some JSX (HTML).
                  return (//Inside the loop, you display:
                    //results.name
                    //results.phone
                    //results.email
                <div className="uk" key={index}> 
                    <h1>{results.name}</h1>
                    <h1>{results.phone}</h1>
                    <h1>{results.email}</h1>
                </div>
                  )
            })}
        </div>
    )
}
export default TheMealsDb;
