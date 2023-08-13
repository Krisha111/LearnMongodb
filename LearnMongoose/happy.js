//Mongoose is odm of mongodb(Object Data Modeling ---ODM)
//we can also connect nodejs  to mongodb through the mongodb drivers but the code will become complex 
//so use mongoose 

import mongoose from "mongoose"

//CONNECTION STRING TO CONNECT NODEJS AND MONGODB AND checking if it is successful or not
mongoose.connect("mongodb://127.0.0.1:27017/angela")
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log("Not connected",err)
})

//-----------BUILDING SCHEMA THIS IS THE BLUEPRINT FOR HOW OUR DATABASE WILL LOOK LIKE-----------

const FruitSchema= new mongoose.Schema({
    name:String,
    // ratings:Number,-----------for normal type without validation
    //below ratings for validation of ratings which will include 1 and 10 also
    ratings:{
        type:Number,
        min:1,
        max:10
    },
    // reviews:String,-----------for normal type without validation
    //below code of reviews after validation
    reviews:{
        type:String,
        required:[true,"Why no reviews"]
        
    }
})

//-----------MODEL FOR THE SCHEMA--- THE FIRST PARAMETER IN BRACKETS WILL BE THE NAME OF THE COLLECTION

//HERE YOU SHOULD ALWAYS WRITE CONST NAME(VARIABLE NAME) AND FIRST PARAMETER NAME SAME OTHER WISE IT WILL NOT
//WORK PROPERLY

const Fruit= mongoose.model("Fruit",FruitSchema)

const fruitt= new Fruit({
    name:"Apple",
    ratings:7,
    reviews:"More like solid"
})

//fruitt.save()---------//to save the fruitt in database

const mango=new Fruit({
    name:"Mango",
    ratings:9,
    reviews:"Best fruit"
})

const cherry=new Fruit({
    name:"Cherry",
    ratings:9,
    reviews:"Very nice"
})
const leechi=new Fruit({
    name:"Leechi",
    ratings:8,
    reviews:"Decent fruit"
})

//----------after validation is applied to ratings of min and max this code will give error 
//bcoz here we are giving ratings of 100

// const krisha=new Fruit({
//     name:"Krisha",
//     ratings:100,
//     reviews:"Nice"
// })
// krisha.save()

//the below code for pineapple is for checking validation of reviwes-required -true
//no  error will come but this record without reviews will not be inserted as reviews is made required in schema
// const pineapple=new Fruit({
//     name:"Pineapple",
//     ratings:4
// })
// pineapple.save()

//insertmany to save many/all/fruits which u want to insert in database 

// Fruit.insertMany([mango,cherry,leechi]),function(){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Successful")
//     }
// }

//U can create new scheme same as above in same database while the upper one still exist---the same code as used above


const productSchema=new mongoose.Schema({
    quality:String,
    price:Number,
    //the below line is to make relationship between two different collections
    favfruit:FruitSchema
})
const Product=mongoose.model("Product",productSchema)

const handbag=new Product({
    quality:"Decent",
    price:2000,
    favfruit:mango//-------now this mango comes from fruitsSchema
})

handbag.save()

// const Sliders=new Product({
//     quality:"Good",
//     price:759
// })

// Sliders.save().then((saved)=>{
//     console.log("Success angela",saved)
// })
// .catch((err)=>{
//     console.log(err)
// })

//--------------------Reading from your database----------------------

// Fruit.find()
// .then((fruits)=>{
//     fruits.forEach(function(fruit){//--------to just get the name
//         console.log(fruit.name)
//     })
//     //console.log(fruits)----------to get all the info of fruits
// })
// .catch((err)=>{
//     console.log(err)
// })
 
//-----------------UPDATING THE RECORDS IN DATABASE------------------

// Fruit.updateOne({_id:"64cf8ff8197cb654183e5ce6"},{name:"Watermelon"})
// .then(()=>console.log("Updated"))
// .catch((err)=>console.log(err))

//----------------DELETING THE RECORDS IN DATABASE-------------

// Fruit.deleteOne({name:"Pineapple"})
// .then(()=>console.log("Deleted"))
// .catch((err)=>console.log(err))

//deleteMany method to delete more than one record at a time from a perticular collection


