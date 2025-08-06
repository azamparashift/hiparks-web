export const HeaderSection = ({ title, description }) => (
  <div className="w-full px-4">
    <h1 className="text-[32px] max-w-[70%] bw-m :leading-[102%] font-bold">
      {title}
    </h1>
    <p className="mt-3 inter-r max-w-[90%] text-[16px]  sm:text-[18px] leading-[20px] sm:leading-[24px] text-gray-600">
      {description}
    </p>
  </div>
);
