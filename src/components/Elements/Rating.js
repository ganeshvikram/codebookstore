import React from 'react'
export const Rating = ({rating}) => {
    const ratingArray = Array(5).fill(false);
  return (
    <>
        {
            ratingArray.map((rate,index)=>(
                (index<rating)?<i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>:<i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
            ))
        }
    </>
  )
}
