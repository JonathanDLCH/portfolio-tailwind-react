import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import UnderConstruction from "@/assets/UnderConstruction.png"; // importa la imagen

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-center bg-no-repeat bg-cover pt-16"
      style={{ backgroundImage: `url(${UnderConstruction})` }}
    >
      <div className="p-5 rounded-lg text-center w-5/12">
        <h1 className="text-4xl font-bold mb-4 text-portfolio-blue">Estamos construyendo algo genial aquí</h1>
        <p className="text-xl text-white-600">Esta sección aún está en desarrollo, pero muy pronto podrás ver más sobre mi trabajo y cómo puedo ayudarte a hacer realidad tus ideas.</p>
        <a href="/" className="text-ehite-500 hover:text-portfolio-light font-semibold underline">
          Regresar a la pagína principal
        </a>
      </div>
    </div>
  );
};

export default NotFound;
