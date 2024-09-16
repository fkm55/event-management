import { join } from "path/posix";
import { app } from "./app";

// Middleware to serve static files
app.use(join(__dirname, 'public'));
