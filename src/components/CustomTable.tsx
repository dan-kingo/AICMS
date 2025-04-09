import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Complaint } from "@/components/CustomDialogComponent";
import { Badge } from "./ui/badge";
import { format } from "date-fns";

interface Props {
  complaints: Complaint[];
  onSelectComplaint: (complaint: Complaint) => void;
}

const formatId = (index: number) => {
  return `00${index + 1}`.slice(-3); // Always returns 3-digit formatted ID
};

const CustomTable = ({ complaints, onSelectComplaint }: Props) => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {complaints.map((complaint, index) => (
          <TableRow key={index}>
            <TableCell>{formatId(index)}</TableCell>
            <TableCell>
              {complaint.description.length > 40
                ? complaint.description.slice(0, 40) + " . . ."
                : complaint.description}
            </TableCell>
            <TableCell>{complaint.category}</TableCell>
            <TableCell>
              {
                <Badge
                  className="text-white"
                  variant={
                    complaint.status === "Resolved"
                      ? "default"
                      : complaint.status === "In Progress"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {complaint.status}
                </Badge>
              }
            </TableCell>
            <TableCell>
              {format(new Date(complaint.createdAt), " hh:mm a, MM-dd-yyyy")}
            </TableCell>
            <TableCell>
              <Button
                variant="outline"
                onClick={() => onSelectComplaint(complaint)}
              >
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
