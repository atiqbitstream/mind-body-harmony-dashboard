
import { useState } from "react";
import { Eye, Edit } from "lucide-react";
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
import UserEditForm from "./UserEditForm";
import { Switch } from "@/components/ui/switch";

// Enhanced mock user data with status field
const mockUsers = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john@example.com",
    country: "United States",
    occupation: "Doctor",
    status: true, // active
    gender: "Male",
    dob: "1985-05-15",
    nationality: "American",
    phone: "+1 555-123-4567",
    city: "New York",
    marital_status: "Married",
    sleep_hours: "7",
    exercise_frequency: "3 times/week",
    smoking_status: "Non-smoker",
    alcohol_consumption: "Occasional"
  },
  {
    id: "2",
    fullName: "Jane Smith",
    email: "jane@example.com",
    country: "Canada",
    occupation: "Nurse",
    status: true,
    gender: "Female",
    dob: "1990-08-22",
    nationality: "Canadian",
    phone: "+1 555-987-6543",
    city: "Toronto",
    marital_status: "Single",
    sleep_hours: "8",
    exercise_frequency: "Daily",
    smoking_status: "Non-smoker",
    alcohol_consumption: "Rare"
  },
  {
    id: "3",
    fullName: "Alice Johnson",
    email: "alice@example.com",
    country: "Australia",
    occupation: "Therapist",
    status: false, // inactive
    gender: "Female",
    dob: "1988-03-10",
    nationality: "Australian",
    phone: "+61 4XX XXX XXX",
    city: "Sydney",
    marital_status: "Divorced",
    sleep_hours: "6",
    exercise_frequency: "2 times/week",
    smoking_status: "Former smoker",
    alcohol_consumption: "Moderate"
  },
  {
    id: "4",
    fullName: "Robert Brown",
    email: "robert@example.com",
    country: "United Kingdom",
    occupation: "Researcher",
    status: true,
    gender: "Male",
    dob: "1975-11-30",
    nationality: "British",
    phone: "+44 20 XXXX XXXX",
    city: "London",
    marital_status: "Married",
    sleep_hours: "7",
    exercise_frequency: "Weekly",
    smoking_status: "Smoker",
    alcohol_consumption: "Frequent"
  },
  {
    id: "5",
    fullName: "Emily Davis",
    email: "emily@example.com",
    country: "Germany",
    occupation: "Physician",
    status: true,
    gender: "Female",
    dob: "1992-07-18",
    nationality: "German",
    phone: "+49 30 XXXXXXXX",
    city: "Berlin",
    marital_status: "Single",
    sleep_hours: "8",
    exercise_frequency: "4 times/week",
    smoking_status: "Non-smoker",
    alcohol_consumption: "Occasional"
  }
];

const UserTable = () => {
  const [users, setUsers] = useState(mockUsers);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [viewingDevice, setViewingDevice] = useState<{ name: string, endpoint: string } | null>(null);
  const [editingUser, setEditingUser] = useState<any>(null);

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

  const handleEditUser = (user: any) => {
    setEditingUser(user);
  };

  const handleCloseEditModal = () => {
    setEditingUser(null);
  };

  const handleUpdateUserStatus = (userId: string, newStatus: boolean) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const handleSaveUserEdit = (updatedUser: any) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    ));
    setEditingUser(null);
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
                <TableHead>Status</TableHead>
                <TableHead className="w-[120px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>{user.occupation}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Switch 
                        checked={user.status} 
                        onCheckedChange={(checked) => handleUpdateUserStatus(user.id, checked)}
                      />
                      <span className={user.status ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
                        {user.status ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewUser(user)}
                        className="p-0 h-8 w-8 rounded-full"
                        title="View user devices"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEditUser(user)}
                        className="p-0 h-8 w-8 rounded-full"
                        title="Edit user details"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
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

      {/* User Edit Modal */}
      {editingUser && (
        <UserEditForm
          user={editingUser}
          onSave={handleSaveUserEdit}
          onCancel={handleCloseEditModal}
        />
      )}
    </div>
  );
};

export default UserTable;
