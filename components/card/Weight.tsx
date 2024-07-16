export const Weight = ({ weight }: { weight: string }) => {
    return (
      <button className="flex border-[1px] shadow-sm bg-teal-100 text-teal-800 font-medium mx-auto my-3 px-2 py-1 rounded-md items-center focus:outline-none focus:border-sky-500">
        {weight}
      </button>
    );
  };
  