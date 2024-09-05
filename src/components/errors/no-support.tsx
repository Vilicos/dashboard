import Title from "@components/shared/title";

export default function NoSupport() {
  return (
    <>
      <Title content="Try Desktop!" />
      <section className="rounded-md w-fit container py-28 bg-background/50">
        <div className="text-center">
          <div className="max-w-[170px] h-[162px] sm:max-w-[200px] sm:h-[190px] md:max-w-[250px] md:h-[238px] lg:max-w-[300px] lg:h-[286px] mx-auto overflow-hidden pointer-events-none">
          <img src="/img/no-support.png" alt="Not Found" className="w-full h-full object-cover" />
          </div>
          <h1 className="mt-8 font-bold text-foreground xs:text-lg sm:text-xl select-none">Mobile devices are not supported!</h1>
        </div>
      </section>
    </>
  );
}
