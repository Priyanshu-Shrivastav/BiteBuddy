import AllCards from "./components/AllCards"
import BestCuisinesCity from "./components/BestCuisinesCity"
import BestCuisinesNearMe from "./components/BestCuisinesNearMe"
import Category from "./components/Category"
import Download from "./components/Download"
import ExploreRestaurants from "./components/ExploreRestaurants"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TopRestaurant from "./components/TopRestaurant"



function App() {
  

  return (
    <>
      <Header />
      <Category />
      <TopRestaurant />
      <AllCards />
      <BestCuisinesNearMe />
      <BestCuisinesCity/>
      <ExploreRestaurants />
      <Download />
      <Footer />
    </>
  )
}

export default App
