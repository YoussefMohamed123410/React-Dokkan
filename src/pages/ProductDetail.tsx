import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
