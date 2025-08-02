import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import AdminPanel from "@/components/AdminPanel";
import ProductsSection from "@/components/ProductsSection";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

const Admin = () => {
  const navigate = useNavigate();
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleAdminLogin = (password: string) => {
    // Simple password check - in real app this would be more secure
    if (password === "admin123") {
      setIsAdminAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
  };

  const handleEditProduct = (product: Product) => {
    console.log("Edit product:", product);
    // In real app, this would open edit modal or update the product
  };

  const handleDeleteProduct = (id: string) => {
    console.log("Delete product:", id);
    // In real app, this would delete from database
    if (confirm("Are you sure you want to delete this product?")) {
      // Delete logic here
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Website</span>
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-2xl font-bold text-primary">FluvyveyyFlowers Admin</h1>
          </div>
          {isAdminAuthenticated && (
            <Button onClick={handleAdminLogout} variant="outline">
              Logout
            </Button>
          )}
        </div>
      </header>

      {/* Admin Content */}
      <main>
        <AdminPanel 
          isAuthenticated={isAdminAuthenticated}
          onLogin={handleAdminLogin}
          onLogout={handleAdminLogout}
        />
        
        {/* Product Management Section - Only shown when authenticated */}
        {isAdminAuthenticated && (
          <div className="border-t bg-muted/20">
            <div className="container mx-auto px-4 py-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Product Management</h2>
              <ProductsSection 
                isAdmin={true}
                onEditProduct={handleEditProduct}
                onDeleteProduct={handleDeleteProduct}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;