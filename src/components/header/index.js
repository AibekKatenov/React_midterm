import Link from "next/link"

export default function Header(){
    return (
        <>
            <div className="header_container">
                <div className="header_item"><Link href="/">Home</Link></div>
                <div className="header_item"><Link href="post">Posts</Link></div>
                <div className="header_item"><Link href="profile">Profile</Link></div>
            </div>
        </>
    )
}