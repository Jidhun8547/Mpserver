const jsonServer=require('json-server')

const Mpserver=jsonServer.create()
const middileware=jsonServer.defaults()
// set route
const route=jsonServer.router('db.json')

const PORT=3000||process.env.PORT

Mpserver.use(middileware)
Mpserver.use(route)


// 
Mpserver.listen(PORT,()=>{
    console.log(`media player server running at ${PORT} and weaiting for server request`);
    
})