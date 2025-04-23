import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

export interface Complaint {
  user: string;
  description: string;
  createdAt: string;
  category: string;
  status: string;
}

interface Props {
  selectedComplaint: Complaint | null;
  onClose: () => void;
}

const CustomDialogComponent = ({ selectedComplaint, onClose }: Props) => {
  const { t } = useTranslation();
  return (
    <Dialog open={!!selectedComplaint} onOpenChange={onClose}>
      {selectedComplaint && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("Submit Complaint")}</DialogTitle>
            <DialogDescription>
              {t("Details of the selected complaint.")}
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 space-y-3">
            <p>
              <strong>{t("ID")}:</strong> {selectedComplaint.user}
            </p>
            <p>
              <strong>{t("Description")}:</strong>{" "}
              {selectedComplaint.description}
            </p>
            <p>
              <strong>{t("Category")}:</strong> {selectedComplaint.category}
            </p>
            <p>
              <strong>{t("Status")}:</strong> {selectedComplaint.status}
            </p>
            <p>
              <strong>{t("Date")}:</strong>{" "}
              {format(
                new Date(selectedComplaint.createdAt),
                "hh:mm a, MM-dd-yyyy"
              )}
            </p>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default CustomDialogComponent;
