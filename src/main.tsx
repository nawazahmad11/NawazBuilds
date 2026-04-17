import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./critical-shell.css";

async function bootstrap() {
  if (import.meta.env.DEV) {
    await import("./index.css");
  }

  createRoot(document.getElementById("root")!).render(<App />);

  if (import.meta.env.PROD) {
    void import("./index.css");
  }
}

void bootstrap();
