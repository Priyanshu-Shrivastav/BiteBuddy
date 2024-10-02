
function Footer() {
  return (
    <div className="w-full bg-black pb-32 pt-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-10 items-start justify-center gap-24">
        <div className="col-1 mx-auto">
            <div className="flex gap-3 items-center mb-3">
                
                <span className="text-white font-bold text-[26px]">Bite Buddy</span>
            </div>
            <div className="text-gray-400  font-semibold">&#169;2024 Bundl Technologies Pvt. Ltd</div>
        </div>

        <div className="col-2 mx-auto">

            <ul className="text-gray-400 leading-loose font-semibold">
                <li className="font-bold text-white">Company</li>
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                <li>BiteBuddy One</li>
                <li>BiteBuddy Instamart</li>
                <li>BiteBuddy Genie</li>
            </ul>
        </div>
        <div className="col-3 flex flex-col gap-8  mx-auto">
            <div className="sub-col">
            <ul className="text-gray-400 leading-loose font-semibold">
                <li className="font-bold text-white">Contact us</li>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
                
            </ul>
            </div>
            <div className="sub-col">
            <ul className="text-gray-400 leading-loose font-semibold">
                <li className="font-bold text-white">Legal</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Investor Relations</li>
                
            </ul>
            </div>
        </div>
        <div className="col-4 mx-auto">
        <ul className="text-gray-400 leading-loose font-semibold">
                <li className="font-bold text-white">We deliver to:</li>
                <li>Bangalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
                
                
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
