const f=require('fs');
//create a file
// f.writeFile('example.txt',"This is an example",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File successfully created!');
//         f.readFile('example.txt','utf-8',(err,file)=>{   //if encodin type is missing, a buffer stream will be the output
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         });
//     }
// });

// f.rename('example.txt','example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File successfully Renamed!');
//     }
// });

// f.appendFile('example2.txt','\n\nThird time\'s the charm',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('File Successfully appended!');
// });

f.unlink('example.txt',(err)=>{
    if(err)
        console.log(err);
    else    
        console.log("File Successfully deleted!");
});