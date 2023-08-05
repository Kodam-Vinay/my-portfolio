import OfflineLogo from "../../components/svgs/OfflineLogo";

const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <OfflineLogo className="w-96" />
      <h1 className="text-2xl font-bold text-[#3b82f6]">
        Please! Check Your Internet Connection
      </h1>
    </div>
  );
};
export default OfflinePage;
