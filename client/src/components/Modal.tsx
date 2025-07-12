// import { useEffect, useState } from "react";
// import { useTodoManagement } from "../hooks/useTodoManagement";
// import { TodoInfo } from "../types/todo";

// interface ModalProps {
//   onClose: () => {};
//   id: string | number;
// }

// const Modal = ({ onClose, id }: ModalProps) => {
//   const [formData, setFormData] = useState<TodoInfo[]>([]);
//   const { handleUpdate, handleFetchTodo } = useTodoManagement();

//   // useParams;
//   useEffect(() => {
//     handleFetchTodo(id);
//   }, [id]);

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     await handleUpdate(id, formData);
//   };

//   return (
//     <div className="">
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//         <div className="bg-neutral-700 rounded-lg p-6 mx-5">
//           <form onSubmit={handleSubmit} className="flex flex-col">
//             <h2 className="text-center text-orange-500 font-bold">
//               Update Todo
//             </h2>
//             <label htmlFor="title" className="">
//               Title
//               <input
//                 value={formData?.title}
//                 type="text"
//                 id="title"
//                 name="title"
//                 className="outline-none bg-neutral-600 p-3 m-2 rounded ml-9"
//                 onChange={handleChange}
//               />
//             </label>
//             <label htmlFor="content">
//               Content
//               <input
//                 value={formData?.content}
//                 type="text"
//                 name="info"
//                 id="content"
//                 className="outline-none bg-neutral-600 p-3 m-2 rounded"
//                 onChange={handleChange}
//               />
//             </label>
//             <div className="flex justify-between mt-3">
//               <button type="submit" className="btn btn-success">
//                 Update
//               </button>
//               <button onClick={onClose} className="btn btn-error">
//                 Close
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
