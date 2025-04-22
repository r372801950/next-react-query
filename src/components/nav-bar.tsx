import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex items-center space-x-6 border-b h-14 px-8">
      <Link className="flex"  href="/">Logo</Link>
      <Link className="navbar-brand" href="/pokemon">皮卡丘</Link>
    </nav>
  )
}