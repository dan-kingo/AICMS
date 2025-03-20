// components/DeleteAccount.tsx
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useDeleteAccount } from "@/hooks/useDeleteAccount";
const DeleteAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteAccount } = useDeleteAccount();
  const handleDelete = async () => {
    await deleteAccount();
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)}
            variant="destructive"
            className="w-full"
          >
            {"Delete Account"}
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action will permanently delete your account. Are you sure you
            want to proceed?
          </DialogDescription>

          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <DialogClose asChild>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDelete}>
              Confirm Deletion
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteAccount;
