import { useCallback, useState,useEffect, use, useRef } from 'react'
function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const passref=useRef(null)
  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="@#$~"
    for (let i = 1; i <= length; i++){
         let char=Math.floor(Math.random()*str.length+1);
         pass += str.charAt(char);
         
    }
    setpassword(pass)
  }, [length,numberAllowed,charAllowed,setpassword])
  const copypasstoclip=useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllowed,charAllowed,passwordgenerator])
  

  return (
    <>
     
      <div  className='w-full max-w-md mx-auto shadow-lg justify-center rounded-xl px-6 py-5 my-8 text-orange-500 bg-purple-700'>
        <h2 className='text-3xl text-center text-white my-5'>Password Generator</h2>
        <div className='flex rounded-lg mb-4 overflow-hidden'>
           <input
          type='text'
          placeholder='Password'
          value={password}
          className='w-full rounded-lg py-1 px-3'
          ref={passref}
          />
          <button 
          onClick={copypasstoclip}
          className='flex overflow-hidden rounded-none px-3 py-0.5 bg-blue-700 text-white'
          >
          copy</button>
          
        </div>  
        
          <div className='flex items-center gap-x-1'>
           <input 
            type='range'
            min={8}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
           />
           <label className='text-white'>Length:{length}</label>
           <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={()=>{setnumberAllowed((prev)=> !prev)}}
           />
           <label className='text-white'>Numbers</label>
           <input 
            type='checkbox'
            
            defaultChecked={charAllowed}
            onChange={()=>{setcharAllowed((prev)=> !prev)}}
           />
           <label className='text-white'>Char</label>
          </div>
          
      </div>
      
     
    </>
  )
}

export default App
