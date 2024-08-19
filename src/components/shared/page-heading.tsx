function PageHeading({ heading, description }: { heading: string; description: string }) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-2">{heading}</h1>
      <p className="font-medium text-sm text-brand-fifth mb-5 block">{description}</p>
    </>
  );
}

export default PageHeading;
