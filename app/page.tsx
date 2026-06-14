"use client";
import { useEffect, useState } from "react";
import Header from '../components/Header';
import SummaryCards from '../components/SummaryCards';
import FilterBar from '../components/FilterBar';
import RequestTable, { Request } from '../components/RequestTable';
import DetailSidebar from '../components/DetailSidebar';
import TWorldSection from '../components/TWorldSection';

export default function Home() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPriority, setSelectedPriority] = useState("All Priorities");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");

  useEffect(() => {
    fetch("/api/requests")
      .then((r) => r.json())
      .then((json) => setRequests(json))
      .catch(() => { });
  }, []);

  const handleSelectRequest = (request: Request) => {
    setSelectedRequest(request);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleStatusChange = (requestId: string, newStatus: string) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === requestId ? { ...req, status: newStatus } : req
      )
    );
    if (selectedRequest?.id === requestId) {
      setSelectedRequest({ ...selectedRequest, status: newStatus });
    }
    setSidebarOpen(false);
  };

  const filteredRequests = requests.filter((request) => {
    const categoryMatch =
      selectedCategory === "All Categories" || request.category === selectedCategory;
    const priorityMatch =
      selectedPriority === "All Priorities" || request.priority === selectedPriority;
    const statusMatch =
      selectedStatus === "All Statuses" || request.status === selectedStatus;
    return categoryMatch && priorityMatch && statusMatch;
  });

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#0f1720' }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
        <SummaryCards />
        <FilterBar
          selectedCategory={selectedCategory}
          selectedPriority={selectedPriority}
          selectedStatus={selectedStatus}
          onCategoryChange={setSelectedCategory}
          onPriorityChange={setSelectedPriority}
          onStatusChange={setSelectedStatus}
        />
        <RequestTable
          requests={requests}
          filteredRequests={filteredRequests}
          onSelectRequest={handleSelectRequest}
          onStatusChange={handleStatusChange}
        />
        <TWorldSection />
        <DetailSidebar
          request={selectedRequest}
          isOpen={sidebarOpen}
          onClose={handleCloseSidebar}
          onStatusChange={handleStatusChange}
        />
      </main>
    </div>
  );
}
