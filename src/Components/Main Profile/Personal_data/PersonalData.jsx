import Image from "next/image";
import classes from './PersonalData.module.css'
export default function PersonalData(){
    return <div className={classes.container}>
        <Image
        className={classes.image}
        alt="Avatar"
        src='/logo.jpg'    
        width={256}
        height={256}   
        />
        <div className={classes.col}>
            <p>[Nickname]</p>
            <p>City</p>
            <p>Year of logging</p>
        </div>
    </div>
}