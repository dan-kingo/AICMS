import { create } from "zustand";

interface ComplaintState {
  complaintData: FormData | null;
  loading: boolean;
  error: string | null;
  setComplaintData: (data: FormData) => void;
  resetComplaint: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useComplaintStore = create<ComplaintState>((set) => ({
  complaintData: null,
  loading: false,
  error: null,
  setComplaintData: (data) => set({ complaintData: data }),
  resetComplaint: () =>
    set({ complaintData: null, loading: false, error: null }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
