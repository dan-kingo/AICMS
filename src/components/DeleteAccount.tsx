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
import { useTranslation } from "react-i18next";
const DeleteAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteAccount } = useDeleteAccount();
  const handleDelete = async () => {
    await deleteAccount();
    setIsOpen(false);
  };
  const { t } = useTranslation();
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)}
            variant="destructive"
            className="w-full"
          >
            {t("Delete Account")}
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>{t("Are you sure")}?</DialogTitle>
          <DialogDescription>
            {t(
              "This action will permanently delete your account. Are you sure you want to proceed"
            )}
            ?
          </DialogDescription>

          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <DialogClose asChild>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                {t("Cancel")}
              </Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDelete}>
              {t("Confirm Deletion")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteAccount;
