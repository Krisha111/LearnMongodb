//There are two types of databases:-----SQL (Structured Query Language) and NoSQL (Not Only Structured Query Language
//--------second one --means other languages)

//difference between them are 
//  ----MySQL---most popular in SQL database           ------MongoDB---most popular in NoSQL database

//1.  More Mature--bcoz it is used from very long time        Shiny and new

//2.  Table Struture---data is stored in table                Document Structure----each row of SQL table is stored in the form of javascript object(JSON format)

//3.  Requires Schema---it is mendatory to know               More Flexible to Changes---can be changed once initially it is made
// from the starting of the project that how the final
// database will look like bcoz this db would not allow
//changes  

//4. Great with relationships----we can make join or          Not great with complex relationships
//connections between the rows of different table

//5. scales vertically---so with more data it will not work   Horizontally scalable
//as for example if building grows vertically it will fall

//------all this commands should be in mongosh or mongo shell-------

//-----------help-----to ask for help and it will show some frequently used commands

//--------show dbs--------- to see all the existing dbs 
// admin      180.00 KiB
// config      60.00 KiB
// krisha      96.00 KiB
// krishaa     12.00 KiB
// local       72.00 KiB
// merncrudd   72.00 KiB

//--------use mongodblearn(name_database)--------to make a new database
// output--------switched to db mongodblearn--------

//---------------db---------to see the current db in which we are in
//o/p----mongodblearn---(dbname will be o/p)-------

//------- db.products.insertOne({_id:1,name:"pencil",price:"20"})------to insert one item in db and by this
//command if collection is not made in db this command will automatically make a collection here ex products
//o/p-----{ acknowledged: true, insertedId: 1 }----------

//--------- show collections-------to see all collections of the db u are in
//-o/p---------products---------

//now all the above code was to insert

//now the code will be of read the document

//-----------db.products.find()---------to see all the docs in the products collections
//o/p------
// [
//     { _id: 1, name: 'pencil', price: '20' },
//     { _id: 2, name: 'pen', price: '32' }
//   ]


//---------to filter out the required obj we want-----------
//-------examples
// mongodblearn> db.products.find({_id:1})
// [ { _id: 1, name: 'pencil', price: '20' } ]
// mongodblearn> db.products.find({name:"pen"})
// [ { _id: 2, name: 'pen', price: '32' } ]
// mongodblearn> db.products.find({price:"20"})
// [ { _id: 1, name: 'pencil', price: '20' } ]

//---------db.products.find({price:{$gt:"25"}})--------use this to filter using the operatores
//o/p--------------[ { _id: 2, name: 'pen', price: '32' } ]

//--------more ex---------
// db.products.find({name:{$eq:"pencil"}})
// [ { _id: 1, name: 'pencil', price: '20' } ]

//------to get some of the data from a perticular obj of docs----------
//----------here 0 means false so that data will not be shown
//-----------1 means true so that data will be shown------
//-------id will definetly be shown bydefault---------
//-------here in first courly brc the one to find is written and in second brc we can
//----write if we want that in o/p or not


// mongodblearn> db.products.find({price:"20"},{_id:1})
// [ { _id: 1 } ]
// mongodblearn> db.products.find({price:"20"},{name:1})
// [ { _id: 1, name: 'pencil' } ]
// mongodblearn> db.products.find({price:"20"},{name:0})
// [ { _id: 1, price: '20' } ]

//---------TO UPDATE THE DATA-----------

// ---------db.products.updateOne({_id:1},{$set:{stock:"132"}})--------in first curly brc which doc to update
//------in 2nd brac what to write

//--------o/p-----
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

//-------mongodblearn> db.products.updateOne({_id:2},{$set:{near:"big bazar"}})-----
//-----do not forget to wite the set operator otherwise it will give error


//-o/p----
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }