import { useEffect, useState } from "react";

export default function Home() {
  const [meal, setMeal] = useState<any>(null);

  const fetchMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]));
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-base-300">
        <div className="card card-compact mx-2 w-full bg-base-100 text-accent-content shadow-xl md:w-1/3 lg:w-2/5">
          <figure className="h-48 overflow-hidden md:h-56 lg:h-64">
            <img
            className="w-full h-full object-cover"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{meal.strMeal}</h2>
            <p>{meal.strInstructions}</p>
            <div className="card-actions justify-end">
              <button onClick={fetchMeal} className="btn btn-primary">GIVE ME ANOTHER MEAL</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
