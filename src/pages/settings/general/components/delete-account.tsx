import { useSign } from "@/api/use-sign";
import { Button } from "@components/ui/button";

function DeleteAccount() {
  const { deleteAccount } = useSign();

  const deleteAction = () => {
    deleteAccount.mutate();
  };
  return (
    <Button variant={"ghost"} onClick={deleteAction} disabled={deleteAccount.isPending} className="text-[#C70000] hover:text-[#FF5151] rounded-xl" type="button">
      Delete Account
    </Button>
  );
}

export default DeleteAccount;
