"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"
import {Button} from "@/components/ui/button"
import { signIn , signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"

export default function AppBar() {
  const session = useSession()
  const params = useParams<{ tname: string[] }>()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center border-b border-gray-700 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="/">
          <BookOpen className="h-6 w-6 text-purple-400" />
          <span className="ml-2 text-2xl font-bold text-purple-300">CAT Prep</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link className="text-sm text-gray-400 font-medium hover:text-purple-300 transition-colors" href="/topictests">
            Topic-Based Tests
          </Link>
          <Link className="text-sm text-gray-400 font-medium hover:text-purple-300 transition-colors" href="/mocktests">
            Mock Tests
          </Link>
          {session?.data?.user ? (
            <Button variant="secondary" onClick={()=>{signOut()}} size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              Sign Out
            </Button>
          ):
          <Button variant="secondary" onClick={()=>{signIn("google")}} size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
            Sign In
          </Button>
          }
        </nav>
      </header>
  )
}