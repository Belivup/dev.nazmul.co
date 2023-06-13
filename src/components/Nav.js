'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {useState, useEffect} from "react";


import {links, socialIcons} from "@/app/_private/dataNav";

export default function Nav(){

    const [isDark, setIsDark] = useState(false)

    // themeChange(isDark)

    const path = usePathname()

    return(
        <div className='nav'>

            <div className='navFixed innerPadding--sm flexNav'>

                <div className="navLogo">
                    <Link href={'/'} > <img src="dev.nazmul.co_Logo.png" alt="Nazmul Hossain Logo"/> </Link>
                </div>

                <div className="navLinks">
                    {links.map(link => <Link key={link.id} className={`navLink ${path == link.path && 'activeLink'}`} href={link.path} > <span className={`nivLine`}>  </span> <span className='navLeftSpce'> {link.name}</span> </Link> )}
                </div>

                <div className="navBottom">

                    <div className="navIcons">
                        {socialIcons.map(icon => <Link title={icon.name} key={icon.id} href={icon.path} target={'_blank'}> <i className={`icon ${icon.style}`} data-icon={icon.src}> </i> </Link> )}
                    </div>

                    <div className="bottomInfo">
                        <Link className="devBy" href={'/contact'} > Have Projects? Let's get started.. </Link> <br/>
                    </div>

                    <div className="darkMode">
                        <i onClick={() => setIsDark(false)} className={`icon i-solid theme-light ${!isDark && 'theme-active'}`} data-icon={'\uf185'}></i>
                        <i onClick={() => setIsDark(true)} className={`icon i-solid theme-dark ${isDark && 'theme-active'}`} data-icon={'\uf186'}></i>
                    </div>
                </div>

            </div>

        </div>
    )
}
