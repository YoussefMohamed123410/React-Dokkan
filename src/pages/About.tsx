/**
 * About page
 */

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <p className="text-gray-700 text-lg mb-4">
          This is a graduation project built with modern web technologies.
        </p>
        <p className="text-gray-700 text-lg">
          It demonstrates best practices in React development and project
          organization.
        </p>
      </div>
    </div>
  );
};

export default About;
