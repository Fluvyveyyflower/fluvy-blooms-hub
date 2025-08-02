import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

const Index = () => {
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
    // In real app, this would open edit modal or navigate to edit page
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
      <Header />
      <Hero />
      <ProductsSection 
        isAdmin={isAdminAuthenticated}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
      <About />
      <Contact />
      <AdminPanel 
        isAuthenticated={isAdminAuthenticated}
        onLogin={handleAdminLogin}
        onLogout={handleAdminLogout}
      />
      <Footer />
    </div>
  );
};

export default Index;
