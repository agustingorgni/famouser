import { useLoaderData, useNavigate } from "react-router-dom"

const Description = () => {
    const celebrity = useLoaderData();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            {celebrity.name}
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export {
    Description,
}
