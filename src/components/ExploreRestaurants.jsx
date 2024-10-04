import Block from "./Block";
import useFetch from "../utils/useFetch";
import { exploreRes } from "../utils/exploreRestaurants";

function ExploreRestaurants() {

  // const apiData = useFetch();

  // const brands = apiData.cards?.[8]?.card?.card?.brands || [];


  return (
    <div className="w-full xl:max-w-[1200px] mx-auto my-5 pt-14 p-5 md:p-7">
      <div className="text-center md:text-left">
        <div className="font-bold text-[25px]">Explore Every Restaurants Near Me</div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5 text-center">
        { 
          exploreRes.map((brand , i)=>{
            return <Block {...brand} key={i}/>
          })
        }
      </div>
    </div>
  )
}

export default ExploreRestaurants
