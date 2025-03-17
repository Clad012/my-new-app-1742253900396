
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Room {
  id: number;
  name: string;
  capacity: number;
  description: string;
}

const mockRooms: Room[] = [
  {
    id: 1,
    name: "Conference Room A",
    capacity: 20,
    description: "Large conference room with projector and whiteboard.",
  },
  {
    id: 2,
    name: "Meeting Room B",
    capacity: 10,
    description: "Medium-sized meeting room with a round table.",
  },
  {
    id: 3,
    name: "Breakout Room C",
    capacity: 5,
    description: "Small breakout room for focused discussions.",
  },
];

export default function Rooms(): JSX.Element {
  return (
    <Layout title="Rooms" description="View available rooms.">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Available Rooms</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRooms.map((room) => (
            <Card key={room.id}>
              <CardHeader>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription>Capacity: {room.capacity}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{room.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
