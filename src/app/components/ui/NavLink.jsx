import Link from "next/link"
const NavLink = ({ href, title}) => {
    return (
        <Link href={{href}}
        className="block text-xl md:text-2xl gap-1 hover:text-blue-500 items-center"
        >
            {title}

        </Link>
    )
}
export default NavLink;