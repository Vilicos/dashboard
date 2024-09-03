function InsightsInfoSingle({ title, value, icon }: { title: string; value: string; icon?: boolean }) {
  return (
    <div className="bg-card rounded-lg border py-[14px] text-center basis-1/5">
      <p className="font-medium text-sm text-brand-fifth mb-4">{title}</p>
      <span className="text-2xl font-bold flex items-center justify-center gap-x-2">
        {icon ? (
          <>
            <img src="/img/upvote.png" alt="Upvote" className="size-5" />
            {value}
          </>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

export default InsightsInfoSingle;
