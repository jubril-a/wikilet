'use client'

import DetailedProductCard from "./DetailedProductCard";
import ListingsHead from "./ListingsHead";
import { Dispatch, SetStateAction } from "react";

export default function ListingsBar({state}: {state:[boolean, Dispatch<SetStateAction<boolean>>]}) {
  return (
    <div className="grow">
      <ListingsHead state={state} />
      <main className="grid gap-3 min-[580px]:gap-4 min-[480px]:grid-cols-2">
        <DetailedProductCard />
        <DetailedProductCard />
        <DetailedProductCard />
        <DetailedProductCard />
        <DetailedProductCard />
        <DetailedProductCard />
        <DetailedProductCard />
        <DetailedProductCard />
      </main>
    </div>
  );
}