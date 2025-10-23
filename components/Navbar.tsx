import { Github, Home, Notebook } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="absolute z-10 top-0 w-full flex justify-between items-center p-4">
      <h1 className="font-mono text-2xl">monaski</h1>

      <div className="flex gap-6 items-center dark:bg-gray-900 bg-gray-300 rounded-full px-5 text-gray-700 dark:text-gray-400">
        <div className="hover:bg-accent rounded-full p-3 hover:cursor-pointer">
          <Home className="size-6" />
        </div>
        <div className="hover:bg-accent rounded-full p-3 hover:cursor-pointer">
          <Notebook className="size-6" />
        </div>
        <div className="hover:bg-accent rounded-full p-3 hover:cursor-pointer">
          <Github className="size-6" />
        </div>
        

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
