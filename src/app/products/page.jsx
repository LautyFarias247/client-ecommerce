import React from "react";
import queryString from "query-string";
import axios from "axios";
import ProductItem from "@/components/products/ProductItem";
import CustomPagination from "@/components/layouts/CustomPagination";
import Filters from "@/components/layouts/Filters";

const getSubcategories = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/subcategories`);
  return data;
};

const getProducts = async (searchParams) => {
  const parsedParams = queryString.stringify(searchParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/products?${parsedParams}`
  );
  return data;
};

const ProductPage = async ({ searchParams }) => {
  const { pagedProducts, productCount, resPerPage } = await getProducts(
    searchParams
  );
  const allSubcategories = await getSubcategories();
  // if (typeof window !== "undefined") {
  //   const searchParams = new URLSearchParams(window.location.search);
  // 	console.log(searchParams);
  // }
	console.log(pagedProducts.length);
  if(pagedProducts.length){

		return <main className="sm:grid sm:grid-cols-4 gap-4">
      <Filters subcategories={allSubcategories} searchParams={searchParams} />
      <section className="col-span-3">
        {pagedProducts?.map((product) => {
					return <ProductItem key={product._id} product={product} />;
        })}
        <CustomPagination productCount={productCount} resPerPage={resPerPage} />
      </section>
    </main>
			} else{
				return <main className="sm:grid sm:grid-cols-2 gap-4">
      <Filters subcategories={allSubcategories} searchParams={searchParams} />
			<p>no hay nada proba qutando filtros</p>
      {/* <section className="col-span-3">
        {pagedProducts?.map((product) => {
					return <ProductItem key={product._id} product={product} />;
        })} */}
        {/* <CustomPagination productCount={productCount} resPerPage={resPerPage} /> */}
      {/* </section> */}
    </main>
			
			}
  // ) : (
  //   <main className="sm:grid sm:grid-cols-2 gap-4">
  //     <Filters subcategories={allSubcategories} searchParams={searchParams} />
  //     <p>no hay mainroductso</p>
  //   </main>
  // );
};

export default ProductPage;
