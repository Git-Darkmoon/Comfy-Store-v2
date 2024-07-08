export const formatPrice = (price: number | string): string => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(((price as number) / 100).toFixed(2)))

  return dollarsAmount
}
