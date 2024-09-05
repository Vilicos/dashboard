import Title from "@components/shared/title";

export default function NoSupport() {
  return (
    <>
      <Title content="Try Desktop!" />
      <section className="rounded-md w-fit container py-28 bg-background/50">
        <div className="text-center">
          <div className="max-w-[170px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mx-auto overflow-hidden pointer-events-none">
          <img src="/img/no-support.png" alt="Not Found" className="w-full h-full object-cover" />
          </div>
          <h1 className="mt-8 font-bold text-foreground xs:text-lg sm:text-xl select-none">Mobile devices are not supported!</h1>
        </div>
      </section>
    </>
  );
}
