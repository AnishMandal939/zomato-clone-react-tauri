import React from 'react'
import ExploreCard from './exploreCard';
import './exploreSection.css';

interface IProps{
    list: any,
    collectionName: string
}
const ExploreSection:React.FC<IProps> = ({list, collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className="collection-title">{collectionName}</div>
        <div className="explore-grid">
            {list.map((restaurant:any)=>{
                return(
                    <ExploreCard restaurant={restaurant} />
                )
            })}
        </div>
    </div>
  )
}

export default ExploreSection