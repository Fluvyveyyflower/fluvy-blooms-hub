import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

interface AdminPanelProps {
  isAuthenticated: boolean;
  onLogin: (password: string) => void;
  onLogout: () => void;
}

const AdminPanel = ({ isAuthenticated, onLogin, onLogout }: AdminPanelProps) => {
  const [password, setPassword] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  // Form state for product
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    inStock: true
  });

  const resetForm = () => {
    setProductForm({
      name: "",
      price: "",
      image: "",
      category: "",
      description: "",
      inStock: true
    });
    setEditingProduct(null);
    setShowAddProduct(false);
  };

  const handleLogin = () => {
    onLogin(password);
    setPassword("");
  };

  const handleSaveProduct = () => {
    if (!productForm.name || !productForm.price || !productForm.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would save to a database
    toast({
      title: "Success",
      description: editingProduct ? "Product updated successfully" : "Product added successfully",
    });
    
    resetForm();
  };

  const handleEditProduct = (product: Product) => {
    setProductForm({
      name: product.name,
      price: product.price.toString(),
      image: product.image,
      category: product.category,
      description: product.description,
      inStock: product.inStock
    });
    setEditingProduct(product);
    setShowAddProduct(true);
  };

  const handleDeleteProduct = (id: string) => {
    // In a real app, this would delete from database
    toast({
      title: "Success",
      description: "Product deleted successfully",
    });
  };


  if (!isAuthenticated) {
    return (
      <section id="admin" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Admin Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    placeholder="Enter admin password"
                  />
                </div>
                <Button onClick={handleLogin} className="w-full">
                  Login
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Demo password: admin123
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Admin Dashboard</h2>
          <Button onClick={onLogout} variant="outline">
            Logout
          </Button>
        </div>

        {/* Product Management */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-foreground">Product Management</h3>
          <Button
            onClick={() => setShowAddProduct(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Add/Edit Product Form */}
        {showAddProduct && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {editingProduct ? "Edit Product" : "Add New Product"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={productForm.name}
                    onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                    placeholder="Beautiful Rose Bouquet"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Price (Rp) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={productForm.price}
                    onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                    placeholder="299000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={productForm.image}
                  onChange={(e) => setProductForm({...productForm, image: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={productForm.category}
                  onValueChange={(value) => setProductForm({...productForm, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bouquet">Bouquet</SelectItem>
                    <SelectItem value="Wedding">Wedding</SelectItem>
                    <SelectItem value="Birthday">Birthday</SelectItem>
                    <SelectItem value="Sympathy">Sympathy</SelectItem>
                    <SelectItem value="Graduation">Graduation</SelectItem>
                    <SelectItem value="Special">Special</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={productForm.description}
                  onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                  placeholder="Beautiful arrangement perfect for special occasions..."
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="inStock"
                  checked={productForm.inStock}
                  onCheckedChange={(checked) => setProductForm({...productForm, inStock: checked})}
                />
                <Label htmlFor="inStock">In Stock</Label>
              </div>

              <div className="flex space-x-4">
                <Button onClick={handleSaveProduct} className="flex-1">
                  {editingProduct ? "Update Product" : "Add Product"}
                </Button>
                <Button onClick={resetForm} variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

      </div>
    </section>
  );
};

export default AdminPanel;