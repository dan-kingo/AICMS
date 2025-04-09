import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";

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
  return (
    <Dialog open={!!selectedComplaint} onOpenChange={onClose}>
      {selectedComplaint && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complaint Details</DialogTitle>
            <DialogDescription>
              Details of the selected complaint.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 space-y-3">
            <p>
              <strong>ID:</strong> {selectedComplaint.user}
            </p>
            <p>
              <strong>Description:</strong> {selectedComplaint.description}
            </p>
            <p>
              <strong>Category:</strong> {selectedComplaint.category}
            </p>
            <p>
              <strong>Status:</strong> {selectedComplaint.status}
            </p>
            <p>
              <strong>Date:</strong>{" "}
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
