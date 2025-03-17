
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircleIcon } from "lucide-react";

/**
 * Welcome page component
 *
 * Displays a welcome message and a list of features.
 *
 * @returns {JSX.Element} The rendered welcome page.
 */
export default function Welcome(): JSX.Element {
  const features = [
    {
      title: "Feature 1",
      description: "This is a description of the first feature.",
    },
    {
      title: "Feature 2",
      description: "This is a description of the second feature.",
    },
    {
      title: "Feature 3",
      description: "This is a description of the third feature.",
    },
    {
      title: "Feature 4",
      description: "This is a description of the fourth feature.",
    },
  ];

  return (
    <Layout title="Welcome" description="Welcome to our application!">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Our Application!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center">
                  <CheckCircleIcon className="mr-2 text-green-500" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>

                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
