export const preventEnterKeySubmission = (event: React.KeyboardEvent<HTMLFormElement>) => {
    const target = event.target;
    if (event.key === "Enter" && target instanceof HTMLInputElement) {
      event.preventDefault();
    }
  };