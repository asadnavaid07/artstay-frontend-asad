export const HeadlingUnderline = ({ title }: { title: string }) => (
  <h2 className="font-heading relative col-span-full mb-6 sm:mb-8 inline-block text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
    {title}
    <div className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-primary" />
  </h2>
);
