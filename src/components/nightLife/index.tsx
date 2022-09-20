import React from 'react'
import { nightLife } from '../../data/nightLife';
import Collection from '../common/collection';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import "./Nightlife.css";


declare namespace JSX {
  interface IntrinsicElements {
    filterList: { nightFilters?: any };
  }
}

interface IProps{
  list:any | string,
  nightLife:any | string,
  
  }


const collectionList = [
  {
    id: 1,
    title: "Sangam Restaurant",
    cover: "https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
    places: "12 places"
  },
  {
    id: 2,
    title: "MBA Food Wala",
    cover: "https://b.zmtcdn.com/data/pictures/3/20376023/fdc91a0f8cff3ce36121112a656f842a.jpg",
    places: "11 places"
  },
  {
    id: 3,
    title: "Ksheer Sagar Mishthaan Bhandar",
    cover: "https://b.zmtcdn.com/data/pictures/7/20334047/2d98480a46e694060b6ec0b58781e3d8_o2_featured_v2.jpg",
    places: "Newely Opened"
  },
  {
    id: 4,
    title: "Maharaja Chaap",
    cover: "https://b.zmtcdn.com/data/pictures/chains/9/18724009/a2e53b67cef1eec08ca781441b20f370.jpg",
    places: "7 places"
  },
  {
    id: 5,
    title: "Baba Biryani",
    cover: "https://b.zmtcdn.com/data/reviews_photos/4f2/c8e15fbec7e6efdd3f6d6cc9300184f2_1606992499.jpg",
    places: "5 Places"
  },
  {
    id: 6,
    title: "My Bar Headquarters",
    cover: "https://b.zmtcdn.com/data/pictures/7/19275357/41228944d53ce8992652a1ca8ffbe513.jpg",
    places: "12 Places"
  },
  {
    id: 7,
    title: "Momo Nation Cafe",
    cover: "https://b.zmtcdn.com/data/reviews_photos/498/2d141115306d982d36330e7938c58498_1654107525.jpg",
    places: "9 places"
  },
  {
    id: 8,
    title: "Lovesome Lucknowi",
    cover: "https://b.zmtcdn.com/data/reviews_photos/157/57ecc5d4d22d62ebbe8522da0bfb4157_1660314074.jpg",
    places: "4 Places"
  },
];

const nightFilters =[
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center' ></i>,
    title: 'Filtes',
  },
  {
    id: 2,
    title: 'Rating: 4.0+',
  },
  {
    id: 3,
    title: 'Safe and Hygienic',
  },
  {
    id: 4,
    title: 'Pure Veg',
  },
  {
    id: 5,
    title: 'Delivery Time',
    icon: <i className='fi fi-rr-apps-sort absolute-center' ></i>,

  },
  {
    id: 5,
    title: 'Great Offers',
  },
];

const nightList = nightLife;

const NightLife:React.FC<IProps> = () => {
  return (
    <div>
       <Collection list={collectionList} />
      <div className='max-width'>
        {/* @ts-ignore */}
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Lucknow" />
    </div>
  )
}

export default NightLife;