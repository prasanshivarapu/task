// import React from "react";
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const YourComponent = () => {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm();

//     // const onSubmit = (data) => {
//     //     console.log(data);
//     //     reset({
//     //         firstName: "",
//     //         lastName: "",
//     //         addressLine1: "",
//     //         addressLine2: "",
//     //         city: "",
//     //         country: "",
//     //         department: "",
//     //         email: "",
//     //         email1: "",
//     //         facebook: "",
//     //         fax: "",
//     //         firstName1: "",
//     //         lastName1: "",
//     //         linkedIn: "",
//     //         other: "",
//     //         phone: "",
//     //         preferredName: "",
//     //         pronouns: "",
//     //         province: "",
//     //         zipCode: "",
//     //     });
//     // };
//     const onSubmit = async (data) => {
//         try {
//             const response = await fetch("http://localhost:5000/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 console.log("Data successfully sent to the backend");
//                 toast.success("Data saved successfully", {
//                     position: "top-right",
//                     autoClose: 1000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                 });
//                 // reset({
//                 //     firstName: "",
//                 //     lastName: "",
//                 //     addressLine1: "",
//                 //     addressLine2: "",
//                 //     city: "",
//                 //     country: "",
//                 //     department: "",
//                 //     email: "",
//                 //     email1: "",
//                 //     facebook: "",
//                 //     fax: "",
//                 //     firstName1: "",
//                 //     lastName1: "",
//                 //     linkedIn: "",
//                 //     other: "",
//                 //     phone: "",
//                 //     preferredName: "",
//                 //     pronouns: "",
//                 //     province: "",
//                 //     zipCode: "",
//                 // });
//             } else {
//                 console.error("Failed to send data to the backend");
//             }
//         } catch (error) {
//             console.error("Error while sending data to the backend", error);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-6 mb-1">
//                     <ToastContainer
//                         position="top-right"
//                         autoClose={3000}
//                         hideProgressBar={false}
//                         newestOnTop={false}
//                         closeOnClick
//                         rtl={false}
//                         pauseOnFocusLoss
//                         draggable
//                         pauseOnHover
//                     />
//                 </div>
//             </div>

//             <div className="p-4">
//                 <form
//                     className="g-3 needs-validation"
//                     onSubmit={handleSubmit(onSubmit)}
//                 >
//                     <div className="row">
//                         <div className="userinfo">
//                             <p className="user">User Info</p>
//                             <div>
//                                 <button
//                                     type="submit"
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
//                                 htmlFor="firstName1"
//                                 className="form-label mb-0"
//                             >
//                                 First name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="firstName1"
//                                 {...register("firstName1", { required: true })}
//                             />
//                             {errors.firstName1 && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-3">
//                             <label
//                                 htmlFor="lastName1"
//                                 className="form-label mb-0"
//                             >
//                                 Last name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="lastName1"
//                                 {...register("lastName1", { required: true })}
//                             />
//                             {errors.lastName1 && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-3">
//                             <label
//                                 htmlFor="preferredName"
//                                 className="form-label mb-0"
//                             >
//                                 Preferred name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="preferredName"
//                                 {...register("preferredName", {
//                                     required: true,
//                                 })}
//                             />
//                             {errors.preferredName && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-3">
//                             <label
//                                 htmlFor="pronouns"
//                                 className="form-label mb-0"
//                             >
//                                 Pronouns
//                             </label>
//                             <select
//                                 className="form-select input-border"
//                                 id="pronouns"
//                                 {...register("pronouns", { required: true })}
//                             >
//                                 <option value="">Choose...</option>
//                                 <option>...</option>
//                             </select>
//                             {errors.pronouns && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <div className="col-md-6">
//                             <label htmlFor="email1" className="form-label mb-0">
//                                 Email Address (work)
//                             </label>
//                             <input
//                                 type="email"
//                                 className="form-control input-border"
//                                 id="email1"
//                                 {...register("email1", { required: true })}
//                             />
//                             {errors.email1 && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-3">
//                             <label htmlFor="phone" className="form-label mb-0">
//                                 Phone number
//                             </label>
//                             <input
//                                 type="tel"
//                                 className="form-control input-border"
//                                 id="phone"
//                                 {...register("phone", { required: true })}
//                             />
//                             {errors.phone && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-3">
//                             <label htmlFor="fax" className="form-label mb-0">
//                                 Fax number
//                             </label>
//                             <input
//                                 type="tel"
//                                 className="form-control input-border"
//                                 id="fax"
//                                 {...register("fax", { required: true })}
//                             />
//                             {errors.fax && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     <div className="col-md-12 mb-3">
//                         <label htmlFor="department" className="form-label mb-0">
//                             Departments
//                         </label>
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <select
//                                     className="form-select input-border"
//                                     id="department"
//                                     {...register("department", {
//                                         required: true,
//                                     })}
//                                 >
//                                     <option value="" disabled selected>
//                                         Choose...
//                                     </option>
//                                     <option value="department1">
//                                         Department 1
//                                     </option>
//                                     <option value="department2">
//                                         Department 2
//                                     </option>
//                                     {/* Add more options as needed */}
//                                 </select>
//                                 {errors.department && (
//                                     <span className="er">
//                                         This field is required
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="addressLine1"
//                                 className="form-label mb-0"
//                             >
//                                 Address line 1
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="addressLine1"
//                                 {...register("addressLine1", {
//                                     required: true,
//                                 })}
//                             />
//                             {errors.addressLine1 && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="addressLine2"
//                                 className="form-label mb-0"
//                             >
//                                 Address line 2
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="addressLine2"
//                                 {...register("addressLine2", {
//                                     required: true,
//                                 })}
//                             />

//                             {errors.addressLine2 && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-4">
//                             <label htmlFor="city" className="form-label mb-0">
//                                 City
//                             </label>
//                             <div className="input-group has-validation">
//                                 <input
//                                     type="text"
//                                     className="form-control input-border"
//                                     id="city"
//                                     {...register("city", { required: true })}
//                                 />
//                                 <br />
//                             </div>{" "}
//                             {errors.city && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="province"
//                                 className="form-label mb-0"
//                             >
//                                 Province
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="province"
//                                 {...register("province", { required: true })}
//                             />
//                             {errors.province && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="country"
//                                 className="form-label mb-0"
//                             >
//                                 Country
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="country"
//                                 {...register("country", { required: true })}
//                             />
//                             {errors.country && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="zipCode"
//                                 className="form-label mb-0"
//                             >
//                                 Zip code
//                             </label>
//                             <div className="input-group has-validation">
//                                 <input
//                                     type="text"
//                                     className="form-control input-border"
//                                     id="zipCode"
//                                     aria-describedby="inputGroupPrepend"
//                                     {...register("zipCode", { required: true })}
//                                 />
//                             </div>{" "}
//                             {errors.zipCode && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="firstName"
//                                 className="form-label mb-0"
//                             >
//                                 First name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="firstName"
//                                 {...register("firstName", { required: true })}
//                             />
//                             {errors.firstName && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-4">
//                             <label
//                                 htmlFor="lastName"
//                                 className="form-label mb-0"
//                             >
//                                 Last name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control input-border"
//                                 id="lastName"
//                                 {...register("lastName", { required: true })}
//                             />
//                             {errors.lastName && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                         <div className="col-md-4">
//                             <label htmlFor="email" className="form-label mb-0">
//                                 Email Address
//                             </label>
//                             <div className="input-group has-validation">
//                                 <input
//                                     type="text"
//                                     className="form-control input-border"
//                                     id="email"
//                                     aria-describedby="inputGroupPrepend"
//                                     {...register("email", { required: true })}
//                                 />
//                             </div>{" "}
//                             {errors.email && (
//                                 <span className="er">
//                                     This field is required
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <div className="col-md-4">
//                             <input
//                                 type="text"
//                                 className="form-control input-border mb-3"
//                                 placeholder="LinkedIn"
//                                 {...register("linkedIn")}
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <input
//                                 type="text"
//                                 placeholder="Facebook"
//                                 className="form-control input-border mb-3"
//                                 {...register("facebook")}
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <input
//                                 type="text"
//                                 placeholder="Other"
//                                 className="form-control input-border mb-3"
//                                 {...register("other")}
//                             />
//                         </div>
//                     </div>
//                     {/* Add remaining form fields here */}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default YourComponent;
