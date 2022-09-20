import React from 'react'
import { restaurants } from '../../data/restaurants';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import './Delivery.css';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';

interface IProps{
  collectionName?: string,
  filterList?:any
}

const deliveryFilters =[
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
]

// for restaurant list
const restaurantList = restaurants;
const Delivery:React.FC<IProps> = () => {
  return (
    <div>
      <div className="max-width">
      <Filters filterList={deliveryFilters} />
      </div>
      {/* delivery collections card 1:45:40 */}
      <DeliveryCollections /> 
      <TopBrands />
      <ExploreSection list={restaurantList} collectionName='Delivery Restaurants in Lucknow'/>
    </div>
  )
}

export default Delivery;