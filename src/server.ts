import dotenv from 'dotenv';
dotenv.config();

import app from "./app";
const PORT = process.env.PORT || 3000; // Use the PORT from environment variables or default to 3000 as a fallback.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});