import React from "react";
import { useNavigate } from "react-router-dom";
import { IBook } from "../models/models";

interface BooksItemProps {
  books: IBook;
}

export const BooksItem: React.FC<BooksItemProps> = ({ books }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-[18%] p-2 m-[5px]
        flex flex-wrap justify-center 
        rounded-[20px] 
        hover:cursor-pointer b
        g-gray-300 
        lg:w-[23%] xlg:w-[32%] md:w-[48%] smm:w-[100%] 
        hover:scale-90 
        ease-in 
        duration-300 
        drop-shadow-xl 
        shadow-black"
      onClick={() => navigate(`bookdetail/${books.id}`)}
    >
      <div className="w-100 h-100 text-center overflow-hidden">
        <img
          className="object-cover"
          src={books.volumeInfo.imageLinks?.thumbnail}
          alt={books.volumeInfo.title}
        />
      </div>
      <div className="p-[1rem] text-center lg:p-[0.5rem]">
        <p className="text-sm mb-2 underline">{books.volumeInfo.categories}</p>
        <p className="text-base mb-2 font-bold">{books.volumeInfo.title}</p>
        <p className="text-sm font-thin">{books.volumeInfo.authors}</p>
      </div>
    </div>
  );
};
