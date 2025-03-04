"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductContainer from "../../../components/shared/ProductContainer";
import SidebarFilter from "../../../components/shared/SidebarFilter";
import ReactPaginate from "react-paginate";
import CircleBackground from "../../../components/ui/circleBackground";
import AdminModal from "../../../components/shared/AdminModal"; // Импортируем модальное окно админ-панели

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 4000]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false); // Состояние для отображения модального окна

  const PRODUCTS_PER_PAGE = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "categories");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
      setFilteredProducts(productsList); // Initial filtering
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on category and price range
    let filtered = products.filter((product) => {
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, products]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    currentPage * PRODUCTS_PER_PAGE,
    (currentPage + 1) * PRODUCTS_PER_PAGE
  );

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main className="relative max-w-[1600px] mx-auto px-[20px] pb-[68px] z-[1] pt-[80px] flex flex-col gap-[50px]">
      <CircleBackground className="right-[-15%] top-[250px]" />
      <CircleBackground className="left-[-15%] top-[750px]" />
      <button
        onClick={() => setShowModal(true)}
        className="absolute top-4 right-4 bg-[#C3BE10] text-white px-4 py-2 rounded"
      >
        Открыть админ-панель
      </button>
      <div className="flex gap-[180px] justify-between">
        <SidebarFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
        <ProductContainer products={currentProducts} />
      </div>

      {showModal && (
        <AdminModal setShowModal={setShowModal} products={products} />
      )}

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </main>
  );
};

export default CatalogPage;
