"use client";
import React, { useEffect, useState } from "react";

const CheckboxSubcategory = ({ name, subcategories, setSubcategories }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.location.search);
      const searchQuery = new URLSearchParams(window.location.search);
      const subcategories = searchQuery.get("subcategory");
      if (!subcategories) return;
      const parsedSubcategories = subcategories.split(",");
      if (parsedSubcategories.includes(name)) {
        setIsChecked(true);
      }
    }
  }, []);

  const handleCheck = (e) => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      subcategories
        ? setSubcategories([...subcategories, name])
        : setSubcategories([name]);
    } else {
      setSubcategories(subcategories.filter((s) => s !== name));
    }
  };

  return (
    <li>
      <label>
        <input
          name="subcategory"
          type="checkbox"
          value={name}
          checked={isChecked}
          onChange={handleCheck}
        />
        <span>{name}</span>
      </label>
    </li>
  );
};

export default CheckboxSubcategory;
