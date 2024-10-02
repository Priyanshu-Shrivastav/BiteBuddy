import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from "./Card";
import useFetch from "../utils/useFetch";
import { useState } from "react";
import { resList } from "../utils/resList";

const TopRestaurant = () => {

  const [slide , setSlide] = useState(0);

  const prevSlide = () => {
    if (slide == 0) {
      return false;
    }
    setSlide(slide - 3);
  }
  const nextSlide = () => {
    if (restaurants.length - 8 == slide) {
      return false;
    }
    setSlide(slide + 3);
    
  }
  
  const apiData = useFetch();

  const restaurants = apiData.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  return (
    <div className="w-full xl:max-w-[1200px] mx-auto p-[10px] xl:p-0">
      <div className="flex flex-col my-3 items-center lg:items-start lg:flex-row lg:justify-between">
        <div className="text-[25px] font-bold xl:mb-0 mb-2">
          Top restaurant chains in Delhi
        </div>
        <div className="flex ">
          <div className="cursor-pointer flex justify-center items-center bg-[#e2e2e7] rounded-full w-[30px] h-[30px] mx-2"  onClick={prevSlide} >
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center bg-[#e2e2e7] rounded-full w-[30px] h-[30px] mx-2" onClick={nextSlide}>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex gap-3 overflow-hidden" >
        {
            restaurants.map((restaurant,i)=>{
              return (
                <div style={{
                  transform: `translateX(-${slide * 100}%)`
                }} className="w-[273px] shrink-0 duration-500 " key={i}>
                  <Card  width="w-full md:w-[273px]" {...restaurant.info} key={i}/>
                </div>
              );
              
            })
        }
      </div>
      <hr className="my-8 "/>
    </div>
  );
};

export default TopRestaurant;
