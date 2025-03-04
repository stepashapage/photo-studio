import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const AdminModal = ({ setShowModal, products }) => {
  const [editedProducts, setEditedProducts] = useState(products);

  const handleInputChange = (index, key, value) => {
    const newProducts = [...editedProducts];
    newProducts[index][key] = value;
    setEditedProducts(newProducts);
  };

  const handleSave = async (index) => {
    const product = editedProducts[index];
    console.log("Attempting to update product:", product); // Логирование данных

    if (product.id !== undefined) {
      // Проверка наличия id
      const productId = product.id.toString(); // Убедитесь, что id передается как строка
      console.log("Updating document with ID:", productId); // Логирование идентификатора

      const productDoc = doc(db, "categories", productId);
      try {
        await updateDoc(productDoc, {
          name: product.name,
          price: product.price,
        });
        alert("Изменения сохранены!");
      } catch (error) {
        console.error("Error updating document:", error);
        alert("Ошибка при сохранении изменений: " + error.message);
      }
    } else {
      alert("Отсутствует идентификатор продукта.");
    }
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClickOutside}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
      >
        <div className="relative flex flex-col items-center gap-[30px] px-[55px] py-[60px] w-[590px] h-[590px] rounded-[20px] bg-[#1A1717] shadow-[0_0_80px_0_rgba(237,188,90,0.3)] overflow-y-auto">
          <h2 className="text-[28px] tracking-[0.07em] font-bold text-[#fff]">
            Админ-панель
          </h2>
          <div className="flex flex-col gap-4 w-full overflow-y-auto">
            {editedProducts.map((product, index) => (
              <div key={product.id} className="flex items-center gap-4">
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
                />
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    handleInputChange(index, "price", Number(e.target.value))
                  }
                  className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
                />
                <button
                  onClick={() => handleSave(index)}
                  className="text-[#fff] text-[14px] font-regular bg-[#EDBC5A] py-[10px] px-[10px] rounded-[10px] mr-[10px]"
                >
                  Сохранить
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="w-full py-[16px] bg-[#EDBC5A] text-white rounded-[10px]"
          >
            Закрыть
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdminModal;
