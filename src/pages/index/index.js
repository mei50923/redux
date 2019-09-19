import React from "react"
import Header from "../../components/Header"



export default class Index extends React.Component{
   constructor(props){
       super(props);
   }
   render(){
       return (
           <div>
               <Header/>
               首页
               </div>
       )
   }
}