import "./App.css";
import MatrixEagleLanding from "./components/MatrixEagleLanding.tsx";
import "./i18n"; 
function App() {
  return (
    <div className="bg-[url('/matrix_main_bg.svg')] bg-contain  bg-repeat-y   ">
     
      <div className="relative z-10 text-white flex items-center justify-center h-full">

      <MatrixEagleLanding />
      </div>
    </div>
  );
}

export default App;
