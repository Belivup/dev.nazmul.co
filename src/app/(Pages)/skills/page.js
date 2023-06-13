import skills from "@/app/_private/dataSkills";
import Link from "next/link";

export default function Skills(){


    return(
        <>
            <div className='skills'>
                <section className="fullHeight innerPadding--bg">
                    <div className="skillsGrid">


                        {skills.map( skillName => {
                            return(
                                <div key={skillName.id} className="skillBox">

                                    <div className="box-head">
                                        <span className="box-title"> {`${skillName.name} `}
                                    </span>
                                        <span>Skills</span>
                                    </div>

                                    <div className="certificate">
                                        <span>Certificate</span>
                                        <span>{skillName.certificate}</span>
                                    </div>

                                    <div className="box-body">

                                        {skillName.skills.map( skill => {
                                            return (
                                                <div key={skill.id} className="skill-list">
                                                    <span style={{width: skill.process}} className="skill-process" aria-label='Skill Indecator' role={'list'}> </span>

                                                    <div className="list-content">
                                                        <span>{skill.name}</span>
                                                        <span className='process-percent'> {skill.process} </span>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </section>
            </div>
        </>
    )
}
