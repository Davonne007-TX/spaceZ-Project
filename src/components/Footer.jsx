import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="w-full text-white bg-black font-serif p-8 text-md">
        <ul className="flex flex-row justify-center gap-20 list-none cursor-pointer">
          <span className="text-gray-300 cursor-default">SpaceZ 2024</span>

          <Link to="/" className=" hover:text-gray-400">
            Terms of Privacy
          </Link>
          <Link to="" className=" hover:text-gray-400">
            Resources
          </Link>
        </ul>
      </footer>
    </>
  );
}
