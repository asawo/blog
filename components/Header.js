import Link from 'next/link'

export default function Header() {
    return (
        <header className="container">
            <div>
                <Link href='/'>
                    <h2>asawo.dev</h2>
                </Link>
            </div> 
        </header>
    )
}