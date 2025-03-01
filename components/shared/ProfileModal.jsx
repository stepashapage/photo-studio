import React from "react";

const ProfileModal = ({ isOpen, onClose, user, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-start bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96 h-full">
        <h2 className="text-2xl mb-4">Ваш профиль</h2>
        <p>Email: {user.email}</p>
        <p>Номер телефона: +7 900 000 00 00</p>
        <button onClick={onLogout} className="w-full p-2 bg-red-500 text-white">
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
