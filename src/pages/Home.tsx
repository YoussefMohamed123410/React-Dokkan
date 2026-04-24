/**
 * Home page
 */

import { Button, Card } from "@/components/common";

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">
          Welcome to My Project
        </h1>
        <p className="text-xl text-gray-600">
          A well-structured React + Vite + TypeScript Application
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-gray-700 mb-4">
            This is a professional, scalable project structure following React
            best practices.
          </p>
          <Button variant="primary">Learn More</Button>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="text-gray-700 space-y-2">
            <li>✓ TypeScript support</li>
            <li>✓ React Router v7</li>
            <li>✓ Tailwind CSS</li>
            <li>✓ Custom hooks</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Home;
