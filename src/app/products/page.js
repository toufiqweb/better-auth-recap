import AddProduct from "@/components/AddProduct";
import Product from "@/components/Product";
import { createProduct } from "../../lib/action";
import { getProducts } from "@/lib/products";


const ProductPage = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="container mx-auto my-10 space-y-5">
      <h2 className="text-5xl font-bold text-center ">All Products</h2>
      <AddProduct createProduct={createProduct}></AddProduct>
      <div className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
