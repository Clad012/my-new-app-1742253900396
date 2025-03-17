
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  description: string;
  imageUrl: string;
}

const mockCars: Car[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2023,
    description: "Reliable and fuel-efficient sedan.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2022,
    description: "Sporty and compact sedan.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2024,
    description: "Classic American muscle car.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    description: "Electric vehicle with advanced technology.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
];

export default function Cars(): JSX.Element {
  return (
    <Layout title="Cars" description="Browse our selection of cars available for booking.">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Cars Available for Booking</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCars.map((car) => (
            <Card key={car.id}>
              <CardHeader>
                <CardTitle>{car.make} {car.model}</CardTitle>
                <CardDescription>{car.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={car.imageUrl}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <p className="mt-4">{car.description}</p>
                <Button className="mt-4 w-full">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
