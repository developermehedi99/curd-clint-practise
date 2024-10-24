import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUsers = useLoaderData();
  const updateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userUpdate = { name, email };
    console.log(userUpdate);

    fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(userUpdate)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            alert('user update successful')
        }
    })

  };
  return (
    <div>
      <h2>update information of :{loadedUsers.name}</h2>
      <form onSubmit={updateUser}>
        <input type="text" name="name" defaultValue={loadedUsers?.name} id="" /> <br />
        <input type="email" name="email" defaultValue={loadedUsers?.email} id="" /> <br />
        <input type="submit" value="update user" />
      </form>
    </div>
  );
};

export default Update;
