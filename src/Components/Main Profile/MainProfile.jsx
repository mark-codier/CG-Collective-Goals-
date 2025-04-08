import connector from "./Connector";
const { PersonalData, Preloader } = connector;

import classes from './MainProfile.module.css'

export default function MainProfile(){
    return(<div className={classes.mainCont}>

        <section className={classes.section_1}>
            <h1>Section 1</h1>
            <PersonalData/>
        </section>  

        <section className={classes.section_2}>
            <h1>Section 2</h1>
        </section> 

        <section className={classes.section_3}>
            <h1>Section 2</h1>
        </section>  
             
    </div>)
}
// Section 1 - Personal data
// Section 2 - Goals: small and bigs (Progress)
// Section 3 - Community: friend and groups
//
//