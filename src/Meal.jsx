
import {useState, useEffect} from "react";
import "./assets/meal.css";

import Header from "./meal_components/Header";
import Hero from "./meal_components/Hero";
import Categories from "./meal_components/Categories";
import Footer from "./meal_components/Footer";  



const Meal = () => {
  //how to send get request to an api endpoint and get the data and display it in the component
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMealCategories = () => {
    setLoading(true)
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setError(false)
        setCategories(data.categories)
      })
      .catch((err) => {
        setLoading(false)
        setError(true)
        setCategories([])
      })
  }

  useEffect(() => {
    fetchMealCategories()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Categories categories={categories} error={error} loading={loading} />
      <Footer />
    </>
  )
}

export default Meal