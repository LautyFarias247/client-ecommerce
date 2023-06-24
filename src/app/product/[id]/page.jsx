import Navbar from '@/components/layouts/Navbar'
import ProductDetail from '@/components/products/ProductDetail'
import axios from 'axios'
import React from 'react'

const getProduct = async (_id) => {
	const {data} = await axios.get(`${process.env.API_URL}/products/${_id}`)
	return data
}

const page = async ({params}) => {
	const product = await getProduct(params.id)
	
	return (
		<>
			<Navbar/>
			<ProductDetail product={product}/>
		</>
	)
}

export default page