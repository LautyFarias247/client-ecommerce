import React from 'react'
import ProductItem from './ProductItem'
import Filters from '../layouts/Filters'

const ProductList = ({products}) => {

	return (
		<main className='sm:grid sm:grid-cols-4 gap-4'>
			<Filters/>
			<section className='col-span-3'>
			{products?.map((product)=>{
				return <ProductItem key={product._id} product={product}/>
			})}
			</section>
		</main>
	)
}

export default ProductList