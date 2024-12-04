const MonogramLogo = () => {
  return (
    <div className="relative group">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-cyan-900 dark:bg-cyan-700 rounded flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12">
          <span className="text-white font-bold text-xl">JK</span>
        </div>
        <span className="font-semibold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          Jawwad Khan
        </span>
      </div>
    </div>
  );
};

export default MonogramLogo;
