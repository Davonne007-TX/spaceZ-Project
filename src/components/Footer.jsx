export default function Footer() {
  return (
    <>
      <footer className="w-full text-white bg-black shadow-md font-serif p-8 text-md">
        <ul className="flex flex-col md:flex-row justify-center gap-20 list-none cursor-pointer">
          <span className="text-gray-300  font-thin">SpaceZ 2024</span>

          <li className=" hover:text-gray-400">Terms of Privacy</li>
          <li className=" hover:text-gray-400">Resources</li>
        </ul>
      </footer>
    </>
  );
}
