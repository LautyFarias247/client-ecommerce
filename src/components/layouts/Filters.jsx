"use client"
import React from 'react'
import StarRatings from 'react-star-ratings'

const Filters = () => {
	return (
		<aside className="bg-lime-400 hidden sm:block sm:col-span-1">
      <a
        
        href="#"
      >
        Filter by
      </a>
      <div >
        <h3 >Price ($)</h3>
        <div >
          <div >
            <input
							className='w-full'
              name="min"
              
              type="number"
              placeholder="Min"
            />
          </div>

          <div >
            <input
							className='w-full'
              name="max"
              
              type="number"
              placeholder="Max"
            />
          </div>

          <div >
            <button >
              Go
            </button>
          </div>
        </div>
      </div>

      <div >
        <h3 >Category</h3>

        <ul >
          <li>
            <label >
              <input
                name="category"
                type="checkbox"
                value="Electronics"
                
                // defaultChecked={checkHandler("category", "Electronics")}
              />
              <span > Electronics </span>
            </label>
          </li>
          <li>
            <label >
              <input
                name="category"
                type="checkbox"
                value="Laptops"
                
                // defaultChecked={checkHandler("category", "Laptops")}
              />
              <span > Laptops </span>
            </label>
          </li>
          <li>
            <label >
              <input
                name="category"
                type="checkbox"
                value="Toys"
                
                // defaultChecked={checkHandler("category", "Toys")}
              />
              <span > Toys </span>
            </label>
          </li>
          <li>
            <label >
              <input
                name="category"
                type="checkbox"
                value="Office"
                
                // defaultChecked={checkHandler("category", "Office")}
              />
              <span > Office </span>
            </label>
          </li>
          <li>
            <label >
              <input
                name="category"
                type="checkbox"
                value="Beauty"
                
                // defaultChecked={checkHandler("category", "Beauty")}
              />
              <span > Beauty </span>
            </label>
          </li>
        </ul>

        <hr  />

        <h3 >Ratings</h3>
        <ul >
          <li>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} >
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  
                  // defaultChecked={checkHandler("ratings", `${rating}`)}
                />
                <span >
                  {" "}
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul>
      </div>
    </aside>
	)
}

export default Filters