import React from "react";
import { useParams } from "react-router-dom";
import { useGetBooksIdQuery } from "../services/booksApi";

export const BookPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBooksIdQuery(id);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="flex justify-between items-center flex-wrap max-w-full min-h-full p-[20px] mt-[10px]">
      <div className="w-[100%] flex justify-center overflow-hidden">
        <img
          className="object-cover"
          src={data?.volumeInfo.imageLinks?.thumbnail}
          alt={data?.volumeInfo.title}
        />
      </div>
      <div className="pl-[30px] xlg:pt-[2rem]">
        <h1 className="text-3xl font-thin pb-5">
          {data?.volumeInfo.categories}
        </h1>
        <h2 className="text-2xl pb-2 font-bold">{data?.volumeInfo.title}</h2>
        <p className="text-1xl pb-5">{data?.volumeInfo.authors}</p>
        <p className="text-xl">{data?.volumeInfo.description}</p>
      </div>
    </div>
  );
};
