import { useState } from "react"
import { getDatabase, ref, set , push } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const db = getDatabase();
  
  let nameregex = /^[a-zA-Z ]{4,40}$/;
  let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let rollregex = /^[0-9 ]{4,6}$/;

  let [error ,setError] = useState({
   
    name: "",
    email: "",
    rollnumber: "",
    gender: ""

  })
  let [text , setText] = useState({
    name: "",
    email: "",
    rollnumber: "",
    gender: ""
  })

  let [option , setOption] = useState("")

  let handleoption = (e) =>{
    setOption(e.target.value);
  }

  let handleInput = (e) =>{

    let {name , value} = e.target;
    setText({...text , [name]:value}); 

  }

  let handlebtn = () =>{
   

    if(text.name == ""){
      
      setError({name: "Please Enter Your Name"});

    }
    
    else if(!text.name.match(nameregex)){
      setError({name: "Please Enter Your Valid Name"});
    }
    
    else if(text.email == ""){
      
      setError({name: ""});
      setError({email: "Please Enter Your Email"})

    }

    else if(!text.email.match(emailregex)){
      setError({email: "Please Enter Your Valid Email/example@gmail.com"});
    }

    else if(text.rollnumber == ""){
      
      setError({email: ""});
      setError({rollnumber: "Please Enter Your Roll Number not allow character & symbol"})

    }

    else if(!text.rollnumber.match(rollregex)){

      setError({rollnumber: "Please Enter Your Roll number & minimum 2 digit & mmaximum 6 digit "});

    }
    
    else if(text.gender == ""){

      setError({rollnumber: ""});
      setError({gender: "Please Enter Your Select Gender"});

    }

    else{
      
      setError({gender: ""});
      
        
      setText({
        name: "",
        email: "",
        rollnumber: "",
        gender: ""
      })




      set(push(ref(db, 'inputproject')), {
        
        Name: text.name,
        Email: text.email,
        RollNumber: text.rollnumber,
        Gender: text.gender,
        Semester: option
  
      }).then(()=>{
      
        toast('Created Data SuccessFully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

      });


    }

  }


  return (
    <>
{/* toastify Start Here */}
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />

{/* toastify End Here */}

      <div className="input_main">
        <input className="inputbox" onChange={handleInput} name="name" type="text" placeholder="Enter Your Name"/>
        <p>{error.name}</p>
        <input className="inputbox" onChange={handleInput} name="email" type="email" placeholder="Enter Your Email"/>
        <p>{error.email}</p>
        <input className="inputbox" onChange={handleInput} name="rollnumber" type="number" placeholder="Enter Your Number"/>
        <p>{error.rollnumber}</p>

        <label for="cars">Select Your Semester</label>
        <select id="semester" onChange={handleoption}>
          <option value="1st semester" name="semester">1st semester</option>
          <option value="2nd semester" name="semester">2nd semester</option>
          <option value="3rd semester" name="semester">3rd semester</option>
          <option value="4th semester" name="semester">4th semester</option>
          <option value="5th semester" name="semester">5th semester</option>
          <option value="6th semester" name="semester">6th semester</option>
          <option value="7th semester" name="semester">7th semester</option>
          <option value="8th semester" name="semester">8th semester</option>
        </select>
        <div className="input_gender">
            <input onChange={handleInput} value="male" name="gender" type="radio"/>
            <label>Male</label>
            <input onChange={handleInput} value="female" name="gender" type="radio"/>
            <label >FeMale</label>
        </div>
            <p>{error.gender}</p>
        <button className="btn" onClick={handlebtn}>Submit</button>
      </div>
    </>
  )
}

export default App
