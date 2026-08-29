import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Papa from "papaparse";
import {
  ClipboardList,
  Download,
  Eye,
  UserCheck,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  LogIn,
  ImageIcon,
  Camera,
  Trash2,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Input } from "@/components/ui/input.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import { SERVICE_MAP, STATUS_COLORS } from "@/lib/booking-constants.ts";
import type { ServiceKey } from "@/lib/booking-constants.ts";

type StatusFilter = "all" | "pending" | "confirmed" | "completed" | "cancelled";
type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

function AdminContent() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const isAdmin = useQuery(api.users.isAdmin);
  const navigate = useNavigate();

  const filterArg = statusFilter === "all" ? undefined : statusFilter;
  const bookings = useQuery(api.bookings.getAllBookings, {
    statusFilter: filterArg,
  });

  const updateStatus = useMutation(api.bookings.updateStatus);
  const assignTechnician = useMutation(api.bookings.assignTechnician);
  const deleteBooking = useMutation(api.bookings.deleteBooking);

  if (isAdmin === undefined || bookings === undefined) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="text-center py-16 space-y-4">
        <AlertCircle className="size-10 mx-auto text-destructive" />
        <h2 className="text-xl font-bold">Access Denied</h2>
        <p className="text-muted-foreground">
          You need admin privileges to view this page.
        </p>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    );
  }

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    completed: bookings.filter((b) => b.status === "completed").length,
  };

  const handleStatusChange = async (bookingId: string, newStatus: BookingStatus) => {
    try {
      await updateStatus({
        bookingId: bookingId as Id<"bookings">,
        status: newStatus,
      });
      toast.success(`Status updated to ${newStatus}`);
    } catch {
      toast.error("Failed to update status");
    }
  };

  const handleAssignTechnician = async (
    bookingId: string,
    name: string
  ) => {
    try {
      await assignTechnician({
        bookingId: bookingId as Id<"bookings">,
        technicianName: name,
      });
      toast.success("Technician assigned");
    } catch {
      toast.error("Failed to assign technician");
    }
  };

  const handleDeleteBooking = async (bookingId: string) => {
    try {
      await deleteBooking({ bookingId: bookingId as Id<"bookings"> });
      toast.success("Booking deleted");
    } catch {
      toast.error("Failed to delete booking");
    }
  };

  const handleExportCSV = () => {
    if (!bookings || bookings.length === 0) {
      toast.error("No bookings to export");
      return;
    }

    const data = bookings.map((b) => ({
      "Booking ID": b.bookingNumber,
      Customer: b.customerName,
      Email: b.customerEmail,
      Phone: b.phone,
      Service: SERVICE_MAP[b.service as ServiceKey]?.label ?? b.service,
      Date: b.date,
      "Time Slot": b.timeSlot,
      Status: b.status,
      Technician: b.technicianName ?? "",
      Address: b.address,
      Description: b.description,
    }));

    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bookings-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("CSV exported successfully");
  };

  const STAT_CARDS = [
    {
      label: "Total Bookings",
      value: stats.total,
      icon: ClipboardList,
      color: "text-foreground",
    },
    {
      label: "Pending",
      value: stats.pending,
      icon: Clock,
      color: "text-amber-600",
    },
    {
      label: "Confirmed",
      value: stats.confirmed,
      icon: UserCheck,
      color: "text-blue-600",
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      color: "text-green-600",
    },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_CARDS.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="py-4">
              <div className="flex items-center gap-3">
                <stat.icon className={`size-5 ${stat.color}`} />
                <div>
                  <p className="text-2xl font-bold font-serif">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <Link
        to="/admin/case-studies"
        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors group"
      >
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Camera className="size-5" />
        </div>
        <div>
          <p className="font-semibold text-sm group-hover:text-primary transition-colors">
            Repair Case Studies
          </p>
          <p className="text-xs text-muted-foreground">
            Upload before/after images for SEO pages
          </p>
        </div>
      </Link>

      {/* Filters & Actions */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <Select
          value={statusFilter}
          onValueChange={(val) => setStatusFilter(val as StatusFilter)}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="secondary" size="sm" onClick={handleExportCSV}>
          <Download className="size-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Technician</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No bookings found
                  </TableCell>
                </TableRow>
              ) : (
                bookings.map((booking) => (
                  <TableRow key={booking._id}>
                    <TableCell className="font-mono text-xs">
                      {booking.bookingNumber}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm">{booking.customerName}</p>
                        <p className="text-xs text-muted-foreground">{booking.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {SERVICE_MAP[booking.service as ServiceKey]?.label ?? booking.service}
                    </TableCell>
                    <TableCell className="text-sm">
                      <div>
                        <p>{booking.date}</p>
                        <p className="text-xs text-muted-foreground">{booking.timeSlot}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={booking.status}
                        onValueChange={(val) =>
                          handleStatusChange(booking._id, val as BookingStatus)
                        }
                      >
                        <SelectTrigger className="h-7 w-28 text-xs">
                          <Badge
                            className={`${STATUS_COLORS[booking.status]} text-xs`}
                            variant="secondary"
                          >
                            {booking.status}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <TechnicianInput
                        value={booking.technicianName ?? ""}
                        onSave={(name) =>
                          handleAssignTechnician(booking._id, name)
                        }
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <BookingDetailDialog booking={booking} />
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                              <Trash2 className="size-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Booking?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently delete booking <strong>{booking.bookingNumber}</strong> for <strong>{booking.customerName}</strong>. This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                onClick={() => handleDeleteBooking(booking._id)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function TechnicianInput({
  value,
  onSave,
}: {
  value: string;
  onSave: (name: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(value);

  if (editing) {
    return (
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => {
          if (name.trim() && name !== value) {
            onSave(name.trim());
          }
          setEditing(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (name.trim() && name !== value) {
              onSave(name.trim());
            }
            setEditing(false);
          }
        }}
        className="h-7 text-xs w-28"
        autoFocus
        placeholder="Name..."
      />
    );
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className="text-xs text-left hover:text-primary transition-colors min-w-[80px]"
    >
      {value || (
        <span className="text-muted-foreground italic">+ Assign</span>
      )}
    </button>
  );
}

type BookingWithImages = {
  bookingNumber: string;
  customerName: string;
  customerEmail: string;
  phone: string;
  service: string;
  description: string;
  date: string;
  timeSlot: string;
  address: string;
  landmark?: string;
  estimatedPrice: number;
  technicianName?: string;
  adminNotes?: string;
  status: string;
  imageUrls: string[];
};

function BookingDetailDialog({ booking }: { booking: BookingWithImages }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          <Eye className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif">
            Booking {booking.bookingNumber}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-muted-foreground">Customer</p>
              <p className="font-medium">{booking.customerName}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Email</p>
              <p className="font-medium">{booking.customerEmail}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Phone</p>
              <p className="font-medium">{booking.phone}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Service</p>
              <p className="font-medium">
                {SERVICE_MAP[booking.service as ServiceKey]?.label ?? booking.service}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Date</p>
              <p className="font-medium">{booking.date}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Time</p>
              <p className="font-medium">{booking.timeSlot}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Status</p>
              <Badge
                className={STATUS_COLORS[booking.status]}
                variant="secondary"
              >
                {booking.status}
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground mb-1">Address</p>
            <p className="font-medium">{booking.address}</p>
            {booking.landmark && (
              <p className="text-muted-foreground text-xs mt-0.5">
                Landmark: {booking.landmark}
              </p>
            )}
          </div>

          <div>
            <p className="text-muted-foreground mb-1">Issue Description</p>
            <p className="text-foreground">{booking.description}</p>
          </div>

          {booking.imageUrls.length > 0 && (
            <div>
              <p className="text-muted-foreground mb-2">
                Photos ({booking.imageUrls.length})
              </p>
              <div className="grid grid-cols-2 gap-2">
                {booking.imageUrls.map((url, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={url}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-32 object-cover rounded-lg border hover:opacity-80 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold">
              Admin Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage all bookings, assign technicians, and track status.
            </p>
          </div>

          <AuthLoading>
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          </AuthLoading>

          <Unauthenticated>
            <div className="text-center py-16 space-y-4">
              <LogIn className="size-10 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">
                Sign in to access the admin dashboard.
              </p>
              <SignInButton />
            </div>
          </Unauthenticated>

          <Authenticated>
            <AdminContent />
          </Authenticated>
        </div>
      </main>
      <Footer />
    </div>
  );
}
