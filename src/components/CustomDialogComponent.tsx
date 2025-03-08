import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";

export interface Complaint {
  id: string;
  subject: string;
  date: string; // Ensure date is a string (ISO format) if coming from an API
  details: string;
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
              <strong>ID:</strong> {selectedComplaint.id}
            </p>
            <p>
              <strong>Subject:</strong> {selectedComplaint.subject}
            </p>
            <p>
              <strong>Status:</strong> {selectedComplaint.status}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {format(new Date(selectedComplaint.date), "yyyy-MM-dd")}
            </p>
            <p>
              <strong>Details:</strong> {selectedComplaint.details}
            </p>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default CustomDialogComponent;
