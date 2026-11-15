const config = {
  apiBaseUrl: process.env.AGENT_API_URL || "http://localhost:5000/api",
  frontendUrl: process.env.AGENT_FRONTEND_URL || "http://localhost:3001",
};
export default config;