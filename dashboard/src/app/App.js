import AppRoutes from "./AppRoutes";
import { GeneralProvider } from "../context/GeneralContext";

const Apps = () => {
  return (
    <GeneralProvider>
      <AppRoutes />
    </GeneralProvider>
  );
};

export default Apps;
