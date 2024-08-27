// "use client";
// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactPage = () => {
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const text = "Say Hello";

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setError(false);
//     setSuccess(false);

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_SERVICE_ID,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID,
//         form.current,
//         process.env.NEXT_PUBLIC_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setSuccess(true);
//           form.current.reset();
//         },
//         () => {
//           setError(true);
//         }
//       );
//   };

//   return (
//     <motion.div
//       className="h-full"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
//         {/* TEXT CONTAINER */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
//           <div>
//             {text.split("").map((letter, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 0 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   delay: index * 0.1,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             😊
//           </div>
//         </div>
//         {/* FORM CONTAINER */}
//         <form
//           onSubmit={sendEmail}
//           ref={form}
//           className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
//         >
//           <span>Dear Tharun Vikas,</span>
//           <textarea
//             rows={6}
//             className="bg-transparent border-b-2 border-b-black outline-none resize-none"
//             name="user_message"
//           />
//           <span>My mail address is:</span>
//           <input
//             name="user_email"
//             type="text"
//             className="bg-transparent border-b-2 border-b-black outline-none"
//           />
//           <span>Regards</span>
//           <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
//             Send
//           </button>
//           {success && (
//             <span className="text-green-600 font-semibold">
//               Your message has been sent successfully!
//             </span>
//           )}
//           {error && (
//             <span className="text-red-600 font-semibold">
//               Something went wrong!
//             </span>
//           )}
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default ContactPage;


"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-12 md:p-16 lg:p-24"
        >
          <div className="flex flex-col gap-2">
            <span>Dear Tharun Vikas,</span>
            <textarea
              rows={6}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none p-2"
              name="user_message"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>My mail address is:</span>
            <input
              name="user_email"
              type="email"
              className="bg-transparent border-b-2 border-b-black outline-none p-2"
            />
          </div>
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 mt-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold mt-4">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold mt-4">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
