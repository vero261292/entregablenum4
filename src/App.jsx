import useFetch from "./hooks/useFetch";
import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import { FormUser } from "./components/FormUser";

function App() {
  const [closeForm, setCloseForm] = useState(true);
  const [updateInfo, setUpdateInfo] = useState();

  const baseUrl = "https://users-crud.academlo.tech";
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl);
    const handleOpenForm = () => {
      setCloseForm(false);
    };

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  return (
    <div className="users">
      <div className="users__header">
        <h1>USERS</h1>
        <button onClick={handleOpenForm}> OPEN FORM</button>
      </div>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className="users__list">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} deleteUserById={deleteUserById} setUpdateInfo={setUpdateInfo}
          handleOpenForm={handleOpenForm}
          
         />
        ))}
      </div>
    </div>
  );
}

export default App;

