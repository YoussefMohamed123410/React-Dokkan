import type { ReactNode } from "react";
import { Link } from "react-router";

interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
const PlaceHolder = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
}: IProps) => {
  return (
    <>
      <main className=" mx-auto px-4 min-h-screen bg-gray-50 py-16">
        <div className=" px-4 mx-auto container">
          <div className="max-w-md mx-auto text-center bg-white rounded-lg p-12 shadow-sm">
            {icon}
            <h2 className="mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link
              to={buttonLink}
              className="bg-(--primary) px-4 inline-block py-2 text-sm  hover:bg-(--primary)/90 text-white rounded-lg "
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
export default PlaceHolder;
