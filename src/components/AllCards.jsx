import useFetch from "../utils/useFetch";
import Card from "./Card";
import useOnlineStatus from "../utils/useOnlineStatus"
import { resList } from "../utils/resList";


function AllCards() {
    
  // const apiData = useFetch();
  const onlineStatus = useOnlineStatus();

  // const restaurants = apiData.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  if (onlineStatus === false) {
    return <h1>you are offline . please check your connection!!</h1>
  }else{
    return (
      <div className="w-full xl:max-w-[1200px] mx-auto p-[10px] xl:p-0">
        <div className="flex flex-col xl:flex my-3 items-center xl:justify-between">
          <div className="text-[25px] font-bold my-4 mb-8 text-center xl:mb-0 xl:text-left">Restaurants with online food delivery in Delhi</div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {
                  resList.map((restaurant , i)=>{
                      return <Card {...restaurant.info} key={i} />;
                  })
              }
          </div>
          
        </div>
        
        <hr className="my-8 "/>
      </div>
    )
  }

  
}

export default AllCards;
