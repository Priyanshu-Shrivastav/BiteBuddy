import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import useFetch from "../utils/useFetch";
import { useState } from "react";
import { IMG_URL } from "../utils/constants";
import { category } from "../utils/category";

function Category() {
  const [slide , setSlide] = useState(0);

  const prevSlide = () => {
    if (slide == 0) {
      return false;
    }
    setSlide(slide - 3);
  }
  const nextSlide = () => {
    if (categories.length - 8 == slide) {
      return false;
    }
    setSlide(slide + 3);
    
  }

  // const apiData = useFetch();

  // const categories = apiData.cards?.[0]?.card?.card?.imageGridCards?.info || [] ;
  
  return (
    <div className="w-full xl:max-w-[1200px] mx-auto p-[10px] xl:p-0">
      <div className="flex flex-col xl:flex my-3 items-center xl:justify-between">
        <div className="text-[25px] font-bold xl:mb-0 mb-2">What's on your mind?</div>
        <div className="flex ">
          <div onClick={prevSlide} className="cursor-pointer flex justify-center items-center bg-[#e2e2e7] rounded-full w-[30px] h-[30px] mx-2">
            <FaArrowLeft />
          </div>
          <div onClick={nextSlide}  className="cursor-pointer flex justify-center items-center bg-[#e2e2e7] rounded-full w-[30px] h-[30px] mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">

        {category.map((cat, index) => {
          return (
            <div style={{
              transform: `translateX(-${slide * 100}%)`
            }} className="w-[150px] shrink-0 duration-500 " key={index}>
              <img
                className="w-full "
                src={IMG_URL + cat.imageId}
                alt="img"
              />
            </div>
          );
        })}
      </div>
      <hr className="my-8 "/>
    </div>
  );
}

export default Category;
