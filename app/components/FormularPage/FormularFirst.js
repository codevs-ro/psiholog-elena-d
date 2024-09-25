"use client";
import { useState } from "react";
import Link from "next/link";
const Formular = () => {
  const [formInfo, setFormInfo] = useState({
    nume: "",
    telefon: "",
    email: "",
    obiectiv: "",
    abonament: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((previnfo) => ({
      ...previnfo,
      [name]: value,
    }));
  };

  return (
    <div className="px-8 py-0 md:py-32 flex items-center justify-center min-h-screen flex-col gap-8 bg-gray-50">
      <h1 className="slide-in text-black font-semibold text-2xl">
        Completează Formularul
      </h1>
      <form className="slide-in w-full md:w-5/12 md:p-8 mx-auto flex flex-col gap-2 bg-gradient-to-r border-2 border-red-200 rounded-md from-teal-400/20 to-red-400/20 p-2">
        <label className="text-lg  font-semibold">Nume Complet</label>
        <input
          name="nume"
          value={formInfo.nume}
          onChange={handleChange}
          required
          type="text"
          className="bg-transparent focus:outline-none border-b-2 border-gray-50 placeholder:text-black/20  px-2 text-black"
          placeholder="Ex. Ion Popescu"
        ></input>
        <label className="mt-6 font-semibold text-lg">Nr. Telefon</label>
        <input
          name="telefon"
          value={formInfo.telefon}
          onChange={handleChange}
          required
          type="text"
          placeholder="Ex. +4078 876 789"
          className="bg-transparent focus:outline-none border-b-2 border-gray-50 placeholder:text-black/20  px-2 text-black"
        ></input>
        <label className="mt-6 font-semibold text-lg">Email</label>

        <input
          name="email"
          value={formInfo.email}
          onChange={handleChange}
          required
          type="email"
          placeholder="Ex. email@example.com"
          className="bg-transparent focus:outline-none border-b-2 border-gray-50 placeholder:text-black/20  px-2 text-black"
        ></input>
        <label className="mt-6 font-semibold text-lg">
          Obiectivul solicitării terapiei
        </label>

        <textarea
          name="obiectiv"
          value={formInfo.obiectiv}
          onChange={handleChange}
          required
          type="text"
          className="bg-transparent focus:outline-none border-2 border-gray-50 rounded-md p-2"
          placeholder="Ex. Îmbunătățirea stimei de sine "
        ></textarea>
        <label className="mt-6 font-semibold text-lg">
          {" "}
          Mă interesează Abonamentul
        </label>
        <select
          name="abonament"
          onChange={handleChange}
          required
          value={formInfo.abonament}
          className="border-b-2 focus:outline-none border-gray-50 bg-transparent px-2"
        >
          <option>Selectează Abonamentul</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Regular">Regular</option>
        </select>
        {formInfo.nume &&
          formInfo.telefon &&
          formInfo.email &&
          formInfo.obiectiv &&
          formInfo.abonament && (
            <Link
              href={`mailto:elena.dordea@gmail.com?subject=Formular Terapie&body=${encodeURIComponent(
                `Name: ${formInfo.nume}\nTelefon: ${formInfo.telefon}\nEmail: ${formInfo.email}\nObiectiv: ${formInfo.obiectiv}\nAbonament: ${formInfo.abonament}`
              )}`}
              className="px-8 py-2 rounded-md hover:rounded-2xl transition-all ease-in-out text-white bg-teal-600 mt-8 text-lg font-semibold text-center"
            >
              Trimite
            </Link>
          )}
        {(!formInfo.nume ||
          !formInfo.telefon ||
          !formInfo.email ||
          !formInfo.obiectiv ||
          !formInfo.abonament) && (
          <p className="text-red-400 w-full text-center mt-8">
            Completează toate câmpurile
          </p>
        )}
      </form>
    </div>
  );
};

export default Formular;
