import SearchForm from "./SearchForm";

function SearchBox() {
  return (
    <div className="absolute -bottom-24 right-[5%] w-[90%] items-center rounded-xl bg-primary-500/95 p-5  sm:w-[85%] md:-bottom-[8%] md:right-[11%] md:w-[80%]">
      <SearchForm />
    </div>
  );
}

export default SearchBox;
