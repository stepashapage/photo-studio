import React from "react";

const LoginModal = ({ isOpen, onClose, onLogin, formData, handleChange }) => {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Вход</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border"
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-2 border"
        />
        <button onClick={onLogin} className="w-full p-2 bg-blue-500 text-white">
          Войти
        </button>
        <button
          onClick={onClose}
          className="w-full p-2 mt-2 bg-gray-500 text-white"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
