import { useState } from "react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import BookingForm from "./_components/booking-form.tsx";
import BookingSuccess from "./_components/booking-success.tsx";

export default function BookPage() {
  const [bookingNumber, setBookingNumber] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        {bookingNumber ? (
          <BookingSuccess bookingNumber={bookingNumber} />
        ) : (
          <BookingForm onComplete={setBookingNumber} />
        )}
      </main>
      <Footer />
    </div>
  );
}
