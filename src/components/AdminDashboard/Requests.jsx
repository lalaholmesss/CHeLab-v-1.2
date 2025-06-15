import { useState } from "react";

const initialRequests = [
  {
    id: 1,
    name: "Niko",
    email: "niko@gmail.com",
    title: "Feature Request",
    description: "Add dark mode support",
    status: "Pending",
  },
  {
    id: 2,
    name: "Lana",
    email: "lana@example.com",
    title: "Bug Report",
    description: "Dropdown not working",
    status: "Accepted",
  },
  {
    id: 3,
    name: "Ali",
    email: "ali@mail.com",
    title: "Feedback",
    description: "Great UI!",
    status: "Rejected",
  },
];

export default function Requests() {
  const [requests, setRequests] = useState(initialRequests);

  const handleStatusChange = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  return (
    <div className="ml-64 p-6"> {/* Adjusts for fixed navbar width */}
      <h2 className="text-2xl font-bold mb-6">All Requests</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Submitter Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Description</th>
              <th className="border px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td className="border px-4 py-2">{req.name}</td>
                <td className="border px-4 py-2">{req.email}</td>
                <td className="border px-4 py-2">{req.title}</td>
                <td className="border px-4 py-2">{req.description}</td>
                <td className="border px-4 py-2">
                  <select
                    value={req.status}
                    onChange={(e) =>
                      handleStatusChange(req.id, e.target.value)
                    }
                    className={`px-2 py-1 rounded border ${
                      req.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : req.status === "Accepted"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
