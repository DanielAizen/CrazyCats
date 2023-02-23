import React, { useEffect, useState } from "react";

interface CatProfile {
    name?: string;
    dob?: Date;
    location?: string;
    fav_food?: string;    
    fur_color?: string;    
    height?: number;    
    weight?: number;    
    avatar?: string;    
    likes?: number;
}

const LandingPage = (props: any) => {
    console.log(props)
    const [cats, setCats] = useState<CatProfile[]>([{}]);
   useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(`${props.props.url}/all`)
                const data = await res.json()
                setCats(data)
            } catch(err) {
                console.error(err);
            }
        }
        fetchData() 
   }, [])
   console.log(cats)
    return (
        <>
            <h1>Landing page! </h1>
            {cats.map(f => {
                console.log(f)
                return(
                    <>
                    <ul>
                        <li>{f.name}</li>
                    </ul>
                    </>
                )
            })}
        </>
    )
}

export default LandingPage