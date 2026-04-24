import products from "@/database/product.json";

export const getProducts = async () => {
  return products;
};

export const postProducts = async (newProduct) => {
  newProduct.id = products.length + 1;

  products.push(newProduct);

  return {ok : true , massage : "success"}
};
