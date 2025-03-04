import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              items: [...state.items, { ...product, quantity: 1 }],
            };
          }
        });
      },
      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      clearCart: () => {
        set({ items: [] });
      },
      increaseQuantity: (product) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              items: [...state.items, { ...product, quantity: 1 }],
            };
          }
        });
      },
      decreaseQuantity: (productId) => {
        set((state) => {
          const item = state.items.find((item) => item.id === productId);
          if (item.quantity > 1) {
            return {
              items: state.items.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          } else {
            return {
              items: state.items.filter((item) => item.id !== productId),
            };
          }
        });
      },
      getTotalPrice: () => {
        const items = get().items;
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage", // Имя для хранения в localStorage
      getStorage: () => localStorage, // Используем localStorage для хранения
    }
  )
);

export default useCartStore;
