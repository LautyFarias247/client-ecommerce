"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarRatings from "react-star-ratings";

const ProductItem = ({ product }) => {
  return (
    <article className="grid grid-cols-4 bg-lime-400 my-5">
      <Link href={`/product/${product._id}`}>
        <Image
          className="col-span-1"
          src={product.image?.url || "/images/default_product.jpg"}
          width={160}
          height={160}
          alt={`${product.name} image`}
        />
      </Link>

      <div className="grid grid-cols-1  justify-center col-span-3 sm:grid-cols-3">
        <div className="bg-red-200 sm:col-span-2">
          <p className="text-sm">{product.name}</p>
          <span className="text-sm">
            <StarRatings
              rating={5}
              starRatedColor="#ffb829"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              name="rating"
            />{" "}
            (0)
          </span>
        </div>

        <div className="bg-red-400 flex items-center sm:flex-col sm:col-span-1">
          <span className="sm:text-xl">
            ${product.price.toLocaleString("en-US").replace(",", ".")}
          </span>
          <button className="bg-blue-400">Comprar</button>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
