import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return (
    <div className="flex w-full duration-150 bg-background">
      <RouterProvider router={router} />
    </div>
  );
}
