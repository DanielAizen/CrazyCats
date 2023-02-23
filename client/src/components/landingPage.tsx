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
    const [foo, setFoo] = useState<CatProfile[]>([{}]);
   useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(`${props.props.url}/all`)
                const data = await res.json()
                setFoo(data)
            } catch(err) {
                console.error(err);
            }
        }
        fetchData() 
   }, [])
   console.log(foo)
    return (
        <>
            <h1>Landing page! </h1>
            {foo.map(f => {
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