import type { Product } from "@/data/products";

export const handleWhatsAppOrder = (product: Product, variant?: { color?: string; size?: string }) => {
  const message = `🛍️ *New Order Inquiry*

*Product:* ${product.name}
*Price:* ₹${product.price.toLocaleString()}
${variant?.color ? `*Color:* ${variant.color}` : ""}
${variant?.size ? `*Size:* ${variant.size}` : ""}

_Ready to process this order?_`;

  const phone = "911234567890"; // Replace with actual number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
