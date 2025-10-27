import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return (
    <div className="flex w-full duration-150 bg-background px-10">
      <RouterProvider router={router} />
    </div>
  );
}
