import Link from "next/link";
interface Option{
  href: string,
  name: string,
}
interface Props {
  options:Option[]
}
export const NavBar = (props: Props) => {
  return (
    <nav className="flex items-center space-x-6 border-b h-14 px-8">
      <Link href="/">Logo</Link>
      <Link href="/pokemon">皮卡丘</Link>
      {props.options.map(item => (
        <Link key={item.href} href={item.href}>{item.name}</Link>
      ))}

    </nav>
  )
}