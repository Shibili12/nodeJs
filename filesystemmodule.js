var fs=require('fs')

//Read file
fs.readFile('./test.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

//Create file
//method 1:- (using this if already file exist overwrite it else create new file)
fs.writeFile(
    'new.txt',
    'This is new file created by nodejs',
    (err)=>{
        if(err){
            console.log(err)
        }
        console.log("file created")
    }
)

//method 2:-(using this if already file exist update content with add else create new file)
// fs.appendFile(
//     'appendfile.txt',
//     'This is new append file created by nodejs',
//     (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("file created")
//     }
// )

// Rename file
// fs.rename('test.txt', 'renamedFile.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   });

// Delete file
fs.unlink('new.txt', (err) => {
    if (err) throw err;
    console.log('new.txt was deleted');
  });