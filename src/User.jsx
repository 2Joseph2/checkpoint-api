

const User = ({user}) => {
    return ( 
        <div className="user">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p><b>{user.phone}</b></p>
            <p>works at {user.company.name}</p>
        </div>
     );
}
 
export default User;