
import { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserDeviceHistory from "./UserDeviceHistory";

// Mock user data
const mockUsers = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john@example.com",
    country: "United States",
    occupation: "Doctor"
  },
  {
    id: "2",
    fullName: "Jane Smith",
    email: "jane@example.com",
    country: "Canada",
    occupation: "Nurse"
  },
  {
    id: "3",
    fullName: "Alice Johnson",
    email: "alice@example.com",
    country: "Australia",
    occupation: "Therapist"
  },
  {
    id: "4",
    fullName: "Robert Brown",
    email: "robert@example.com",
    country: "United Kingdom",
    occupation: "Researcher"
  },
  {
    id: "5",
    fullName: "Emily Davis",
    email: "emily@example.com",
    country: "Germany",
    occupation: "Physician"
  }
];

const UserTable = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [viewingDevice, setViewingDevice] = useState<{ name: string, endpoint: string } | null>(null);

  // Device controls definitions
  const deviceControls = [
    {
      title: "Sound System",
      endpoint: "/sound-history"
    },
    {
      title: "LED Light Therapy",
      endpoint: "/led-history"
    },
    {
      title: "Steam Generator",
      endpoint: "/steam-history"
    },
    {
      title: "Nanoflicker",
      endpoint: "/nanoflicker-history"
    },
    {
      title: "Temperature Tank",
      endpoint: "/temperature-tank-history"
    },
    {
      title: "Water Pump",
      endpoint: "/water-pump-history"
    }
  ];

  const handleViewUser = (user: any) => {
    setSelectedUser(user);
  };

  const handleCloseUserModal = () => {
    setSelectedUser(null);
  };

  const handleViewDeviceHistory = (device: { title: string, endpoint: string }) => {
    setViewingDevice({
      name: device.title,
      endpoint: device.endpoint
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-health-secondary mb-4">User Management</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Occupation</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>{user.occupation}</TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewUser(user)}
                      className="p-0 h-8 w-8 rounded-full"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* User Details Modal */}
      <Dialog open={!!selectedUser} onOpenChange={handleCloseUserModal}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>User Details: {selectedUser?.fullName}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deviceControls.map((device) => (
                <div key={device.title} className="device-card">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{device.title}</h3>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleViewDeviceHistory(device)}
                    >
                      View History
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    View user interaction with this device
                  </p>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Device History Modal */}
      {viewingDevice && selectedUser && (
        <UserDeviceHistory
          isOpen={!!viewingDevice}
          onClose={() => setViewingDevice(null)}
          title={viewingDevice.name}
          endpoint={viewingDevice.endpoint}
          userId={selectedUser.id}
          userName={selectedUser.fullName}
        />
      )}
    </div>
  );
};

export default UserTable;
