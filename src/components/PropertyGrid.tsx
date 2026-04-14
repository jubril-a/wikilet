"use client";

import { useState } from "react";
import Image from "next/image";

type Property = {
  id: number;
  city: string;
  state: string;
  count?: number;
  image: string;
  featured?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    city: "Lekki",
    state: "Lagos",
    count: 124,
    image:
      "/images/lagos2.jpg",
    featured: true
  },
  {
    id: 2,
    city: "Maitama",
    state: "Abuja",
    image:
      "/images/lagos.jpg",
  },
  {
    id: 3,
    city: "Ikoyi",
    state: "Lagos",
    image:
      "/images/lagos3.png",
  },
  {
    id: 4,
    city: "VI",
    state: "Lagos",
    image:
      "/images/lagos.jpg",
  },
];

function FeaturedCard({ property }: { property: Property }) {

  return (
    <a href="" className="group w-full h-full relative max-[720px]:aspect-video min-[720px]:min-h-140 rounded-2xl overflow-hidden">
      <Image
        src={property.image}
        alt={`${property.city}, ${property.state}`}
        className="transition-transform duration-500 group-hover:scale-115 w-full h-full object-cover" fill
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
    
      <div className="absolute bottom-0 left-0 right-0 p-6 min-[640px]:py-10">
        {property.count && (
          <div className=" max-[420px]:hidden inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 mb-3">
            <span className="text-white text-xs font-medium tracking-wide">
              {property.count} Properties
            </span>
          </div>
        )}
        <h2 className="text-white min-[420px]:text-3xl font-semibold tracking-tight">
          {property.city},{" "}
          <span className="font-light">{property.state}</span>
        </h2>
      </div>
    </a>
  );
}

function PropertyCard({ property }: { property: Property }) {

  return (
    <a href="" className="block group relative w-full h-full max-[720px]:aspect-video rounded-2xl overflow-hidden">
      <Image
        src={property.image}
        alt={`${property.city}, ${property.state}`}
        className="transition-transform duration-500 group-hover:scale-115 w-full h-full object-cover object-center" fill
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-4 py-6">
        <p className="text-white font-medium">
          {property.city},{" "}
          <span className="font-light">{property.state}</span>
        </p>
      </div>
    </a>
  );
}

export default function PropertyGrid() {
  const [featured] = useState(properties.find((p) => p.featured)!);
  const [rest] = useState(properties.filter((p) => !p.featured));

  return (
      <div className="grid gap-3 min-[720px]:grid-cols-2">
        <FeaturedCard property={featured} />

        <div className="grid gap-3 min-[720px]:grid-cols-2">
            <div className="min-[720px]:col-span-2">
                <PropertyCard property={rest[0]} />
            </div>

            <PropertyCard property={rest[1]} />
            <PropertyCard property={rest[2]} />
        </div>
      </div>
  );
}