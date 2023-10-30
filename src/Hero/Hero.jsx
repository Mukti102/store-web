function Hero() {
  return (
    <div className="sm:w-[100%] sm:h-[600px] sm:bg-[url('./public/3dd.png')] sm:bg-cover sm:bg-center scale-100 flex sm:items-center rounded-[1.5rem] relative h-[200px] bg-[url('./public/3dd.png')] bg-center bg-cover px-4 items-center w-full">
      <div className="sm:w-[50%]  sm:absolute sm:right-0 sm:mx-36  sm:flex sm:flex-col w-[50%] absolute right-10">
        <h1 className="sm:text-5xl sm:font-bold sm:text-white sm:text-right text-right font-semibold text-lg">
          Get the best product at your <span className="">Home</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
