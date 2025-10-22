const mongoose=require("mongoose");
const connectDB=async ()=>{
await mongoose.connect("mongodb+srv://Vamshi123:hKV15KtR09SwA2hv@cluster0.qkwvz.mongodb.net/devConnect2");

}
connectDB().then(()=>{
    console.log("Successfull");
}).catch((err)=>{
    console.log(err);
});
