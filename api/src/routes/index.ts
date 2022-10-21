import { Router } from "express";
/* ============PRODUCTS FILES============ */
import postProducts from "./Products/postProducts";
import getAllProducts from "./Products/getAllProducts";
import getSearchedProducts from "./Products/getSearchedProducts";
import deleteProducts from "./Products/deleteProducts";
import getProduct from "./Products/getProduct";
import filterProducts from "./Products/filterProducts";
import editProducts from "./Products/editProduct";
import populatedProducts from "./Products/postPopulateProducts";
/* ============USERS FILES============ */
import signUp from "./User/signup";
import login from "./User/signin";

import { isAdmin } from "../middlewares/auth";
/* ============CATEGORIES============ */
import postCategories from "./Categories/postCategories";
import deleteCategory from "./Categories/deleteCategory";
import getCategories from "./Categories/getAllCategories";
/* ============REVIEWS============ */
import postReview from "./Reviews/postReview";
import deleteReview from "./Reviews/deleteReview";
import editReview from "./Reviews/editReview";
/* ============PAYMENTS============*/
import Paypal from "./Payments/Paypal";

const router = Router();

/* ============PRODUCTS============ */
router.use("/products", postProducts);
router.use("/products", getAllProducts);
router.use("/products", getSearchedProducts);
router.use("/products", getProduct);
router.use("/products", deleteProducts);
router.use("/products", filterProducts);
router.use("/products", editProducts);
router.use("/products", populatedProducts);

/* ============USERS============ */
router.use("/users", signUp);
router.use("/users", login);
router.use("/users", isAdmin);

/* ============CATEGORIES============ */
router.use("/categories", postCategories);
router.use("/categories", deleteCategory);
router.use("/categories", getCategories);

/* ============REVIEWS============ */
router.use("/reviews", postReview);
router.use("/reviews", deleteReview);
router.use("/reviews", editReview);

/* ============PAYMENTS============*/
router.use("/payments", Paypal);

export default router;
