// export async function createProduct(formData) {

import { revalidatePath } from "next/cache";
import { postProducts } from "./products";
import { redirect } from "next/navigation";

//   // const newProduct = Object.fromEntries(formData.entries())

//   const name = formData.get("name")

//   console.log(name);

//   // Mutate data
//   // Revalidate cache
// }
export const createProduct = async (formData) => {
  "use server";
  const newTask = Object.fromEntries(formData.entries());

  console.log(newTask);

  // const res = await postTask(newTask);
  const res = await postProducts(newTask);

  if (res.ok) {
    revalidatePath("/products");
    redirect("/products");
  }
  // if (res.ok) {
  //   revalidatePath("/tasks");
  //   redirect("/tasks");
  // }
};
