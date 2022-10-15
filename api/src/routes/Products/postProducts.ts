import { Router } from "express";
import Category from "../../models/categories";
import Product from "../../models/products";

const router = Router();

router.post("/create", async (req, res) => {
  let { name, description, price, stock, available, favorite, categories } =
    req.body;
  if (typeof name === "string") name = name.toLocaleLowerCase();
  try {
    const product = new Product({
      name: name,
      description: description,
      price: price,
      stock: stock,
      available: available,
      favorite: favorite,
      categories: categories,
    });

    if (categories) {
      const foundCategory = await Category.find({
        name: { $in: categories },
      });
      product.categories = foundCategory.map((el) => el._id);
    }
    product.populate("categories", "name -_id");

    const savedProduct = await product.save();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
