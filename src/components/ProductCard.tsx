import type { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - product.createdAt.getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          {isNew && <span className="badge badge-secondary">NEW</span>}
        </h2>
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
