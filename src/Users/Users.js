import React, { Component } from 'react'
 import User from './User'


class Users extends Component{
    state ={
        users:[
            {name:'Annamyrat', gender:"male", age:38},
            {name:'Gulsenem', gender:"female", age:39},
            {name:'Muhammet', gender:"male", age:12},
            {name:'Meryem', gender:"female", age:11},
            {name:'Mesut', gender:"male", age:8}
        ], 
        title: 'Gulberdiyev`s Family'
    }

    makeMeYounger =()=>{
      const newState = this.state.users.map((user)=>{
          let tempUser = user;
          tempUser.age = tempUser.age >0? tempUser.age - 10 : 0;
          return tempUser
      });
      this.setState({
          newState
      })
    }
render(){
    return (
        <div>
            
     <h1>{this.state.title}</h1>
      {this.state.users.map((user)=>{
          return (<div><User name={user.name} gender={user.gender} age={user.age}></User>,
          <br/>,
          <button onClick={this.makeMeYounger}>Make ME Younger</button>
          </div>)

      })
    }
         </div>
    )
   
}  
}


export default Users;



