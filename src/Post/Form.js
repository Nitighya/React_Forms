
import { useEffect, useState } from "react";
import '../App.css';

function Form() {

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [txt, setTxt] = useState('');
    const [eid, setEid] = useState('');
    const [gender, setGender] = useState(false);
    const [type, setType] = useState(false);
    const [status, setStatus] = useState(false);
    const [dob, setDob] = useState('');
    const [doj, setDoj] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [box, setBox] = useState({ trueValues: [] });
    const [graduate, setGraduate] = useState({ grad: [] });
    const [hobbies, setHobbies] = useState({ hobby: [] });

    const handleChange = (event) => {
        setname(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleMobileChange = (event) => {
        setMobileNumber(event.target.value);
    }
    const handleTextAreaChange = (event) => {
        setTxt(event.target.value)
    }
    const handleEidChange = (event) => {
        setEid(event.target.value)
    }
    const hadleGeder = (e) => {
        setGender(e.target.value);
    }
    const handleType = (event) => {
        setType(event.target.value);
    }
    const handleStatus = (event) => {
        setStatus(event.target.value);
    }

    const handleDoj = (event) => {
        setDoj(event.target.value);
    };
    const handleDob = (event) => {
        setDob(event.target.value);
    };
    const handleAadhar = (event) => {
        setAadhar(event.target.value);
    };

    const handleBox = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        const trueValues = box.trueValues;

        if (checked) {
            setBox({
                trueValues: [...trueValues, value]
            })
        } else {
            setBox({
                trueValues: trueValues.filter((e) => e !== value)
            })
        }
    }

    const handleGraduate = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        const grad = graduate.grad;

        if (checked) {
            setGraduate({
                grad: [...grad, value]
            });
        } else {
            setGraduate({
                grad: grad.filter((e) => e !== value)
            });
        }
    }

    const handleHobby = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        const hobby = hobbies.hobby;

        if (checked) {
            setHobbies({
                hobby: [...hobby, value]
            });
        } else {
            setHobbies({
                hobby: hobby.filter((e) => e !== value)
            });
        }
    }

    const handleSubmit = (e)  =>{
        e.preventDefault();
        const request  = {
            r_name:name,
            r_email:email,
            r_password:password,
            r_mobile:mobileNumber,
            r_address:txt,
            r_eid:eid,
            r_gender:gender,
            r_shift:type,
            r_martial:status,
            r_dob:dob,
            r_aadhar:aadhar,
            r_workingdays: box,
            r_graduation:graduate,
            r_hobbies:hobbies
        };
        console.log(request);
    }

    return (
        <div className="outer">
            <form onSubmit={handleSubmit} >
                <table>
                    <tbody>
                        <tr >
                            <td><label> Name : </label></td>
                            <td><input type="text" value={name} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td> <label>Gender : </label></td>
                            <td>
                                <input type="radio" value="male" checked={gender === "male"} onChange={hadleGeder} />: Male<br />
                                <input type="radio" value="female" checked={gender === "female"} onChange={hadleGeder} />: Female
                            </td>
                        </tr>

                        <tr>
                            <td><label>Email : </label></td>
                            <td><input type="email" value={email} onChange={handleEmailChange} /></td>
                        </tr>

                        <tr>
                            <td> <label>Hobbies : </label></td>
                            <td>
                                <input type="checkbox" value="cricket" onChange={handleHobby} />:Cricket<br />
                                <input type="checkbox" value="football" onChange={handleHobby} />:Football<br />
                                <input type="checkbox" value="swimming" onChange={handleHobby} />:Swimming<br />
                                <input type="checkbox" value="gardening" onChange={handleHobby} />:Gardening<br />
                                <input type="checkbox" value="cooking" onChange={handleHobby} />:Cooking
                            </td>
                        </tr>

                        <tr>
                            <td><label>Password : </label></td>
                            <td> <input type="password" value={password} onChange={handlePasswordChange} /></td>
                        </tr>

                        <tr>
                            <td> <label>Graduation : </label></td>
                            <td>
                                <input type="checkbox" value="metric" onChange={handleGraduate} />:Matric<br />
                                <input type="checkbox" value="undergraduate" onChange={handleGraduate} />:Undergraduate<br />
                                <input type="checkbox" value="postgraduate" onChange={handleGraduate} />:Postgraduate<br />
                            </td>
                        </tr>

                        <tr>
                            <td> <label>Mobile Number : </label></td>
                            <td> <input type="number" value={mobileNumber} onChange={handleMobileChange} /></td>
                        </tr>

                        <tr>
                            <td> <label>Shift Type : </label></td>
                            <td>
                                <input type="radio" value="part" onChange={handleType} checked={type === "part"} />:Part-Time<br />
                                <input type="radio" value="full" onChange={handleType} checked={type === "full"} />:Full-Time
                            </td>
                        </tr>

                        <tr>
                            <td><label>Date Of Birth : </label></td>
                            <td> <input type="date" value={dob} onChange={handleDob} /></td>
                        </tr>

                        <tr>
                            <td><label> Address : </label></td>
                            <td><textarea value={txt} onChange={handleTextAreaChange}></textarea></td>
                        </tr>

                        <tr>
                            <td><label>Date Of Joining : </label></td>
                            <td>  <input type="date" value={doj} onChange={handleDoj} /></td>
                        </tr>
                        <tr>
                            <td> <label>Status : </label></td>
                            <td>
                                <input type="radio" value="working" onChange={handleStatus} checked={status === "working"} />:Working<br />
                                <input type="radio" value="not-working" onChange={handleStatus} checked={status === "not-working"} />:Not-Working
                            </td>
                        </tr>
                        <tr>
                            <td><label>Employee ID: </label></td>
                            <td>  <input type="number" value={eid} onChange={handleEidChange} /></td>
                        </tr>

                        <tr>
                            <td> <label>Working Days :</label></td>
                            <td>
                                <input type="checkbox" value="Monday" onChange={handleBox} />:Monday<br />
                                <input type="checkbox" value="Tuesday" onChange={handleBox} />:Tuesday<br />
                                <input type="checkbox" value="Wednesday" onChange={handleBox} />:Wednesday<br />
                                <input type="checkbox" value="Thursday" onChange={handleBox} />:Thursday<br />
                                <input type="checkbox" value="Friday" onChange={handleBox} />:Friday<br />
                                <input type="checkbox" value="Saturday" onChange={handleBox} />:Saturday<br />
                                <input type="checkbox" value="Sunday" onChange={handleBox} />:Sunday
                            </td>
                        </tr>
                        <tr>
                            <td><label>Aadhar : </label></td>
                            <td><input type="number" value={aadhar} onChange={handleAadhar} /></td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Form;