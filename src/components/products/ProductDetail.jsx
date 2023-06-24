"use client";
import Image from "next/image";
import React from "react";
import Rating from "../common/Rating";
import BreadCrumbs from "../common/BreadCrumbs";

const ProductDetail = ({ product }) => {
  return (
    <main>
			<BreadCrumbs product={product}/>
      <section>
        <div className="flex flex-col items-center sm:bg-slate-500 sm:flex-row sm:items-start">
          <Image
            src={product.image?.url || "/images/default_product.jpg"}
            width={360}
            height={360}
            alt={`${product.name} image`}
          />

          <div className="p-3">
            <div>
              <h5 className="text-xl">{product.name}</h5>
              <Rating />
              <p className="text-lg mt-4">
                $ {product.price.toLocaleString("en-US").replace(",", ".")},00
              </p>
              <button>Agregar</button>
            </div>
            <div>

						</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
