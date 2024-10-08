import Block from "./Block";
import useFetch from "../utils/useFetch";
import { brands } from "../utils/bestCuisinesCity";

function BestCuisinesCity() {

  // const apiData = useFetch();

  // const brands = apiData.cards?.[6]?.card?.card?.brands || [];


  return (
    <div className="w-full xl:max-w-[1200px] mx-auto my-5 pt-14 p-5 md:p-7">
      <div className="text-center md:text-left">
        <div className="font-bold text-[25px]">Best Places to Eat Across Cities</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
        { 
          brands.map((brand , i)=>{
            return <Block {...brand} key={i}/>
          })
        }
      </div>
    </div>
  )
}

export default BestCuisinesCity
