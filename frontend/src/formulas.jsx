export const Formulas=()=>{
    const [f, setF]=useState("f")
    const [m, setM]=useState("")
    const [a, setA]=useState("")
    {/* <div  style={{display:"flex"}}><input type="text" onChange={(e)=>setM(e.target.value)} placeholder='m'/> x <input onChange={(e)=>setA(e.target.value)} type="text" placeholder='a' /> = <div> {f}</div> <button onClick={findformula}>find</button></div> */}
    const findformula=async()=>{
      const equation= await axios.post("http://localhost:8000/findformula", {
      _id: "642142188be48446e2f30aac"
    })
    console.log(equation);
    eval(equation.data)
    }
return <div>

</div>
}