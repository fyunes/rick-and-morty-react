import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import UserTable from "./UserTable";
import axios from "axios";

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data)
      });
  }, []);
  return (
    <div className="main-table">
      <div>
        {
          users ? <UserTable users={users}/> : <Loading />}
      </div>
    </div>
  );
};

export default Table;
