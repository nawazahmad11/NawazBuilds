// // src/pages/Index.tsx

// const Index = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
//       {/* 1. Vignette Overlay (Sahi Jagah) */}
//       <div className="vignette-overlay" />

//       {/* 2. Content */}
//       <div className="text-center z-10 relative">
//         <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
//         <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
//       </div>
//     </div>
//   );
// };

// export default Index;



// src/pages/Index.tsx
import FunnelStep1 from "./FunnelStep1"; // Apne funnel component ko import karein

const Index = () => {
  return (
    <main>
      <FunnelStep1 /> 
    </main>
  );
};

export default Index;