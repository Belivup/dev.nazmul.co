
import './globals.css'
import { Poppins } from 'next/font/google'
import Nav from "@/components/Nav";
import Link from "next/link";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '800'],
})


export const metadata = {
  title: 'dev.nazmul.co',
  description: 'Software Engineer | Graphic Designer | UX/UI Designer | Digital Marketer',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={poppins.className}>

          <div className='main'>

              <Nav/>

              <div className='content'>
                  {children}
              </div>

              <div className="nextBtn">
                  <Link href={''}> <span className="nextPage"> ctrl &nbsp; + &nbsp; → </span></Link>
              </div>

          </div>
      </body>
    </html>
  )
}
