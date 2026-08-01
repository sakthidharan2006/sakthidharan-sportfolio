import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const stored = localStorage.getItem("theme");
const isDark = stored ? stored === "dark" : true;
document.documentElement.classList.toggle("dark", isDark);

createRoot(document.getElementById("root")!).render(<App />);
