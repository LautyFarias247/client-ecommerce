import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Search } from "react-feather";

const Searchbar = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      if (!keyword) {
        searchParams.delete("keyword");
        router.push(`/products?${searchParams}`);
        return;
      }

      searchParams.set("keyword", keyword);
      router.push(`/products?${searchParams}`);
    }
  };
  return (
    <form className="hidden lg:flex lg:items-center" onSubmit={handleSubmit}>
      <input
        className="text-black"
        type="text"
        placeholder="Buscar producto..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="bg-white">
        <Search color="#004080" className="bg-white" />
      </button>
    </form>
  );
};

export default Searchbar;
