import { NavLink, useLoaderData } from "react-router-dom";

export default function List() {
    const actors = useLoaderData();
    
    if (!actors) return null;
    console.log(actors);
    return (
        <>
            {
                actors.map((actor, i) => <div key={i}>{actor.name}</div>)
            }
            <NavLink to="/contact">Go to contact</NavLink>
        </>
    )
}
