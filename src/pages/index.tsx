import { HomeIcon, PuzzlePieceIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import router from "next/router";

export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        <div className="rounded bg-white h-15 shadow-sm">
          <Link href="/users">
            <div
              className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center transition-colors 
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
          }`}
            >
              <div className="mr-2">
                <UserIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Users</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="rounded bg-white h-15 shadow-sm">
          <Link href="/games">
            <div
              className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center transition-colors 
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <PuzzlePieceIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl">Games</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}