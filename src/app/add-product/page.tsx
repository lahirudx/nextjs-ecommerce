import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const price = Number(formData.get("price"));

  // If data is not available throw an error
  if (!name || !description || !imageUrl || !price) {
    throw new Error("Invalid data");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          name="description"
          required
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
          id=""
        />
        <input
          required
          type="url"
          name="imageUrl"
          placeholder="Image Url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          type="number"
          name="price"
          placeholder="Price"
          className="input-bordered input mb-3 w-full"
        />
        <FormSubmitButton type="submit" className="btn-block">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}
