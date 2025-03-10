"use client";
import React from "react";
import Image from "next/image";

export const ProductSection = ({
  reversed = false,
  title,
  desc,
  imgName,
  bullets,
}: {
  reversed: Boolean;
  title: String;
  desc: String;
  imgName: String;
  bullets: Array<String>;
}) => {
  return (
    <div
      className={
        reversed
          ? "flex flex-col-reverse md:flex-row gap-8 justify-between items-center"
          : "flex flex-col md:flex-row gap-8 justify-between items-center"
      }
    >
      {!reversed ? (
        <div className="w-full h-[300px] overflow-hidden rounded-2xl relative max-w-100 max-h-[250px] md:max-h-[400px] md:max-w-[400px] lg:max-h-[500px] lg:max-w-[500px]">
          <Image
            className="zoom-effect"
            src={`/image/${imgName}`}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}
      <div className="flex flex-col flex-1 gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-secondary">{desc}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">We Offer</h4>
          <ul className="list-disc grid gap-1 grid-cols-1 px-8">
            {bullets.map((bullet, index) => (
              <li key={index}>
                <h5>{bullet}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {reversed ? (
        <div className="w-full h-[300px] overflow-hidden rounded-2xl relative max-w-100 max-h-[250px] md:max-h-[400px] md:max-w-[400px] lg:max-h-[500px] lg:max-w-[500px]">
          <Image
            className="zoom-effect"
            src={`/image/${imgName}`}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}
    </div>
  );
};
