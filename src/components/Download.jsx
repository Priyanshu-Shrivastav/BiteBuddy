function Download() {
  return (
    <div className="w-full bg-[#F0F0F5] max-h-none xl:max-h-[136px] mt-[80px] ">
      <div className="max-w-[1200px] mx-auto my-5 flex flex-col sm:flex-row gap-16 xl:gap-32 p-10 items-center justify-center">
        <div className="font-extrabold text-[26px]  justify-center items-center text-center w-full xl:w-[453px]  xl:text-start">
          For better experience,download the Swiggy app now
        </div>
        <div className="flex">
          <div className="">
            <img
              className="w-[208px]"
              src="../../public/images/app_store.png"
              alt="app_store"
            />
          </div>
          <div className="">
            <img
              className="w-[208px]"
              src="../../public/images/play_store.png"
              alt="play_store"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
