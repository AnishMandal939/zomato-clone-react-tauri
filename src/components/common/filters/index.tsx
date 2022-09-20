import React from 'react'
import FilterItem from './filterItem';
import "./Filters.css";

interface FProps{
  filterList: any,
}

const Filters:React.FC<FProps> = ({filterList}) => {
  return (
    <div className='filters'>
        {filterList && filterList.map((filter:any)=>{
            return(
                <FilterItem filter={filter} key={filter.id} />
            )
        })}
    </div>
  )
}

export default Filters;