import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image
            src={Logo}
            alt='Dogo Helpdesk logo'
            width={70} // This in in pixels
            quality={100} // In percent
            placeholder='blur'
        />
        <h1>Dojo Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets ">Tickets</Link>
    </nav>
  )
}
