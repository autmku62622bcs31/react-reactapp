import { useState , useEffect } from "react";
import axios from 'axios';

function TheMealsDb() {
    const [foodData , setFoodData] = useState([]);

    const getMeals = async () => {
        const Response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        console.log(Response.data.categories);
        setFoodData(Response.data.categories);
    }
    useEffect(()=>{
        getMeals();
    },[])
    return(
        <div>
            {foodData.map((meals)=>{
                  return (
                <div>
                    <h1>{meals.strCategory}</h1>
                    <img src={meals.strCategoryThumb} alt="" height={100} width={100} />
                    <p>{meals.strCategoryDescription}</p>
                </div>
                  )
            })}
        </div>
    )
}

export default TheMealsDb;
