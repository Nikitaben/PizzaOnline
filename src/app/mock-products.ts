import { Product } from "./models/product";
import { Size } from "./models/size";

export const PRODUCTS: Product[] = [
  {
   id: 1,
   name: "Pizza",
   price: 7.55,
   imageUrl: "../assets/pizza.jpg",
   toppings: [],
   sizes: [ Size.SMALL, Size.MEDIUM, Size.LARGE],
  },
   {
    id: 2,
    name: "Pasta",
    price: 6.55,
    imageUrl: "../assets/pasta.jpg",
    toppings: [],
    sizes: [ Size.SMALL, Size.LARGE],
  }
];

