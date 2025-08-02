import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const ProductCard = ({ product, onView, onEdit, onDelete, isAdmin = false }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleWhatsAppOrder = () => {
    const message = `Halo FluvyveyyFlowers! Saya tertarik untuk memesan. "${product.name}" - Rp ${product.price.toLocaleString()}. Can you help me with this order?`;
    const whatsappUrl = `https://wa.me/62882007938488?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-card border-border overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onView(product)}
            className="bg-white/90 hover:bg-white text-foreground"
          >
            <Eye className="w-4 h-4" />
          </Button>
          
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setIsFavorite(!isFavorite)}
            className={`bg-white/90 hover:bg-white ${isFavorite ? 'text-red-500' : 'text-foreground'}`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 left-2">
          <Badge variant={product.inStock ? "default" : "destructive"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {product.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-card-foreground line-clamp-1">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="text-2xl font-bold text-primary">
            Rp {product.price.toLocaleString()}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        {!isAdmin ? (
          <div className="flex space-x-2 w-full">
            <Button
              onClick={handleWhatsAppOrder}
              disabled={!product.inStock}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Order via WhatsApp
            </Button>
          </div>
        ) : (
          <div className="flex space-x-2 w-full">
            <Button
              onClick={() => onEdit?.(product)}
              variant="outline"
              className="flex-1"
            >
              Edit
            </Button>
            <Button
              onClick={() => onDelete?.(product.id)}
              variant="destructive"
              className="flex-1"
            >
              Delete
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;