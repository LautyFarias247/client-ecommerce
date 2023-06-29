"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StarRatings from "react-star-ratings";
import CheckboxSubcategory from "../common/CheckboxSubcategory";

const Filters = ({ subcategories }) => {
  const router = useRouter();

  const [currentSubcategories, setcurrentSubcategories] = useState(null);

  useEffect(() => {
    if (!currentSubcategories) return;
    console.log(currentSubcategories);
    if (typeof window !== "undefined") {
      const searchQuery = new URLSearchParams(window.location.search);
      if (currentSubcategories.length === 0) {
        searchQuery.delete("subcategory");
      } else {
        searchQuery.set("subcategory", currentSubcategories.join(" "));
      }
      searchQuery.set("page", 1);
      router.push(`/products?${searchQuery.toString()}`);
    }
  }, [currentSubcategories]);

  return (
    <aside className="bg-lime-400 hidden sm:block sm:col-span-1">
      <a href="#">Filter by</a>
      {/* <div>
        <h3>Price ($)</h3>
        <div>
          <div>
            <input
              className="w-full"
              name="min"
              type="number"
              placeholder="Min"
            />
          </div>

          <div>
            <input
              className="w-full"
              name="max"
              type="number"
              placeholder="Max"
            />
          </div>

          <div>
            <button>Go</button>
          </div>
        </div>
      </div> */}

      <div>
        <h3>Category</h3>

        <ul>
          {subcategories.map((s) => {
            return (
              <CheckboxSubcategory
                key={s._id}
                name={s.name}
                subcategories={currentSubcategories}
                setSubcategories={setcurrentSubcategories}
              />
            );
          })}
        </ul>

        <hr />

        {/* <h3>Ratings</h3>
        <ul className="flex flex-col">
          <li className="flex flex-col">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating}>
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}

                  // defaultChecked={checkHandler("ratings", `${rating}`)}
                />
                <span>
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
        </ul> */}
        <button>Aplicar Filtros</button>
      </div>
    </aside>
  );
};

export default Filters;
