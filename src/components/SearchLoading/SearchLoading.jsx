const SearchLoading = () => {
  return (
    <div className=" absolute top-1/2 left-1/2">
      <div className="flex space-x-2">
        <span className="loading loading-bars loading-xs text-primary"></span>
        <span className="loading loading-bars loading-sm text-secondary"></span>
        <span className="loading loading-bars loading-md text-accent"></span>
        <span className="loading loading-bars loading-lg text-neutral"></span>
        <span className="loading loading-bars loading-xl text-success"></span>
      </div>
    </div>
  );
};

export default SearchLoading;
