
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([{
    message:"Type your URL here: ",
    name:"URL",
}])
.then((answers)=>{
    const url=answers.URL;
    var qr_img=qr.image(url);
    qr_img.pipe(fs.createWriteStream("qr_image_sriram.png"));
    fs.writeFile("sriram_url.txt",url,(err)=>{
        if(err) throw err;
        console.log(`your url has been saved succesfully...`);
    })
})
.catch((error)=>{
    if(error.isTtyError){
    }
    else{
    }
});

