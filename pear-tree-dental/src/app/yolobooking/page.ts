import DentalBookingWidget from "@/components/DentalBookingWidget"; // Using alias for cleaner import

export default function YoloBookingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Book Your Appointment
          </h1>
          <p className="mt-2 text-gray-600">
            Select a service and time that works for you.
          </p>
        </div>
        
        {/* Here is where the booking widget is loaded */}
        <DentalBookingWidget />

      </div>
    </main>
  );
}