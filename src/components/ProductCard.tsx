import { Link } from 'react-router-dom';

type Props = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export function ProductCard({ id, name, category, price }: Props) {
  return (
    <li>
      <Link to={`/products/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>Category: {category}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </li>
  );
}
