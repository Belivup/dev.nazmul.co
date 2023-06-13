'use client'
import Link from "next/link";
import {useState} from "react";
import {works} from "@/app/_private/dataRecentWorks";


function WorkTemplate({work}){
    return(
        <Link href={`/works/${work.title.replace(/\s/g, "-")}`} key={work.id}>
            <div key={work.id} className="workBox">

                <div className="workImg">
                    <img src="/Images/work.png" alt="#"/>
                </div>

                <div className="work-info">
                    <span className='work-head-title'>{work.title}</span>
                    <p> {work.sub} </p>
                    <div className="workTags">
                        {work.tags.map(tag => <button key={tag} className="tags">{tag}</button> )}
                    </div>
                </div>

            </div>
        </Link>

    )
}


export default function Works(){

    const [tabActive, setTabActive] = useState('all')

    return(
        <>
            <div className='works'>


                <div className="fullHeight innerPadding--bg">

                    <h4 className="section-title"> My Recent Works </h4>


                    <div className="worktabs">
                        <button onClick={() => setTabActive('all')} className={`tabs ${tabActive === 'all' && 'active'}`} > All Works </button>
                        <button onClick={() => setTabActive('design')} className={`tabs ${tabActive === 'design' && 'active'}`} > Graphic Design </button>
                        <button onClick={() => setTabActive('uxui')} className={`tabs ${tabActive === 'uxui' && 'active'}`} > UX/UI Design </button>
                        <button onClick={() => setTabActive('web')} className={`tabs ${tabActive === 'web' && 'active'}`} > Web Application </button>
                        <button onClick={() => setTabActive('desktop')} className={`tabs ${tabActive === 'desktop' && 'active'}`} > Desktop App Dev </button>
                        <button onClick={() => setTabActive('mobile')} className={`tabs ${tabActive === 'mobile' && 'active'}`} > Mobile App Dev </button>
                    </div>

                    <div className="worksGrid">

                        {works.map( work => {

                            switch (tabActive){

                                case 'all':
                                    return (
                                        <div key={work.id}>
                                            <WorkTemplate work={work}/>
                                        </div>
                                    );


                                case 'design':
                                    if (work.category === 'design'){
                                        return (
                                            <div key={work.id}>
                                                <WorkTemplate work={work}/>
                                            </div>

                                        );
                                    }
                                    break;

                                case 'desktop':
                                    if (work.category === 'desktop'){
                                        return (
                                            <div key={work.id}>
                                                <WorkTemplate work={work}/>
                                            </div>
                                        );
                                    }
                                    break;

                                case 'mobile':
                                    if (work.category === 'mobile'){
                                        return (
                                            <div key={work.id}>
                                                <WorkTemplate work={work}/>
                                            </div>
                                        );
                                    }
                                    break;

                                case 'uxui':
                                    if (work.category === 'uxui'){
                                        return (
                                            <div key={work.id}>
                                                <WorkTemplate work={work}/>
                                            </div>
                                        );
                                    }
                                    break;

                                case 'web':
                                    if (work.category === 'web'){
                                        return (
                                            <div key={work.id}>
                                                <WorkTemplate work={work}/>
                                            </div>
                                        );
                                    }
                                    break;

                                default:
                                    return null

                            }


                        })}


                    </div>

                </div>

            </div>
        </>
    )
}
