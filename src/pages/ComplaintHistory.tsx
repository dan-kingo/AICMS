import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import complaints from "@/assets/constants/complaints";
import SearchInput from "@/components/SearchInput";

const ComplaintHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);

  // Filter complaints based on search term
  const filteredComplaints = complaints.filter((complaint) =>
    complaint.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Complaint History</h1>

      {/* Search Bar */}

      <SearchInput
        placeholder="Search complaints..."
        onSearch={(term) => setSearchTerm(term)}
      />

      {/* Complaints Table */}
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredComplaints.map((complaint) => (
            <TableRow key={complaint.id}>
              <TableCell>{complaint.id}</TableCell>
              <TableCell>{complaint.subject}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                {format(new Date(complaint.date), "yyyy-MM-dd")}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedComplaint(complaint)}
                    >
                      View
                    </Button>
                  </DialogTrigger>
                  {selectedComplaint && (
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Complaint Details</DialogTitle>
                      </DialogHeader>
                      <div className="p-4">
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
                          {format(
                            new Date(selectedComplaint.date),
                            "yyyy-MM-dd"
                          )}
                        </p>
                        <p>
                          <strong>Details:</strong> {selectedComplaint.details}
                        </p>
                      </div>
                    </DialogContent>
                  )}
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* No Results Message */}
      {filteredComplaints.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No complaints found.</p>
      )}
    </div>
  );
};

export default ComplaintHistory;
