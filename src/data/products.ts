export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export const categories = ['Electronics', 'Clothing', 'Books'];

export const products: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Headphones', category: 'Electronics', price: 149 },
  { id: 3, name: 'T-Shirt', category: 'Clothing', price: 19 },
  { id: 4, name: 'Jeans', category: 'Clothing', price: 49 },
  { id: 5, name: 'Novel', category: 'Books', price: 12 },
  { id: 6, name: 'Cookbook', category: 'Books', price: 25 },
];
