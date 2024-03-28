// import React, { useState } from "react";
// import "./style.css";
// const Fill = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [username, setUsername] = useState("");
//     const [city, setCity] = useState("");
//     const [state, setState] = useState("");
//     const [zip, setZip] = useState("");
//     const [agreed, setAgreed] = useState(false);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle form submission here
//     };

//     return (
//         <div className="container">
//             <div className="p-4">
//                 <form className=" g-3 needs-validation" onSubmit={handleSubmit}>
//                     <div className="row">
//                         <div className="userinfo">
//                             <p className="user">User Info</p>
//                             <div>
//                                 <button
//                                     type="button"
//                                     className="btn btn-primary"
//                                 >
//                                     Save
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <div className="col-md-3">
//                             <label
//                                 htmlFor="validationCustom01"
//                                 className="form-label mb-0"
//                             >
//                                 First name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom01"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-3">
//                             <label
//                                 htmlFor="validationCustom02"
//                                 className="form-label  mb-0"
//                             >
//                                 Last name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom02"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-3 ">
//                             <label
//                                 htmlFor="validationCustomUsername"
//                                 className="form-label mb-0"
//                             >
//                                 Preferred name
//                             </label>
//                             <div className="input-group has-validation">
//                                 <input
//                                     type="text"
//                                     className="form-control input-border"
//                                     id="validationCustomUsername"
//                                     aria-describedby="inputGroupPrepend"
//                                     value={username}
//                                     onChange={(e) =>
//                                         setUsername(e.target.value)
//                                     }
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-md-3 ">
//                             <label
//                                 htmlFor="validationCustom04"
//                                 className="form-label mb-0"
//                             >
//                                 Pronouns
//                             </label>
//                             <select
//                                 className="form-select input-border"
//                                 id="validationCustom04"
//                                 value={state}
//                                 onChange={(e) => setState(e.target.value)}
//                                 required
//                             >
//                                 <option selected disabled value="">
//                                     Choose...
//                                 </option>
//                                 <option>...</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <div className="col-md-6 ">
//                             <label
//                                 htmlFor="validationCustom04"
//                                 className="form-label mb-0"
//                             >
//                                 Email Address (work)
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom05"
//                                 value={zip}
//                                 onChange={(e) => setZip(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-3 ">
//                             <label
//                                 htmlFor="validationCustom05"
//                                 className="form-label mb-0"
//                             >
//                                 Phone number
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom05"
//                                 value={zip}
//                                 onChange={(e) => setZip(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-3">
//                             <label
//                                 htmlFor="validationCustom05"
//                                 className="form-label mb-0"
//                             >
//                                 Fax number
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom05"
//                                 value={zip}
//                                 onChange={(e) => setZip(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className="col-md-12 mb-3">
//                         <label
//                             htmlFor="validationCustom04"
//                             className="form-label mb-0"
//                         >
//                             Departments
//                         </label>
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <select
//                                     className="form-select input-border"
//                                     id="validationCustom04"
//                                     value={state}
//                                     onChange={(e) => setState(e.target.value)}
//                                     required
//                                 >
//                                     <option selected disabled value="">
//                                         Choose...
//                                     </option>
//                                     <option>...</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustom01"
//                                 className="form-label mb-0"
//                             >
//                                 Address line 1
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom01"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustom02"
//                                 className="form-label mb-0"
//                             >
//                                 Address line 2
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom02"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 required
//                             />
//                             <div className="valid-feedback">Looks good!</div>
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustomUsername"
//                                 className="form-label mb-0"
//                             >
//                                 City
//                             </label>
//                             <div className="input-group has-validation">
//                                 <input
//                                     type="text"
//                                     className="form-control input-border"
//                                     id="validationCustomUsername "
//                                     aria-describedby="inputGroupPrepend"
//                                     value={username}
//                                     onChange={(e) =>
//                                         setUsername(e.target.value)
//                                     }
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustom01"
//                                 className="form-label mb-0"
//                             >
//                                 Province
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom01"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustom02"
//                                 className="form-label mb-0"
//                             >
//                                 Country
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom02"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 required
//                             />
//                             <div className="valid-feedback">Looks good!</div>
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustomUsername"
//                                 className="form-label mb-0"
//                             >
//                                 Zip code
//                             </label>
//                             <div className="input-group has-validation">
//                                 <input
//                                     type="text"
//                                     className="form-control input-border"
//                                     id="validationCustomUsername"
//                                     aria-describedby="inputGroupPrepend"
//                                     value={username}
//                                     onChange={(e) =>
//                                         setUsername(e.target.value)
//                                     }
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustom01"
//                                 className="form-label mb-0"
//                             >
//                                 First name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom01"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustom02"
//                                 className="form-label mb-0"
//                             >
//                                 Last name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="validationCustom02"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 required
//                             />
//                             <div className="valid-feedback">Looks good!</div>
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="validationCustomUsername"
//                                 className="form-label mb-0"
//                             >
//                                 Email Address
//                             </label>
//                             <div className="input-group has-validation">
//                                 <input
//                                     type="text"
//                                     className="form-control input-border"
//                                     id="validationCustomUsername"
//                                     aria-describedby="inputGroupPrepend"
//                                     value={username}
//                                     onChange={(e) =>
//                                         setUsername(e.target.value)
//                                     }
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <div className="col-md-4">
//                             <input
//                                 type="text"
//                                 className="form-control input-border  mb-3"
//                                 placeholder="Linkedin"
//                                 id="validationCustom01"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <input
//                                 type="text"
//                                 placeholder="Facebook"
//                                 className="form-control input-border  mb-3"
//                                 id="validationCustom02"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <div className="input-group has-validation">
//                                 <input
//                                     type="text"
//                                     placeholder="Other"
//                                     className="form-control input-border  mb-3"
//                                     id="validationCustomUsername"
//                                     aria-describedby="inputGroupPrepend"
//                                     value={username}
//                                     onChange={(e) =>
//                                         setUsername(e.target.value)
//                                     }
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Fill;
