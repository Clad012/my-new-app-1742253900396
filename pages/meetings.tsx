
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  attendees: string[];
}

const mockMeetings: Meeting[] = [
  {
    id: 1,
    title: "Project Kickoff",
    date: "2024-05-20",
    time: "10:00 AM",
    attendees: ["Alice", "Bob", "Charlie"],
  },
  {
    id: 2,
    title: "Design Review",
    date: "2024-05-22",
    time: "2:00 PM",
    attendees: ["Alice", "Charlie", "David"],
  },
  {
    id: 3,
    title: "Sprint Planning",
    date: "2024-05-24",
    time: "11:00 AM",
    attendees: ["Bob", "Charlie", "Eve"],
  },
];

export default function Meetings(): JSX.Element {
  return (
    <Layout title="Meetings" description="View upcoming meetings.">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Upcoming Meetings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMeetings.map((meeting) => (
            <Card key={meeting.id}>
              <CardHeader>
                <CardTitle>{meeting.title}</CardTitle>
                <CardDescription>
                  {meeting.date} at {meeting.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Attendees: {meeting.attendees.join(", ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
