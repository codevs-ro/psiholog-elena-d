"use client";
import { useState } from "react";

const Formular = () => {
  return (
    <div className="px-8 py-0 md:py-32 flex items-center justify-center min-h-screen flex-col gap-8 bg-gray-50">
      <h1 className="text-black font-semibold text-2xl">
        Completează Formularul
      </h1>
      <form className="w-full md:w-5/12 md:p-8 mx-auto flex flex-col gap-2 bg-gradient-to-r border-2 border-red-200 rounded-md from-teal-400/20 to-red-400/20 p-2">
        <label className="text-lg  font-semibold">Nume Complet</label>
        <input
          type="name"
          className="bg-transparent focus:outline-none border-b-2 border-gray-50 placeholder:text-black/20  px-2 text-black"
          placeholder="Ex. Ion Popescu"
        ></input>
        <label className="mt-6 font-semibold text-lg">Nr. Telefon</label>
        <input
          type="text"
          placeholder="Ex. +4078 876 789"
          className="bg-transparent focus:outline-none border-b-2 border-gray-50 placeholder:text-black/20  px-2 text-black"
        ></input>
        <label className="mt-6 font-semibold text-lg">Email</label>

        <input
          type="email"
          placeholder="Ex. email@example.com"
          className="bg-transparent focus:outline-none border-b-2 border-gray-50 placeholder:text-black/20  px-2 text-black"
        ></input>
        <label className="mt-6 font-semibold text-lg">
          Obiectivul solicitării terapiei
        </label>

        <textarea
          className="bg-transparent focus:outline-none border-2 border-gray-50 rounded-md p-2"
          placeholder="Ex. Îmbunătățirea stimei de sine "
        ></textarea>
        <label className="mt-6 font-semibold text-lg">
          {" "}
          Mă interesează Abonamentul
        </label>
        <select className="border-b-2 focus:outline-none border-gray-50 bg-transparent px-2">
          <option>Selectează Abonamentul</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button className="px-8 py-2 rounded-md hover:rounded-2xl transition-all ease-in-out text-white bg-teal-600 mt-8 text-lg font-semibold">
          Trimite
        </button>
      </form>
    </div>
  );
};

export default Formular;
