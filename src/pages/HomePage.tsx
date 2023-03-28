import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { BooksItem } from "../components/BooksItem";
import { useGetBooksQuery } from "../services/booksApi";
import { IBook } from "../models/models";
import { BooksLoader } from "../components/BooksLoader";

interface IOutlet {
  searchValue: string;
  getSearchValue: string;
  categoriesValue: string;
  sortValue: string;
}

export const HomePage = () => {
  const { getSearchValue, categoriesValue, sortValue } =
    useOutletContext<IOutlet>();
  const [newData, setNewData] = useState<IBook[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const { isLoading, isError, data } = useGetBooksQuery(
    {
      terms: getSearchValue,
      sorting: sortValue,
      categories: categoriesValue,
      startIndex: currentIndex,
    },
    {
      skip: getSearchValue.length < 3,
    }
  );

  useEffect(() => {
    setNewData(data?.items ?? []);
  }, [data]);

  const handleRefetch = () => {
    setNewData((newBooks) => [...(newBooks ?? []), ...(data?.items ?? [])]);
  };

  if (isLoading) {
    return (
      <div>
        <BooksLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Ошибка!</h1>
      </div>
    );
  }

  return (
    <div className="w-full pr-[15px] pl-[15px]">
      <div className="max-w-[1200px] m-auto">
        <h2 className="p-[20px] text-center font-medium">
          Found {data?.totalItems} results
        </h2>
        <div className="flex flex-wrap justify-between">
          {newData &&
            newData?.length !== 0 &&
            newData?.map((books: any) => (
              <BooksItem key={books.id} books={books} />
            ))}
        </div>
        <div className="flex justify-center p-[20px]">
          <button
            className="py-[10px] 
                px-[50px] 
                border rounded-[10px] 
                hover:scale-90 ease-in 
                duration-300 
                hover:bg-black 
                hover:text-white"
            onClick={handleRefetch}
          >
            <p>Show More</p>
          </button>
        </div>
      </div>
    </div>
  );
};
