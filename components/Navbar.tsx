import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center py-2 px-4 border border-b-amber-300 bg-gray-200 dark:bg-gray-800">
      <h1>monaski</h1>

      <ModeToggle />
    </nav>
  )
}

export default Navbar