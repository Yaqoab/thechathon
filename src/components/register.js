import { Alert, AlertIcon, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input,
     InputGroup,
     InputRightElement, Select, Text } from "@chakra-ui/react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator';

const Forms = () => {
    const [userData, setUserData]=useState({
        firstname:"",
        secondname:"",
        username:"",
        track:"",
        birthdate:"",
        gender:"",
        password:"",
        confirm:"",
        checkbox:false
    });
    const errors={
        errorname:"",
        errorsecond:"",
        erroruser:"",
        // errortrack:"",
        // errorbirthdate:"",
        all:"",
        errorpassword:"",
        errorconfirm:"",
        // errorcheckbox:""
    }
    const [isPending, setIsPending]=useState(false);
   const [show, setShow]=useState(false);
   const [errorcheck,setError]=useState(errors.errorcheckbox);
   const navigate=useNavigate();

   const handleClick=()=> setShow(!show)
  
    const handleChange=(event)=>{
    const {name, value, type, checked}=event.target
    setUserData({...userData, [name]: type==='checkbox'?checked:value});
   // userData.username ==="" ? seterrorData({errorname:"fill user anme"}):alert(userData.username);
   //seterrorData({...errorData})
    }

   if(validator.isEmpty(userData.firstname)){
     errors.errorname="";
    }else if(!validator.isAlpha(userData.firstname)){
        errors.errorname="only alphabet allowed";
     }
     if(validator.isEmpty(userData.secondname)){
        errors.errorsecond="";
       }else if(!validator.isAlpha(userData.secondname)){
            errors.errorsecond="only alphabet allowed";
         }
         if(validator.isEmpty(userData.username)){
            errors.erroruser="";
           }else if(!validator.isAlpha(userData.username)){
            errors.erroruser="only alphabet allowed";
             }
                     if(validator.isEmpty(userData.password)){
                        errors.errorpassword="";
                        }else if(!userData.password.match(/^[0-9a-zA-Z]+$/)){
                            errors.errorpassword="password must be alphabet and number";
                            }
                         if(validator.isEmpty(userData.confirm)){
                        errors.errorconfirm="";
                         }else if(userData.confirm !==userData.password){
                            errors.errorconfirm="password must match each";
                         }
                        
                        
                        
                   // console.log(errors)

    const handleSubmit=(e)=>{
      e.preventDefault();     
      setIsPending(true);
      setTimeout(()=>{
          setIsPending(false);
          
         },3000)
       console.log(errors.errorname)
       if(validator.isEmpty(userData.firstname && userData.secondname && userData.username && userData.password  && userData.confirm)){
        setError("fill it up");
       }else if (errors.errorname || errors.errorsecond || errors.erroruser || errors.errorpassword || errors.errorconfirm === 0) {
        setError("You made mistake while filling go and check");
       }else if(validator.isEmpty(userData.gender && userData.track && userData.birthdate)){
        setError("You do not select gender, track or date");
    }else if(userData.checkbox===false){
        setError("You must agrree with our condition");
       }else{
        setError("");
        console.log(userData)
        const data=JSON.stringify(userData)
        sessionStorage.setItem("user",data)
       navigate('/login', {replace:true})
        }
    }
    return ( 
           <Flex
       flexDirection="column"
      alignItems="center"
       w={["90%","50%"]}
       m={"0 auto"}
       border="1px solid #ddd"
       borderRadius="5px"
       mt="50px"
       p="10px"
       mb='100px'
       as="form"
       gap={'10px'}
    //    height='100vh'
       onSubmit={handleSubmit}
       >
           <Heading>Registration form</Heading>
         <FormControl size={['sm','md']}>
             <FormLabel>Firstname</FormLabel>
             <Input name={"firstname"} type={"text"} 
             placeholder={"firstname"}
             value={userData.firstname}
              onChange={handleChange} />  
              <Text color="red.300">{errors.errorname}</Text>       
         </FormControl>
         <FormControl size={['sm','md']}>
             <FormLabel>Surname</FormLabel>
             <Input name={'secondname'} type={"text"} 
             placeholder={"surename"}
             value={userData.secondname}
              onChange={handleChange} />
              <Text color="red.300">{errors.errorsecond}</Text> 
         </FormControl>
         <FormControl size={['sm','md']}>
             <FormLabel>Surname</FormLabel>
             <Input name={'username'} type={"text"} 
             placeholder={"username"}
             value={userData.username}
              onChange={handleChange} />
              <Text color="red.300">{errors.erroruser}</Text> 
         </FormControl>
         <FormControl size={['sm','md']}>
             <FormLabel>Choose track</FormLabel>
             <Select name={'track'}
              placeholder="select track"
              value={userData.track}
               onChange={handleChange}>
            <option value="HTML, CSS and javascript">HTML, CSS and javascript</option>
             <option value="React js">React js</option>
             <option value="Node js">Node js</option>
             <option value="Techanical writing">Techanical writing</option>
             <option value="Product design (UI/UX)">Product design (UI/UX)</option>
             <option value="Graphic design">Graphic design</option>
             </Select>
             <Text color="red.300">{errors.errortrack}</Text> 
         </FormControl>
         <FormControl size={['sm','md']}>
             <FormLabel>Date of birth</FormLabel>
             <Input name={'birthdate'} type={"date"} 
             value={userData.birthdate} onChange={handleChange}/>
              <Text color="red.300">{errors.errorbirthdate}</Text> 
         </FormControl>
         <FormControl size={['sm','md']}>
             <FormLabel>Gender</FormLabel>
             <Select name={'gender'}
              placeholder="select your gender"
              value={userData.gender}
               onChange={handleChange}>
             <option value="male">Male</option>
             <option value="female">Female</option>
             </Select>
             <Text color="red.300">{errors.errorgender}</Text> 
         </FormControl>
         <FormControl size={['sm','md']}>
             <FormLabel>Password</FormLabel>
             <InputGroup>
             <Input name={'password'} 
             type={show ? "text" :"password"} 
             placeholder={"password"}
             value={userData.password}
              onChange={handleChange} />
              <InputRightElement width='4.5rem'>
                  <Button h='1.7rem'
                   size='sm'
                   onClick={handleClick}
                  >{show ? 'Hide' : 'Show'}</Button>
              </InputRightElement>
              </InputGroup>
               <Text color="red.300">{errors.errorpassword}</Text> 
         </FormControl>
         <FormControl size={['sm','md']}>
             <FormLabel>Comfirm pass</FormLabel>
            <Input name={'confirm'} 
            type={show ? "text" :"password"}
             value={userData.confirm}
              placeholder={"comfirm"}
              onChange={handleChange}/>
                             <Text color="red.300">{errors.errorconfirm}</Text> 
         </FormControl>
         <FormControl>
             <Checkbox name={'checkbox'} 
             iconColor='twitter' 
             value={userData.checkbox}
             onChange={handleChange}><Text fontSize={'15px'}>I agree with the privacy and policy of techathon community</Text></Checkbox>
         </FormControl>
         <Text color="red.300">{errors.errorcheckbox}</Text> 
         {errorcheck && <Alert status="error">
             <AlertIcon />
            { errorcheck}
         </Alert>}
         {!isPending && <Button  colorScheme="twitter" mt="10px" type={'submit'}>submit</Button>}
         {isPending && <Button  colorScheme="twitter" mt="10px" type={'submit'} disabled>...isloading</Button>}
         
        
       </Flex>
     );
}
 
export default Forms;