//----------db.products.deleteOne({_id:2})-------to delete an obj based on id,name or price or any other key and value
// o/p--------------{ acknowledged: true, deletedCount: 1 }

//--find method to check if the boj is deleted
// mongodblearn> db.products.find()
// [ { _id: 1, name: 'pencil', price: '20', stock: '132' } ]-----------id:2 is deleted

//-----------------this is relational db code---------one to many where one product and many reviews------

// db.products.insert({id:1,product:"sliders",price:759,reviews:[{AuthorName:"Bella",ratings:5,review:"Really nice product."},{AuthorName:"Vish",ratings:4.5,review:"Good quality product."}]})
//-----the above code is to make one to many like in instagram one user can make many post--------

// DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
//----the above line in o/p says that the insert method is replaced by insertOne and insertMany but we are still
//getting the o/p

//--------o/p----
// {
//   acknowledged: true,
//   insertedIds: { '0': ObjectId("64ce0e6032aa2da7f6ea0b11") }
// }

// db.products.insert(
//     {
//         id:1,
//         product:"Sliders",
//         price:759,
//         reviews:[{
//             AuthorName:"Bella",
//             rating:5,
//             review:"Really nice product."
//         },
//         {
//             AuthorName:"Vish",
//             rating:4.5,
//             review:"Good quailty product"
//         }
//     ]
//     }
// )