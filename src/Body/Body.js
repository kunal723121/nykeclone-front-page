import { Carousel, CarouselItem } from "react-bootstrap"

let Body=()=>
{
    
    return (<div>
        
            <Carousel>
                <CarouselItem>
              <div className="container">
               <div className="row">
                <div className="col-6">
                <h1 className="tl">YOUR FEET DESERVE THE BEST</h1>
                <h5 className="tr">Your feet deserve the best and we are here to help you with our shoes</h5>
                
                </div>
                <div className="col-6">
                    <img width="464" height="400" src="https://t3.ftcdn.net/jpg/05/69/57/18/360_F_569571832_sufAZLcdK00zbbChUIwqKyaxzEwsW72o.jpg" />
                  </div>
                 </div>
            </div>
            </CarouselItem>
            <CarouselItem>
            <div className="container">
               <div className="row">
                <div className="col-6">
                <h1 className="tl">BUY THE LATEST DESIGN </h1>
                <h5 className="tr">Your feet deserve the best and we are here to help you with our shoes.
                Buy the latest design at dicounted price</h5>
                
                </div>
                <div className="col-6">
                    <img width="464" height="400" src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  </div>
                 </div>
            </div>
            </CarouselItem>
            </Carousel>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <button className="btn btn-red">ShopNow</button>
                <button className="ml-max btn btn-primary">Category</button>
                    </div>
                </div>
            </div>
    </div>)
   
    
}



export default Body