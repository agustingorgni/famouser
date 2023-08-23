import { useLoaderData } from "react-router-dom"

export default function Description() {
    const actor = useLoaderData();
    return <div>{actor.name}</div>
}