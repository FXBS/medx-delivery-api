import http from './App.js';


http.listen( process.env.APP_PORT, () => console.log('Server on port ' + process.env.APP_PORT));


// const server = http.listen(process.env.APP_PORT, () => {
//     const address = server.address();
//     const host = address.address === '::' ? 'localhost' : address.address;
//     const port = address.port;
  
//     console.log(`Server is running at http://${host}:${port}`);
//   });