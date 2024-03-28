// import React, { useState } from "react";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import "../App.css";

// // Import your category form components
// import YourComponent from "./form2";
// import Fill from "./Form";

// function App1() {
//     const [selectedCategory, setSelectedCategory] = useState("Category 1");

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//     };

//     // Define your components for each category
//     function Category1Form() {
//         return (
//             <div>
//                 <h2>Category 1 Form</h2>
//                 <YourComponent />
//             </div>
//         );
//     }

//     function Category2Form() {
//         return (
//             <div>
//                 <h2>Category 2 Form</h2>
//                 <Fill />
//             </div>
//         );
//     }

//     function Category3Form() {
//         return (
//             <div>
//                 <h2>Category 3 Form</h2>
//                 <YourComponent />
//             </div>
//         );
//     }

//     return (
//         <div>
//             <ProSidebar>
//                 <Menu iconShape="square">
//                     <MenuItem onClick={() => handleCategoryClick("Category 1")}>
//                         Category 1
//                     </MenuItem>
//                     <MenuItem onClick={() => handleCategoryClick("Category 2")}>
//                         Category 2
//                     </MenuItem>
//                     <MenuItem onClick={() => handleCategoryClick("Category 3")}>
//                         Category 3
//                     </MenuItem>
//                 </Menu>
//             </ProSidebar>
//             {/* Render the selected category component */}
//             <div className="category-form">
//                 {selectedCategory === "Category 1" && <Category1Form />}
//                 {selectedCategory === "Category 2" && <Category2Form />}
//                 {selectedCategory === "Category 3" && <Category3Form />}
//             </div>
//         </div>
//     );
// }

// export default App1;
