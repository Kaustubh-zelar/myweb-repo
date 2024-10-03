import { useRouter } from "next/router";
import { products } from "../utils/products";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id == id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <Navbar />
      <BackButton />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}
