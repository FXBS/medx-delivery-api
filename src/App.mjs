import express from 'express';
import path from 'path';
import { config } from 'dotenv';

import { fileURLToPath } from 'url'; 

import { createServer } from "http";
import Server from "socket.io";
import { socketOrderDelivery } from './Sockets/SocketOrderDelivery.js';

import routeAuth from './Router/Auth.routes.js';
import routerUser from './Router/User.routes.js';
import routerProduct from './Router/Product.routes.js';
import routerCategory from './Router/Category.routes.js';
import routerOrder from './Router/Order.routes.js';
import routerPincode from './Router/Pincode.routes.js';


config();

// Get the directory name using 'fileURLToPath' function
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// CONFIG SOCKET 
const httpServer = createServer(app);
const io = new Server(httpServer);
socketOrderDelivery(io);


app.use( express.json() );
app.use( express.urlencoded({ extended: false }));

app.use('/api', routeAuth);
app.use('/api', routerUser);
app.use('/api', routerProduct);
app.use('/api', routerCategory);
app.use('/api', routerOrder);
app.use('/api', routerPincode);

app.use( express.static( path.join( __dirname, 'Uploads/Profile' )));
app.use( express.static( path.join( __dirname, 'Uploads/Products' )));

// app.use( express.static( "./dist"));
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"dist","index.js"))
// })


export default httpServer;