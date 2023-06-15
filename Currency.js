import {useState} from "react"
import "./bapu.css"

export default function Currency()
{
    
     let[num,setNum] = useState(0)
     let[From,setFrom]=useState(0)
     let[To,setTo]=useState(0)


    return(
        <div className="bapu">
            <input type="number" onBlur={(e)=>{setNum(e.target.value)}}/>
            <br></br><br></br>
            From: <select onChange={(e)=>{setFrom(e.target.value)}}>
                        <option value="Re">Rupee</option>
                        <option value="Dr">Dollar</option>
                        <option value="Eo">Euro</option>
                 </select>
                        
                 
            To: <select onChange={(e)=>{setTo(e.target.value)}}>
                        <option value="Ru">Rupee</option>
                        <option value="Do">Dollar</option>
                        <option value="Eu">Euro</option>

                </select><br></br><br></br>
                 <b>Ans=</b>
                {From=="Re"&& To=="Ru"?  num :""}
                {From=="Re"&& To=="Do"? num=(num/80) :""}
                {From=="Re"&& To=="Eu"? num=(num*0.011) :""}
                {From=="Dr"&& To=="Ru"? num=(num*80) :""}
                {From=="Dr"&& To=="Do"? num :""}
                {From=="Dr"&& To=="Eu"? num=(num*0.091) :""}
                {From=="Eo"&& To=="Ru"? num=(num*90.13) :""}
                {From=="Eo"&& To=="Do"? num=(num*1.10) :""}
                {From=="Eo"&& To=="Eo"? num :""}
                
                
                {/* <p>{num}</p> */}
        </div>
    )
}