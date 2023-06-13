
'use client'
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home(){

    const [experience, setExperience] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const startDate = new Date(2017, 0, 1); // Set the start date
        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDiff = currentDate - startDate;

            const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setExperience({ years, months, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return(
        <>
            <div className='header'>
                <section className="innerPadding--bg">
                    <div className="headerGrid">

                        <div className="headerInfo">

                            <div>
                                <span className='imText'>Hello, I'm</span>
                                <h1>NAZMUL HOSSAIN</h1>
                                <p>Founder & CEO, <Link className='greenText' href={'https://Belivup.com'} target={'_blank'}> Belivup Limited </Link></p>

                            </div>

                            <p className='bioDetail'>
                                Full Stack Software Engineer | Web, Mobile & Desktop App Developer<br/>
                                Graphic & Branding Identity Designer | UX/UI Designer<br/>
                                Experienced in Digital Marketing & Managements <br/>

                            </p>

                            <span className="expText" >

                                   <div className="yearMonth">
                                        <span className="yearexp greenText">{experience.years}</span> Years
                                        <span className="yearexp greenText">{experience.months}</span> Months
                                   </div>

                                    <div className="expTime">
                                        <span className="yearexp greenText">{experience.days}</span> Days
                                        <span className="yearexp greenText">{experience.hours}</span> Hours
                                        <span className="yearexp greenText">{experience.minutes}</span> Minutes
                                        <span className="yearexp greenText">{experience.seconds}</span> Days of Experience
                                        <span className="happyEmoji">&nbsp;😀</span>
                                    </div>

                                </span>


                            <button className='btn btn--head'>
                                <i className="icon i-solid" data-icon={'\uf15c'}> &nbsp; </i>
                                PDF Resume View
                            </button>

                        </div>

                        <div className="headerImage">
                            <img className='heroPic' src="/Images/Mask.png" alt="Image of Nazmul Hossain"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
