// ----fs is module in node for file---
let ab = require('fs')

// -------------asynchronous-----------
// ab.readFile('./index.txt',(err,data)=>{
//     if(err){
//         console.log('file not found')
//     }
//     else{
//         console.log(data)//op stored in buffer will be in binary
//         console.log(data.toString())
//     }
// })
// console.log('before reading')

// ------------synchronous--------------
// let data = ab.readFileSync('./index.txt');
// console.log(data.toString())
// console.log('before reading')

// -------deletes old data and adds new data-------
// ab.writeFile('./index.txt','update through program',(err)=>{
//         if(err){
//             console.log('write not success')
//         }
//         else{
//             console.log('write success')
//         }
//     })

// -------adds new data with old data--------
// ab.appendFile('./index.txt',"adding extra",(err)=>{
//         if(err){
//             console.log('write not success')
//         }
//         else{
//             console.log('write success')
//         }
//     })

// ------deleting file---------
// ab.unlink('./index1.txt',(err)=>{
//             if(err){
//                 console.log('delete not success')
//             }
//             else{
//                 console.log('delete success')
//             }
//         })

// ------create a new folder-----
// ab.mkdir('./test',(err)=>{
//                 if(err){
//                     console.log('folder not created')
//                 }
//                 else{
//                     console.log('folder created')
//                 }
//             })

// -------delete a empty folder---
// ab.rmdir('./test',(err)=>{
//                     if(err){
//                         console.log('delete not sucess')
//                     }
//                     else{
//                         console.log('delete sucess')
//                     }
//                 })

// ----reads the folders inside a folder
// ab.readdir('./test',(err,data)=>{
//     if(err){
//         console.log('read not sucess')
//     }
//     else{
//         console.log('read sucess')
//         console.log(data)
//         for(f of data){
//             ab.readdir('./test/'+f,(err,subdata)=>{
//                 if(err){
//                     console.log('read not sucess')
//                 }
//                 else{
//                     console.log(subdata)
//         }
//     })
//         }
//     }});