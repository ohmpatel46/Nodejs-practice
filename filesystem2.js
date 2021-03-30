const fs=require('fs');
// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Folder created Successfully!');
// });

// fs.rmdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File successfully removed!');
//     }
// });

// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.writeFile('./tutorial/example.txt','Some data here',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('File successfully created in tutorial folder!');
//             }
//         });
//     }
// });

// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         fs.rmdir('tutorial',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Folder successfully deleted!');
//             }
//         });
//     }
// });

fs.readdir('example',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        for(let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('File named '+file+' deleted!');
                }
            });
        }
    }
});