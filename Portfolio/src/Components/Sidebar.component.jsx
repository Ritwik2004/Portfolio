// import React from "react";
// import { Mail, Phone, Calendar, MapPin } from "lucide-react";
// import { assets } from "../assets/assets";

// const Sidebar = () => {
//   return (
//     <div className="w-full px-6 md:px-8 text-gray-300 space-y-6">
//       {/* Avatar Section */}
//       <div className="flex flex-col items-center text-center">
//         <div className="w-28 md:w-36 aspect-square rounded-full overflow-hidden bg-[#2b2b2d] border border-[#383838] cursor-pointer">
//           <img
//             src={assets.My_Avatar} // replace with your avatar path
//             alt="Ritwik"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <h2 className="text-xl font-bold text-white mt-4">Ritwik Kundu</h2>
//         <span className="mt-2 text-sm px-3 py-1 bg-[#2b2b2d] rounded-md text-gray-400 cursor-pointer">
//           Web Developer
//         </span>
//       </div>

//       <hr className="border-[#383838]" />

//       {/* Contact Info */}
//       <div className="space-y-6 text-sm">
//         <div className="flex items-start gap-3">
//           <Mail className="text-yellow-400 mt-1" size={18} />
//           <div>
//             <p className="text-gray-400 text-xs">EMAIL</p>
//             <p className="text-white break-all">ritwikkundu09@gmail.com</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-3">
//           <Phone className="text-yellow-400 mt-1" size={18} />
//           <div>
//             <p className="text-gray-400 text-xs">PHONE</p>
//             <p className="text-white">+91 98833 98028</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-3">
//           <Calendar className="text-yellow-400 mt-1" size={18} />
//           <div>
//             <p className="text-gray-400 text-xs">BIRTHDAY</p>
//             <p className="text-white">July 9, 2004</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-3">
//           <MapPin className="text-yellow-400 mt-1" size={18} />
//           <div>
//             <p className="text-gray-400 text-xs">LOCATION</p>
//             <p className="text-white">Hooghly, West Bengal, 712616</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// --------------------------------------------------------------------------------------


import React from "react";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import { My_Avatar } from "../assets/assets.js";

const bio = [
          {
            icon: <Mail className="text-yellow-400 mt-1" size={18} />,
            label: "EMAIL",
            value: "ritwikkundu09@gmail.com",
          },
          {
            icon: <Phone className="text-yellow-400 mt-1" size={18} />,
            label: "PHONE",
            value: "+91 98833 98028",
          },
          {
            icon: <Calendar className="text-yellow-400 mt-1" size={18} />,
            label: "BIRTHDAY",
            value: "July 9, 2004",
          },
          {
            icon: <MapPin className="text-yellow-400 mt-1" size={18} />,
            label: "LOCATION",
            value: "Hooghly, West Bengal, 712616",
          },
        ]

const Sidebar = () => {
  return (
    <div className="w-full px-4 md:px-6 md:py-4 text-gray-300 space-y-6">
      {/* Avatar */}
      <div className="flex flex-col items-center text-center">
        <div className="w-32 md:w-36 aspect-square rounded-full overflow-hidden bg-[#2b2b2d] border border-[#383838]">
          <img
            src={My_Avatar}
            alt="Ritwik"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-white mt-4 md:mt-5">Ritwik Kundu</h2>
        <span className="mt-2 md:mt-3 text-sm px-3 py-1 bg-[#2b2b2d] rounded-md text-gray-400">
          Web Developer
        </span>
      </div>

      <hr className="border-[#383838]" />

      {/* Contact */}
      <div className="space-y-6 text-sm">
        {bio.map(({ icon, label, value }) => (
          <div className="flex items-start gap-3" key={label}>
            {icon}
            <div>
              <p className="text-gray-400 text-xs">{label}</p>
              <p className="text-white break-words">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
