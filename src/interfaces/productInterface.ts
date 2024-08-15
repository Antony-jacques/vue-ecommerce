import { Category } from "./Filters.interface";

export interface ProductInterface {
  id: number
  title: string,
  description: string,
  image: string,
  price: number,
  category: Category
}