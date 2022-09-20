import React from 'react';
import './deliveryItem.css';
interface Iprops{
    item: any
}
const DeliveryItem:React.FC<Iprops> = ({item}) => {
  return (
    <div>
        <div className="delivery-item-cover">
            <img src={item.cover} className="delivery-item-image" alt={item.title} />
        </div>
        <div className="delivery-item-title">{item.title}</div>
    </div>
  )
}

export default DeliveryItem