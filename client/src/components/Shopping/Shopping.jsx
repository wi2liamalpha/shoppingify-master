import React from "react";
import Item from "../Item/Item";

function Shopping({ _id, name, items }) {
  return (
    <main className="bg-slate-100 flex flex-col flex-1 px-4 py-5 gap-5">
      <div className="flex flex-col gap-2">
        <h1 className=" font-bold">{name}</h1>
        <div className="flex flex-row justify-between gap-3 flex-wrap ">
          {items &&
            items.map((item) => (
              <Item key={item._id} category_id={_id} items={item}></Item>
            ))}
        </div>
      </div>
    </main>
  );
}

export default Shopping;
