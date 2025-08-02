import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

interface ProductsSectionProps {
  isAdmin?: boolean;
  onEditProduct?: (product: Product) => void;
  onDeleteProduct?: (id: string) => void;
}

const ProductsSection = ({ isAdmin = false, onEditProduct, onDeleteProduct }: ProductsSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sample products data - in real app this would come from a database
  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "Romantic Rose Bouquet",
        price: 299000,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        category: "Bouquet",
        description: "Beautiful red roses arranged perfectly for romantic occasions",
        inStock: true
      },
      {
        id: "2",
        name: "Wedding Centerpiece",
        price: 450000,
        image: "https://images.unsplash.com/photo-1544530286-73a4cb27eb3c?w=400",
        category: "Wedding",
        description: "Elegant centerpiece with white lilies and greenery",
        inStock: true
      },
      {
        id: "3",
        name: "Birthday Celebration Mix",
        price: 199000,
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400",
        category: "Birthday",
        description: "Colorful mix of seasonal flowers perfect for celebrations",
        inStock: false
      },
      {
        id: "4",
        name: "Sympathy Arrangement",
        price: 350000,
        image: "https://images.unsplash.com/photo-1574438858756-8d0e72f7c0b5?w=400",
        category: "Sympathy",
        description: "Peaceful white flowers for sympathy and remembrance",
        inStock: true
      },
      {
        id: "5",
        name: "Graduation Bouquet",
        price: 250000,
        image: "https://images.unsplash.com/photo-1563735530-54f6b11b8fad?w=400",
        category: "Graduation",
        description: "Bright and cheerful flowers to celebrate achievements",
        inStock: true
      },
      {
        id: "6",
        name: "Mother's Day Special",
        price: 320000,
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400",
        category: "Special",
        description: "Beautiful pink and white arrangement for mom",
        inStock: true
      }
    ];
    
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  // Filter products based on category and search term
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Beautiful Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide variety of fresh flowers and arrangements for every special occasion
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search flowers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer px-4 py-2 capitalize"
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All Products" : category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={handleViewProduct}
              onEdit={onEditProduct}
              onDelete={onDeleteProduct}
              isAdmin={isAdmin}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <Button
                  onClick={() => setSelectedProduct(null)}
                  variant="secondary"
                  size="sm"
                  className="absolute top-4 right-4"
                >
                  ✕
                </Button>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {selectedProduct.name}
                    </h3>
                    <Badge variant="secondary">{selectedProduct.category}</Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    Rp {selectedProduct.price.toLocaleString()}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {selectedProduct.description}
                </p>
                <div className="flex space-x-4">
                  <Button
                    onClick={() => {
                      const message = `Hello! I'm interested in ordering "${selectedProduct.name}" - Rp ${selectedProduct.price.toLocaleString()}. Can you help me with this order?`;
                      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    disabled={!selectedProduct.inStock}
                    className="flex-1"
                  >
                    Order via WhatsApp
                  </Button>
                  <Button
                    onClick={() => setSelectedProduct(null)}
                    variant="outline"
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;