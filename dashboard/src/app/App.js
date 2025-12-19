import AppRoutes from "./AppRoutes";
import { GeneralContextProvider } from "../context/GeneralContext";

const Apps = () => {
  return (
    <GeneralContextProvider>
      <AppRoutes />
    </GeneralContextProvider>
  );
};

export default Apps;
