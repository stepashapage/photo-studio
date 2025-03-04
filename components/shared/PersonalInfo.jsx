import React from "react";

const PersonalInfo = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="relative flex flex-col gap-[58px] p-[35px] pb-[55px] w-full min-h-[350px] rounded-[30px] bg-[#1A1717] shadow-[0_0_30px_0_rgba(237,188,90,0.3)] after:absolute after:top-[88px] after:left-0 after:w-[100%] after:h-[1px] after:bg-[#fff]">
      <h3 className="text-[#fff] text-[24px] font-bold">
        2. Персональная информация
      </h3>
      <form className="grid grid-cols-2 gap-[55px]">
        <div className="flex flex-col w-full gap-[12px]">
          <label className="text-white">Имя</label>
          <input
            type="text"
            name="name"
            placeholder="Иван"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="flex flex-col w-full gap-[12px]">
          <label className="text-white">Фамилия</label>
          <input
            type="text"
            name="secName"
            placeholder="Иванов"
            value={formData.secName}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
          />
          {errors.secName && <p className="text-red-500">{errors.secName}</p>}
        </div>
        <div className="flex flex-col w-full gap-[12px]">
          <label className="text-white">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Ваш@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="flex flex-col w-full gap-[12px]">
          <label className="text-white">Телефон</label>
          <input
            type="tel"
            name="phone"
            placeholder="+7 (999) 999-99-99"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
