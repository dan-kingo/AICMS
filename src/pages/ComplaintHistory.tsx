import { useState } from "react";
import CustomDialogComponent, {
  Complaint,
} from "@/components/CustomDialogComponent";
import SearchInput from "@/components/SearchInput";
import CustomTable from "@/components/CustomTable"; // ✅ Import new component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserComplaints } from "@/hooks/useUserComplaints";

const ComplaintHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );

  const { complaints, loading } = useUserComplaints();

  if (loading) return <div>Loading...</div>;

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 lg:mx-auto lg:p-6 ">
      <Card className="dark:bg-dark md:w-[98%]">
        <CardHeader>
          <CardTitle>Complaint History</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Search Bar */}
          <SearchInput
            onSearch={setSearchTerm}
            placeholder="Search complaints..."
          />

          {/* Complaints Table */}
          <CustomTable
            complaints={filteredComplaints}
            onSelectComplaint={setSelectedComplaint}
          />

          {/* Dialog Component */}
          <CustomDialogComponent
            selectedComplaint={selectedComplaint}
            onClose={() => setSelectedComplaint(null)}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplaintHistory;
