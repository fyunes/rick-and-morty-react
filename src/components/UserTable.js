import React from "react";

const UserTable = ({ users }) => {
  return (
    <>
        <h1 className="text-center my-5">Users</h1>
        <div className="container">
        <table className="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
          <th scope="col">Phone</th>
          <th scope="col">Website</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {users.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    </>
  );
};

export default UserTable;
