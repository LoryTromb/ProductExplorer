import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    document.title = product ? product.name : 'Product not found';
  }, [product]);

  return (
    <div>
      {product === undefined ? (
        <h1>Product not found</h1>
      ) : (
        <>
          <h1>{product.name}</h1>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </>
      )}
      <Link to="/products">Back to products</Link>
    </div>
  );
}
