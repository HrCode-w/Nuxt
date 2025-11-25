export default defineEventHandler(async (event) => {
  const method = getMethod(event);
  const query = getQuery(event);
  
  return {
    message: 'Hello from custom route!',
    method,
    query,
    timestamp: new Date().toISOString()
  };
});