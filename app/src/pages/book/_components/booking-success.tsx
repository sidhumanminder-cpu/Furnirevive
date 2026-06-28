import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

export default function BookingSuccess({
  bookingNumber,
}: {
  bookingNumber: string;
}) {
  return (
    <div className="max-w-lg mx-auto text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <div className="size-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="size-10 text-green-600 dark:text-green-400" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-serif font-bold">Booking Confirmed!</h1>
        <p className="text-muted-foreground">
          Your furniture repair booking has been placed successfully.
        </p>

        <Card className="mt-6">
          <CardContent className="py-6 space-y-3">
            <p className="text-sm text-muted-foreground">Your Booking ID</p>
            <p className="text-2xl font-mono font-bold text-primary tracking-wider">
              {bookingNumber}
            </p>
            <p className="text-xs text-muted-foreground">
              Save this ID for tracking your booking status.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link to="/my-bookings">
            <Button className="w-full sm:w-auto">
              <Calendar className="size-4 mr-2" />
              View My Bookings
            </Button>
          </Link>
          <Link to="/">
            <Button variant="secondary" className="w-full sm:w-auto">
              Back to Home
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
