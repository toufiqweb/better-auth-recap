"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddProduct = ({ createProduct }) => {
  return (
    <Modal>
      <Button variant="secondary">Add Product</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Add Product</Modal.Heading>
              <p className="mt-1.5 text-sm text-muted">
                Fill in the product information below.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createProduct} className="flex flex-col gap-4">
                  {/* Product Name */}
                  <TextField className="w-full" name="name" type="text">
                    <Label>Product Name</Label>
                    <Input placeholder="Enter product name" />
                  </TextField>

                  {/* Category */}
                  <TextField className="w-full" name="category" type="text">
                    <Label>Category</Label>
                    <Input placeholder="Enter category" />
                  </TextField>

                  {/* Brand */}
                  <TextField className="w-full" name="brand" type="text">
                    <Label>Brand</Label>
                    <Input placeholder="Enter brand name" />
                  </TextField>

                  {/* Price */}
                  <TextField className="w-full" name="price" type="number">
                    <Label>Price</Label>
                    <Input placeholder="Enter price" />
                  </TextField>

                  {/* Currency */}
                  <TextField className="w-full" name="currency" type="text">
                    <Label>Currency</Label>
                    <Input placeholder="USD / EUR / BDT" />
                  </TextField>

                  {/* Rating */}
                  <TextField className="w-full" name="rating" type="number">
                    <Label>Rating</Label>
                    <Input placeholder="Enter rating (e.g. 4.5)" />
                  </TextField>

                  {/* Stock */}
                  <TextField className="w-full" name="stock" type="number">
                    <Label>Stock</Label>
                    <Input placeholder="Enter stock quantity" />
                  </TextField>

                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>
                  <Button type="submit">Add Product</Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddProduct;
