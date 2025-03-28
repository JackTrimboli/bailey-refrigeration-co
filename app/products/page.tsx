"use client";
import React from "react";
import { ProductSection } from "@/components/ProductSection/ProductSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Products() {
  return (
    <div className="mx-auto max-w-[1280px] flex flex-col gap-8 px-4 md:px-8 lg:px-16">
      <div className="fade-down-animation flex flex-col gap-4 text-left">
        <h1>Products & Services</h1>
        <h4 className="text-secondary font-medium text-sm md:text-base">
          Bailey Refrigeration stocks millions of dollars worth of parts for
          refrigeration, air conditioning, heating, and dehumidification. We are
          committed to meeting our customers&apos; needs instantly, thanks to
          our meticulous &quot;in-stock&quot; approach.
        </h4>
      </div>
      <span className="fade-up-animation">
        <ProductSection
          reversed={false}
          title={"Marine Equipment"}
          desc={
            "Designed to withstand harsh marine conditions, our specialized equipment ensures durability and reliability in maritime environments."
          }
          imgName={"marine-equipment.jpg"}
          bullets={[
            "Custom-designed Controls & Equipment",
            "Tested for marine environments",
            "Holding patents on military-grade equipment tested for marine environments",
          ]}
        />
      </span>
      <span className="fade-up-animation">
        <ProductSection
          reversed={true}
          title={"Industrial Equipment"}
          desc={
            "A comprehensive selection of high-performance HVAC-R equipment for commercial buildings, industrial facilities, and specialized applications."
          }
          imgName={"scaffold-machinery.jpg"}
          bullets={[
            "Roof Top Units",
            "Chillers: Chiller Barrels, Heat Exchangers, Cooling Coils",
            "Walk-in Boxes",
            "Fan Coil Units, Coils, Fittings, Tubing",
            "Condensers",
          ]}
        />
      </span>
      <span className="fade-up-animation">
        <ProductSection
          reversed={false}
          title={"Parts & Tools"}
          desc={
            "A vast inventory of essential components and supplies for HVAC-R maintenance, repairs, and installations."
          }
          imgName={"warehouse.jpg"}
          bullets={[
            "Refrigerants, Oils, & HVAC Chemicals",
            "Gauges & Gauging Tools ",
            "Thousands of Other Parts in Stock ",
          ]}
        />
      </span>
    </div>
  );
}
