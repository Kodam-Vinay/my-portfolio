import OfflineLogo from "../../components/svgs/OfflineLogo";

const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-2">
      <OfflineLogo className="w-52 sm:w-96" />
      <h1 className="text-xl sm:text-2xl font-bold text-[#3b82f6] text-center">
        Please! Check Your Internet Connection
      </h1>
    </div>
  );
};
export default OfflinePage;
