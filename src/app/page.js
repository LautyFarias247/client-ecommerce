import Navbar from "@/components/layouts/Navbar";
import ProductList from "@/components/products/ProductList";
import axios from "axios";
import Image from "next/image";

const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/products`);
  return data;
};

export default async function Home() {
  const productsData = await getProducts();
  return (
    <>
      <Navbar />
      <ProductList products={productsData} />
    </>
  );
}
