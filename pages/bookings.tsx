
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Booking {
  id: number;
  car: string;
  startDate: string;
  endDate: string;
  status: string;
}

const mockBookings: Booking[] = [
  {
    id: 1,
    car: "Toyota Camry",
    startDate: "2024-05-15",
    endDate: "2024-05-20",
    status: "Confirmed",
  },
  {
    id: 2,
    car: "Honda Civic",
    startDate: "2024-06-01",
    endDate: "2024-06-05",
    status: "Pending",
  },
  {
    id: 3,
    car: "Ford Mustang",
    startDate: "2024-07-10",
    endDate: "2024-07-15",
    status: "Cancelled",
  },
];

export default function Bookings(): JSX.Element {
  return (
    <Layout title="Bookings" description="View your car bookings.">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">My Bookings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader>
                <CardTitle>{booking.car}</CardTitle>
                <CardDescription>
                  {booking.startDate} - {booking.endDate}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Status: <span className={getStatusClass(booking.status)}>{booking.status}</span></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function getStatusClass(status: string): string {
    switch (status) {
        case "Confirmed":
            return "text-green-500";
        case "Pending":
            return "text-yellow-500";
        case "Cancelled":
            return "text-red-500";
        default:
            return "";
    }
}
