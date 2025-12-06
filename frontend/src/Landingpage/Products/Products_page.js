import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";

export default function Productpage(){
    return(
        <>
         <Hero/>
         <Leftsection 
         Images="media/images/kite.png"
         Heading="Kite"
         paragraph="Our ultra-fast flagship trading platform with streaming market 
         data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly 
         on your Android and iOS devices." 
         />

         <Rightsection 
         Images="media/images/console.png"
         Heading="Console"
         paragraph="The central dashboard for your Zerodha account. Gain 
         insights into your trades and investments 
         with in-depth reports and visualisations."
         />

         <Leftsection 
         Images="media/images/coin.png"
         Heading="Coin"
         paragraph="Buy direct mutual funds online, commission-free, 
         delivered directly to your Demat account. Enjoy the investment 
         experience on your Android and iOS devices." 
         />

         <Rightsection 
         Images="media/images/kite.png"
         Heading="Kite Connect API"
         paragraph="Build powerful trading platforms 
         and experiences with our super simple HTTP/JSON APIs. If you 
         are a startup, build your investment app and showcase it to 
         our clientbase."
         />

         <Leftsection 
         Images="media/images/varsity.png"
         Heading="Varsity"
         paragraph="An easy to grasp, collection of stock market 
         lessons with in-depth coverage and illustrations. Content 
         is broken down into bite-size cards to help you learn on the 
         go." 
         />
         <Universe/>
        </>
    )
}