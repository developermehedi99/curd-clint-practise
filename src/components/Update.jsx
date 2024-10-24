import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUsers = useLoaderData();
    return (
        <div>
            <h2>update information of :{loadedUsers.name}</h2>
        </div>
    );
};

export default Update;