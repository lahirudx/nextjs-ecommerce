import prisma from "@/lib/db/prisma";
import Image from "next/image";

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  return <div></div>;
}
