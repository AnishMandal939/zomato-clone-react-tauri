import React from 'react'
import './FilterItem.css';

interface FProps{
  filter: any
}

const FilterItem:React.FC<FProps> = ({filter}) => {
  return (
    <div className='filter-item'>{filter.icon && filter.icon}
        <div className='filter-name'>{filter.title}</div>
    </div>
  )
}

export default FilterItem