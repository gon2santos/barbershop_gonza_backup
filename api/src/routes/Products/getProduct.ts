import { Router } from "express";

import ProductModel from "../../models/products";

const router = Router();

router.get("/:idProduct", async (req, res) => {
  const { idProduct } = req.params;
  try {
    await ProductModel.findById(idProduct).populate("reviews")
      .then(response => {
        let filteredProd = {
          "_id": response._id,
          "name": response.name,
          "description": response.description,
          "price": response.price,
          "stock": response.stock,
          "image": response.image,
          "available": response.available,
          "favorite": response.favorite,
          "reviews": response.reviews.map(item => { return { reviewId: item._id, rating: item.rating, comment: item.comment } })
        }
        return filteredProd;
      }).then(prod => res.send(prod))
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default router;