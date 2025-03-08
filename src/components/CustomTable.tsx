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

interface Props {
  complaints: Complaint[];
  onSelectComplaint: (complaint: Complaint) => void;
}

const CustomTable = ({ complaints, onSelectComplaint }: Props) => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {complaints.map((complaint) => (
          <TableRow key={complaint.id}>
            <TableCell>{complaint.id}</TableCell>
            <TableCell>{complaint.subject}</TableCell>
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
            <TableCell>{complaint.date}</TableCell>
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
