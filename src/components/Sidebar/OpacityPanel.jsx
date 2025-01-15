// import { useState } from "react";

// function OpacitySidebar() {
//   const [opacity, setOpacity] = useState(1);

//   const handleOpacityChange = (values) => {
//     setOpacity(values[0]);
//   };

//   return (
//     <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg">
//       <div className="mb-4 text-right">
//         <h2 className="text-lg font-semibold text-gray-900">الشفافية</h2>
//         <p className="text-sm text-gray-500">تغيير شفافية الصورة</p>
//       </div>

//       <div className="mt-6">
//         <Slider
//           value={[opacity]}
//           onValueChange={handleOpacityChange}
//           max={1}
//           min={0}
//           step={0.01}
//           className="w-full"
//         />
//       </div>

//       {/* <style jsx global>{`
//         .opacity-sidebar {
//           direction: rtl;
//         }
//       `}</style> */}
//     </div>
//   );
// }

// export default OpacitySidebar;
