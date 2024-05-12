export function formatPrice(price: number) {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "USD",
  });
}
