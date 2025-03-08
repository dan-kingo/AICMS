import { useState } from "react";
import complaints from "@/assets/constants/complaints";
import CustomDialogComponent, {
  Complaint,
} from "@/components/CustomDialogComponent";
import SearchInput from "@/components/SearchInput";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ComplaintHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">Complaint History</h1>

      {/* Search Bar */}
      <SearchInput
        onSearch={setSearchTerm}
        placeholder="Search complaints..."
      />

      {/* Complaints Table */}
      <Table>
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
          {filteredComplaints.map((complaint) => (
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
                  onClick={() => setSelectedComplaint(complaint)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog Component */}
      <CustomDialogComponent
        selectedComplaint={selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
      />
    </div>
  );
};

export default ComplaintHistory;
