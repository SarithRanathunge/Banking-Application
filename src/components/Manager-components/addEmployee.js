import React, {useState, useEffect} from 'react';

const addEmployee = () => {
  const [fname, setFName] = useState("");
  const [errorFName, setErrorFName] = useState("");

  const [nic, setNic] = useState("");
  const [errorNic,setErrorNic] = useState("");

  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState("");

  const [position, setPosition] = useState("");
  const [errorPosition, setErrorPosition] = useState("");

  const [image, setImage] = useState(null);
  const [errorImage, setErrorImage] = useState("");

  const [lname, setLName] = useState("");
  const [errorLName, setErrorLName] = useState("");

  const [address, setAddress] = useState("");
  const [errorAddress, setErrorAddress] = useState("");

  const [email,setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [dob, setDob] = useState("");
  const [errordob, setErrorDob] = useState("");

  const [contact, setContact] = useState("");
  const [errorContact, setErrorContact] = useState("");

  const [gender, setGender] = useState("");
  const [errorgender, setErrorGender] = useState("");

  const nameRegx = /^[A-Za-z]+$/;
  const numberRegex = /^[0-9]+$/;
  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Use effect to validate the name on input change
  useEffect(() => {
    if (fname !== "" && !nameRegx.test(fname)) {
      setErrorFName("Can't be any numbers or special characters");
    } else {
      setErrorFName("");
    }
  }, [fname]);

  useEffect(()=>{
    if(nic !== "" && !numberRegex.test(nic)){
      setErrorNic("Can't be any letters or special characters");
    }else if(nic.length>=1 && nic.length<=10){
      setErrorNic("NIC should be more 10 numbers");
    }else{
      setErrorNic("");
    }
  },[nic]);

  useEffect(() => {
    if (username !== "" && !nameRegx.test(username)) {
      setErrorUsername("Can't be any numbers or special characters");
    } else {
      setErrorUsername("");
    }
  }, [username]);

  useEffect(() => {
    if (position !== "" && !nameRegx.test(position)) {
      setErrorPosition("Can't be any numbers or special characters");
    } else {
      setErrorPosition("");
    }
  }, [position]);

  useEffect(() => {
    if (lname !== "" && !nameRegx.test(lname)) {
      setErrorLName("Can't be any numbers or special characters");
    } else {
      setErrorLName("");
    }
  }, [lname]);

  useEffect(() => {
    if (address !== "") {
      setErrorAddress("");
    }
  }, [address]);

  useEffect(() => {
    if (email !== "" && !emailRegx.test(email)) {
      setErrorEmail("Unvalid email");
    } else {
      setErrorEmail("");
    }
  }, [email]);

  useEffect(() => {
    if (dob !== "") {
      setErrorDob("");
    }
  }, [dob]);

  useEffect(()=>{
    if(contact !== "" && !numberRegex.test(contact)){
      setErrorContact("Can't be any letters or special characters");
    }else if(contact.length>=1 && contact.length<10){
      setErrorContact("Contact should be 10 numbers");
    }else if(contact.length==0 || contact.length==10){
      setErrorContact("");
    }
  },[contact]);

  useEffect(() => {
    if (gender !== "") {
      setErrorGender("");
    }
  }, [gender]);


  const handleClick =()=>{
    if(fname===""){
      setErrorFName("Can't be Empty");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }else if(nic===""){
      setErrorFName("");
      setErrorNic("Can't be Empty");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }else if(username===""){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("Can't be Empty");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }else if(position ===""){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("Can't be Empty");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }else if(image==null){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("Can't be Empty");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }else if(lname===""){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("Can't be Empty");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }else if(address===""){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("Can't be Empty");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }else if(email===""){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("Can't be Empty");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }else if(dob ===""){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("Can't be Empty");
      setErrorContact("");
      setErrorGender("");
    }else if(contact===""){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("Can't be Empty");
      setErrorGender("");
    }else if(gender===""){
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("Can't be Empty");
    }else{
      setErrorFName("");
      setErrorNic("");
      setErrorUsername("");
      setErrorPosition("");
      setErrorImage("");
      setErrorLName("");
      setErrorAddress("");
      setErrorEmail("");
      setErrorDob("");
      setErrorContact("");
      setErrorGender("");
    }
  };


    return (
            <div className="w-full max-h-[650px] flex flex-col font-sans antialiased overflow-y-auto"> 
                <div className='w-full h-auto flex flex-row justify-between items-start px-[110px]'>
                    <div className='w-auto h-auto flex flex-col'>
                         {/* First Name */}
                        <div className='w-auto h-auto flex flex-col my-2 '>
                          <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                            <label className='text-[15pt] font-medium'>First Name</label>
                            <p className='text-[10pt] text-red-500'>{errorFName}</p>
                          </div>
                          <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                type="text"
                                placeholder='*Udagemuwe Upali'
                                onChange={(e)=>{setFName(e.target.value)}}
                          />
                        </div>
                        {/* NIC */}
                        <div className='w-auto h-auto flex flex-col my-2 '>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>NIC</label>
                              <p className='text-[10pt] text-red-500'>{errorNic}</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='*200132654789V'
                                  onChange={(e)=>{setNic(e.target.value)}}
                            />
                        </div>

                        {/* Username */}
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Username</label>
                              <p className='text-[10pt] text-red-500'>{errorUsername}</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='*upali'
                                  onChange={(e)=>{setUsername(e.target.value)}}
                            />
                        </div>

                        {/* Position */}
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Position</label>
                              <p className='text-[10pt] text-red-500'>{errorPosition}</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='*Manager'
                                  onChange={(e)=>{setPosition(e.target.value)}}
                            />
                        </div>

                        {/* Employee image  */}
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Employee Profile Image</label>
                              <p className='text-[10pt] text-red-500'>{errorImage}</p>
                            </div>
                            <div className="w-[480px] h-[210px] flex justify-center items-center mt-1">
                              <label
                                htmlFor="input-file"
                                className="w-[480px] h-[210px] text-[14pt]  rounded border-[3.2px] border-orange-500 bg-none outline-transparent cursor-pointer">
                                <input
                                  type="file"
                                  accept="image/*"
                                  id="input-file"
                                  className="hidden"
                                  onChange={handleImageUpload}
                                />
                                <div className="w-[480px] h-[210px] flex justify-center items-center text-center">
                                  {image ? (
                                    <img
                                      src={image}
                                      alt="Uploaded"
                                      className="w-[480px] h-[210px] object-contain rounded"
                                    />
                                  ) : (
                                    <div className="flex flex-col items-center">
                                      <svg class="h-8 w-8 text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />  
                                        <polyline points="7 9 12 4 17 9" />  
                                        <line x1="12" y1="4" x2="12" y2="16" />
                                      </svg>
                                      <span className="text-sm text-gray-400 mt-4">
                                        Upload jpg or png image files only
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-auto h-auto flex flex-col'>
                      {/* Last Name */}
                        <div className='w-auto h-auto flex flex-col my-2 '>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Last Name</label>
                              <p className='text-[10pt] text-red-500'>{errorLName}</p>
                            </div>
                            <label className='text-[15pt] font-medium'></label>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='*Perera'
                                  onChange={(e)=>{setLName(e.target.value)}}
                            />
                        </div>

                        {/* Address */}
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Address</label>
                              <p className='text-[10pt] text-red-500'>{errorAddress}</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='*No.108/13 Kurudu Road, Kadawatha, Colombo 7'
                                  onChange={(e)=>{setAddress(e.target.value)}}
                            />
                        </div>

                        {/* Email */}
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Email</label>
                              <p className='text-[10pt] text-red-500'>{errorEmail}</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='*sample@gmail.com'
                                  onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>

                        {/* Date of Birth  */}
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Date of Birth</label>
                              <p className='text-[10pt] text-red-500'>{errordob}</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="date"
                                  placeholder='* 12/03/2024'
                                  onChange={(e) =>{setDob(e.target.value)}}
                            />
                        </div>

                        {/* Contact */}
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Contact</label>
                              <p className='text-[10pt] text-red-500'>{errorContact}</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='*0761234567'
                                  onChange={(e)=>{setContact(e.target.value)}}
                            />
                        </div>

                        {/* Gender */}
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Gender</label>
                              <p className='text-[10pt] text-red-500'>{errorgender}</p>
                            </div>
                            <div className='w-[480px] h-[50px] flex flex-row justify-start items-center text-[14pt] gap-20'>
                              <div>
                                <label>
                                  <input className='form-radio h-3.5 w-4 text-[14pt] text-orange-500 border-orange-500 focus:ring-orange-500 mr-1 '
                                    type="radio"
                                    value="Male"
                                    checked={gender === "Male"}
                                    onChange={(e)=>{setGender(e.target.value)}}
                                  />
                                  Male
                                </label>
                              </div>
                              <div>
                                <label>
                                  <input className='form-radio h-3.5 w-4 font-[14pt] text-orange-500 border-orange-500 focus:ring-orange-500 mr-1 '
                                    type="radio"
                                    value="Female"
                                    checked={gender === "Female"}
                                    onChange={(e)=>{setGender(e.target.value)}}
                                  />
                                  Female
                                </label>
                              </div>
                            </div>
                        </div>

                        {/* Create Button */}
                        <button className='w-[480px] h-[50px] justify-center items-center text-[14pt] mt-2 bg-green-500 text-white rounded border-[2px] border-green-500 border-solid hover:border-[2px] hover:border-orange-500 hover:bg-white hover:text-orange-500'
                            type='submit'
                            onClick={handleClick}
                        >
                          Create
                        </button>
                      </div>
                </div>

                <div className='w-full h-[50px] flex flex-row justify-between items-center px-[110px]'>
                </div>
            </div>
            

    );
}

export default addEmployee