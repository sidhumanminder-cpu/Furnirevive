import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Link } from "react-router-dom";
import { Calendar, LogIn, ArrowRight, ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty.tsx";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { SERVICE_MAP, STATUS_COLORS } from "@/lib/booking-constants.ts";
import type { ServiceKey } from "@/lib/booking-constants.ts";

function BookingsList() {
  const bookings = useQuery(api.bookings.getMyBookings);

  if (bookings === undefined) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Calendar />
          </EmptyMedia>
          <EmptyTitle>No bookings yet</EmptyTitle>
          <EmptyDescription>
            Book your first furniture repair to get started.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link to="/book">
            <Button size="sm">Book a Repair</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking, index) => {
        const service = SERVICE_MAP[booking.service as ServiceKey];
        return (
          <motion.div
            key={booking._id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-base">
                      {service?.label ?? booking.service}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      {booking.bookingNumber}
                    </p>
                  </div>
                  <Badge
                    className={STATUS_COLORS[booking.status]}
                    variant="secondary"
                  >
                    {booking.status.charAt(0).toUpperCase() +
                      booking.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-muted-foreground">
                  <span>
                    {new Date(booking.date + "T00:00:00").toLocaleDateString(
                      "en-IN",
                      { day: "numeric", month: "short", year: "numeric" }
                    )}
                  </span>
                  <span>{booking.timeSlot}</span>
                </div>
                {booking.technicianName && (
                  <p className="text-xs">
                    <span className="text-muted-foreground">Technician:</span>{" "}
                    {booking.technicianName}
                  </p>
                )}
                {booking.imageUrls.length > 0 && (
                  <div className="flex gap-2 pt-1">
                    {booking.imageUrls.slice(0, 3).map((url, i) => (
                      <Dialog key={i}>
                        <DialogTrigger asChild>
                          <button className="size-14 rounded-md overflow-hidden border hover:opacity-80 transition-opacity">
                            <img
                              src={url}
                              alt={`Photo ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg p-2">
                          <img
                            src={url}
                            alt={`Photo ${i + 1}`}
                            className="w-full rounded-lg"
                          />
                        </DialogContent>
                      </Dialog>
                    ))}
                    {booking.imageUrls.length > 3 && (
                      <div className="size-14 rounded-md bg-secondary flex items-center justify-center text-xs text-muted-foreground">
                        +{booking.imageUrls.length - 3}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function MyBookingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold">
                My Bookings
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Track the status of your repair bookings.
              </p>
            </div>
            <Link to="/book">
              <Button size="sm">
                New Booking
                <ArrowRight className="size-4 ml-1" />
              </Button>
            </Link>
          </div>

          <AuthLoading>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))}
            </div>
          </AuthLoading>

          <Unauthenticated>
            <div className="text-center py-16 space-y-4">
              <LogIn className="size-10 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">
                Sign in to view your bookings.
              </p>
              <SignInButton />
            </div>
          </Unauthenticated>

          <Authenticated>
            <BookingsList />
          </Authenticated>
        </div>
      </main>
      <Footer />
    </div>
  );
}
