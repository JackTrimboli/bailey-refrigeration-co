"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Products() {
  const images = [
    "/image/ship-night.jpg",
    "/image/ship-side-view.jpg",
    "/image/ship-worker.jpg",
    "/image/birds-eye-view.jpg",
  ];

  return (
    <div className="mx-auto max-w-[1280px] flex flex-col px-4 md:px-8 lg:px-16">
      <div className="fade-down-animation flex flex-col gap-4 text-left mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Our Products</h1>
        <h4 className="text-secondary font-medium text-sm md:text-base">
          Bailey Refrigeration stocks millions of dollars worth of parts for
          refrigeration, air conditioning, heating, and dehumidification. We are
          committed to meeting our customers' needs instantly, thanks to our
          meticulous "in-stock" approach.
        </h4>
      </div>
      <div className="mx-auto fade-down-animation">
        <Carousel showArrows={true}>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-center mx-auto h-[300px] "
              >
                <img
                  className="rounded-lg"
                  src={image}
                  alt={`Product ${index + 1}`}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
