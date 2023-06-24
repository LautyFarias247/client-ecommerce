import Link from "next/link";
import React from "react";
import { ChevronRight } from 'react-feather';

const BreadCrumbs = ({ product }) => {
  const breadCrumbs = () => {
    const { category, subcategory, name, _id } = product;
    const items = [
      { name: "Home", url: "/" },
      { name: category, url: `/${category}` },
      { name: subcategory, url: `/${category}/${subcategory}` },
			{name, url: `/product/${_id}` }
    ];
    return items;
  };
  return (
    <section>
      <div>
        <ol className="flex">
          {breadCrumbs().map((item, i) => {
            return <li key={i} className="flex items-center">
							<Link href={item.url.toLowerCase()}>{item.name}</Link>
							{breadCrumbs().length -1 !== i && <ChevronRight size={16}/>}
						</li>;
          })}
        </ol>
      </div>
    </section>
  );
};

export default BreadCrumbs;
