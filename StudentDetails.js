import { useState } from "react"
import Graduate from "./Graduate"
import Undergraduate from "./Undergraduate"
import Pg from "./Pg"
import "./student.css"


export default function StudentDetails()
{
    let[txt,setTxt]=useState("")
    let[email,setEmail]=useState("")
    let[val,setVal]=useState("")

    
    return(
         <div className="all">
            <b>UserName:</b><input type="text" name="User" onBlur={(e)=>{setTxt(e.target.value)}}/>
            <br></br>
            <br></br>
            <b>UserEmail:</b><input type="email" Email="Email"onBlur={(e)=>{setEmail(e.target.value)}} />
            <br></br>
            <br></br>
            <select id="s1" onChange={(e)=>{setVal(e.target.value)}}>
            <option >select</option>
                <option value="gd">Graduate</option>
                <option value="pg">PG</option>
                <option value="ug">Undergraduate</option>
            </select>
             <p><b>Name:</b> {txt}</p>
            <p><b>Email:</b> {email}</p> 
            <br></br>
            <p><b>User Details:</b></p>
            {val=="gd"?<Graduate></Graduate>:""}
            {val=="pg"?<Pg></Pg>:""}
            {val=="ug"?<Undergraduate></Undergraduate>:""}
         </div>
    )
}