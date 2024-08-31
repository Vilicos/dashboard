
type ChatsNoResponse = {
  type: "Answers" | "Questions"
}
function ChatsNoResponse({type}:ChatsNoResponse) {
  return (
    <div className={`flex flex-col justify-center items-center w-full ${type === "Answers" ? "h-full" :"h-[600px]"} overflow-hidden`}>
      <div className={`${type === "Answers" ? "max-w-60" : "max-w-24"} overflow-hidden mx-auto`}>
        {
          type === "Answers" ? <img src="/svg/no-answer.svg" alt="No Answers" className="w-full h-full object-cover" />
          :
          <img src="/svg/no-question.svg" alt="No Questions" className="w-full h-full object-cover" />
        }
      </div>
      <p className={`${type === "Answers" ? "text-xl":"text-base"} font-semibold text-brand-fifth mt-6 text-center`}>
        {
          type === "Answers" ? "No answers" : "No questions"
        }
      </p>
    </div>
  );
}

export default ChatsNoResponse;
