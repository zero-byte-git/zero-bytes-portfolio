// // src/components/LenisProvider.tsx
// "use client";

// import { FC, ReactNode, useRef } from "react";
// // import { ReactLenis } from "@studio-freight/react-lenis";

// interface LenisProviderProps {
//   children: ReactNode;
// }

// const LenisProvider: FC<LenisProviderProps> = ({ children }) => {
//   const lenisRef = useRef(null);

//   return (
//     <ReactLenis
//       ref={lenisRef}
//       root
//       options={{
//         lerp: 0.1, // Smoothness factor (0 to 1, lower is smoother)
//         duration: 1.5, // Scroll animation duration in seconds
//         smoothWheel: true, // Enable smooth scrolling for mouse wheel
//         smoothTouch: true, // Enable smooth scrolling for touch devices
//       }}
//     >
//       {children}
//     </ReactLenis>
//   );
// };

// export default LenisProvider;