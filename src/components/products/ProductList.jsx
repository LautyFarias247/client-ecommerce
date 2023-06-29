import React from 'react'
import ProductItem from './ProductItem'
import Filters from '../layouts/Filters'
import CustomPagination from '../layouts/CustomPagination'
import axios from 'axios';

const getSubcategories = async () => {
  const { data } = await axios.get(
    `${process.env.API_URL}/subcategories`
  );
  return data;
};

const getProducts = async (searchParams) => {
  const urlParams = searchParams;

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/products?${searchQuery}`
  );
  return data;
};


const ProductList = async ({productCount, resPerPage, searchParams}) => {
	const allProducts = await getProducts()
	const allSubcategories = await getSubcategories()
	
	return (
		<main className='sm:grid sm:grid-cols-4 gap-4'>
			<Filters subcategories={allSubcategories} searchParams={searchParams}/>
			<section className='col-span-3'>
			{allProducts?.map((product)=>{
				return <ProductItem key={product._id} product={product}/>
			})}
			<CustomPagination productCount={productCount} resPerPage={resPerPage}/>
			</section>
		</main>
	)
}

export default ProductList