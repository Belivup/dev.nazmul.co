import Image from "next/image";


export default function Works(){


    return(
        <>
            <div className='works'>

                <section className="fullHeight innerPadding--bg">

                    <h4 className="section-title"> My Recent Works </h4>

                    <div className="worksGrid">

                        <div className="workBox">

                            <div className="workImg">
                                <img src="/Images/works.png" alt="#"/>
                            </div>

                            <div className="work-info">
                                <span className='work-head-title'>Belivup Banner Design Projects</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ex.</p>
                            </div>

                        </div>


                        <div className="workBox">

                            <div className="workImg">
                                <img src="/Images/works.png" alt="#"/>
                            </div>

                            <div className="work-info">
                                <p>Hello</p>
                            </div>

                        </div>


                        <div className="workBox">

                            <div className="workImg">
                                <img src="/Images/works.png" alt="#"/>
                            </div>

                            <div className="work-info">
                                <p>Hello</p>
                            </div>

                        </div>


                    </div>

                </section>

            </div>
        </>
    )
}
