import React from 'react';
import Slider from "react-slick";
import './deliveryCollections.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from './deliveryItem';

const deliveryItems=[
  {
    id:1,
    title: "Bikkgane Biryani",
    cover: "https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg"
  },
  {
    id:2,
    title: "McDonald's",
    cover: "https://b.zmtcdn.com/data/pictures/chains/1/171/50c3ff296839c4f3f3fc27ec583ba4e6_o2_featured_v2.jpg"
  },
  {
    id:3,
    title: "The Dhaba Junction",
    cover: "https://b.zmtcdn.com/data/pictures/chains/3/19253173/7aae8602e6092ffaa0a5b70fc7307bf8_o2_featured_v2.jpeg"
  },
  {
    id:4,
    title: "Domino's Pizza",
    cover: "https://b.zmtcdn.com/data/pictures/chains/3/143/4296acbef6189df54d8665bcae4cb4ef_o2_featured_v2.jpg"
  },
  {
    id:5,
    title: "Biryani Blues",
    cover: "https://b.zmtcdn.com/data/pictures/chains/8/301718/15c89d5c951cac68710fdc0e7ff9ef9f_o2_featured_v2.jpg"
  },
  {
    id:6,
    title: "La Pino'z Pizza",
    cover: "https://b.zmtcdn.com/data/pictures/chains/7/18619067/714084f579eafc14e94ceb8b694a3e7b_o2_featured_v2.jpg"
  },
  {
    id:7,
    title: "Saravana Bhavan",
    cover: "https://b.zmtcdn.com/data/pictures/chains/9/899/6812b7d6166430abf0f62016ea8fe548_o2_featured_v2.jpg"
  },

];

// for carousal
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}
const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
      <div className="max-width">
      <div className='collection-title'>Eat what makes you happy</div>
        {/* <h3>DeliveryCollection</h3> */}
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return (
            <DeliveryItem item={item} />
            )
            
          })}
        </Slider>
      </div>
    </div>
  )
}

export default DeliveryCollections;