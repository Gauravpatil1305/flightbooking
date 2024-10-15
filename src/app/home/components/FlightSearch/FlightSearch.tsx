"use client"; // Mark this component as a Client Component

import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFlights } from "@/redux/slices/flightSlice";
import { useRouter } from "next/navigation"; // next/router yerine next/navigation kullanıyoruz
import type { AppDispatch } from "@/redux/store";

const FlightSearch = () => {
  const [airport, setAirport] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Havaalanı kodunu kontrol et
    if (airport.trim() === "") {
      alert("Havaalanı kodunu girin!");
      return;
    }

    try {
      // Redux'tan gelen action ile uçuş verilerini çekin
      await dispatch(fetchFlights(airport)).unwrap();
      // Başarılı bir şekilde sonuçları aldıysanız, yeni sayfaya yönlendir
      router.push("/flights");
    } catch (error) {
      console.error("Uçuş arama hatası:", error);
      alert("Uçuş arama sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Havaalanı Kodu"
          value={airport}
          onChange={(e) => setAirport(e.target.value)}
          required
        />
        <button type="submit">Ara</button>
      </form>
    </div>
  );
};

export default FlightSearch;
