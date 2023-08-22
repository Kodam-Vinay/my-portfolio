import QuoteIcon from "../svgs/QuoteIcon";

const QuoteContainer = () => {
  return (
    <div className="font-fira flex flex-col md:flex-row md:justify-between w-full">
      <div className="flex flex-col md:justify-self-center w-[90%] md:w-[50%] relative m-auto">
        <QuoteIcon className="relative top-2 left-2 xl:left-20" />
        <div className="border m-auto flex flex-col items-center justify-center p-4 text-white font-[500] rounded-md">
          Of course, bad code can be cleaned up. But it’s very expensive.
        </div>
      </div>
      <div className="h-14 w-14 relative border hidden top-10 md:inline-flex left-5"></div>
    </div>
  );
};
export default QuoteContainer;
