import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
