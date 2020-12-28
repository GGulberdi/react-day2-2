

function User (props){
    return (
    <div class="box">
        <h2>Name:{props.name}</h2>
        <h3>gender: {props.gender}</h3>
        <h3>age:{props.age}</h3>
    </div>
    )
}




export default User;