import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, ChevronLeft, Minus, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart";
import { handleWhatsAppOrder } from "@/lib/whatsapp";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find(p => p.id === Number(id));
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [mainImage, setMainImage] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-sm text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const onOrder = () => {
    handleWhatsAppOrder(product, {
      color: product.colors[selectedColor]?.name,
      size: product.sizes?.[selectedSize],
    });
  };

  const onAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: product.colors[selectedColor]?.name,
      size: product.sizes?.[selectedSize],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
    >
      {/* Back button */}
      <div className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-3 sm:mb-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Images */}
          <div className="space-y-2 sm:space-y-3">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary">
              <img
                src={product.images[mainImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${wishlisted ? "fill-accent text-accent" : "text-foreground"}`} />
              </button>
              {product.discountPercentage && (
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold bg-accent text-accent-foreground rounded-md">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-1.5 sm:gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(i)}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === mainImage ? "border-primary" : "border-border"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-4 sm:space-y-5">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary mb-0.5 sm:mb-1">{product.category}</p>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-tight">{product.name}</h1>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? "fill-rating text-rating" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground tabular-nums">{product.rating}</span>
              <span className="text-[10px] sm:text-sm text-muted-foreground">({product.reviews})</span>
            </div>

            <div className="flex items-baseline gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-foreground tabular-nums">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm sm:text-lg text-muted-foreground line-through tabular-nums">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="text-[10px] sm:text-sm font-semibold text-accent">Save {product.discountPercentage}%</span>
                </>
              )}
            </div>

            {/* Colors */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                Color: <span className="font-normal text-muted-foreground">{product.colors[selectedColor]?.name}</span>
              </p>
              <div className="flex gap-1.5 sm:gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md border transition-all ${i === selectedColor ? "ring-2 ring-primary ring-offset-2" : "border-border"}`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            {product.sizes && (
              <div>
                <p className="text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">Size</p>
                <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                  {product.sizes.map((size, i) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(i)}
                      className={`h-8 sm:h-10 px-3 sm:px-4 rounded-lg text-[11px] sm:text-sm font-medium transition-all ${i === selectedSize
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stock */}
            <p className={`text-[11px] sm:text-sm font-medium ${product.stock <= 5 ? "text-accent" : "text-primary"}`}>
              {product.stock <= 5 ? `Only ${product.stock} left` : "In Stock"}
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed sm:leading-relaxed max-w-prose">{product.fullDesc}</p>

            {/* Actions */}
            <div className="flex flex-col gap-2 sm:gap-3 pt-1 sm:pt-2">
              <button
                onClick={onOrder}
                className="flex items-center justify-center gap-1.5 sm:gap-2 w-full h-12 sm:h-14 bg-whatsapp text-whatsapp-foreground font-bold text-base sm:text-lg rounded-lg hover:bg-whatsapp/90 transition-all active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Order Now
              </button>
              <button
                onClick={onAddToCart}
                className="w-full h-10 sm:h-12 border-2 border-primary text-primary font-semibold text-sm sm:text-base rounded-lg hover:bg-primary hover:text-primary-foreground transition-all active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <section className="mt-10 sm:mt-12 pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-1 h-5 sm:h-6 rounded-full bg-primary" />
              <h2 className="text-base sm:text-lg font-bold text-foreground">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetail;