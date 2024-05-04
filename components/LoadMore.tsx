"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { fecheAnimes } from "@/app/actions";
import AnimeCard from "@/components/AnimeCard";

let page = 2;

export type AnimeCard = JSX.Element;

const LoadMore = () => {
  const [data, setData] = useState<AnimeCard[]>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fecheAnimes(page).then((res) => {
        setData((prev) => [...prev, ...res]);
        page++;
      });
    }
  }, [inView, data]);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">{data}</section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image src="./spinner.svg" alt="spinner" width={50} height={50} className="object-contain" />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
