import React from 'react'

const FilterGroup = ({minRatin, handleFilter, ratings}) => {
  return (
    <ul className="align_center movie_filter">
        {ratings.map(rating=><li className={minRatin===rating ?"movie_filter_item active": "movie_filter_item"} key={rating} onClick={()=>{handleFilter(rating)}} >{rating}+ Star</li>)}
                </ul>
  )
}

export default FilterGroup