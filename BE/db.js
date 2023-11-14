const { MongoClient } = require("mongodb");

const db = {};

const connectToDb = () => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  client.connect((error) => {
    if (error) {
      console.error("Failed to connect to the database:", error);
      return;
    }
    
    const database = client.db("FinalExam");
    
    // Create 'inventories' collection
    database.createCollection("inventories", (err, inventoriesCollection) => {
      if (err) {
        console.error("Failed to create 'inventories' collection:", err);
        return;
      }
      console.log("'inventories' collection is ready");
      db.inventories = inventoriesCollection;

      // Insert data into 'inventories' collection
      const inventoryData = [
        { "_id": 1, "sku": "almonds", "description": "product 1", "instock": 120 },
        { "_id": 2, "sku": "bread", "description": "product 2", "instock": 80 },
        { "_id": 3, "sku": "cashews", "description": "product 3", "instock": 60 },
        { "_id": 4, "sku": "pecans", "description": "product 4", "instock": 70 },
      ];
      inventoriesCollection.insertMany(inventoryData, (insertError, insertResult) => {
        if (insertError) {
          console.error("Failed to insert data into 'inventories' collection:", insertError);
          return;
        }
        console.log("Data inserted into 'inventories' collection");
      });
    });

    // Create 'orders' collection
    database.createCollection("orders", (err, ordersCollection) => {
      if (err) {
        console.error("Failed to create 'orders' collection:", err);
        return;
      }
      console.log("'orders' collection is ready");
      db.orders = ordersCollection;

      // Insert data into 'orders' collection
      const ordersData = [
        { "_id": 1, "item": "almonds", "price": 12, "quantity": 2 },
        { "_id": 2, "item": "pecans", "price": 20, "quantity": 1 },
        { "_id": 3, "item": "pecans", "price": 20, "quantity": 3 },
      ];
      ordersCollection.insertMany(ordersData, (insertError, insertResult) => {
        if (insertError) {
          console.error("Failed to insert data into 'orders' collection:", insertError);
          return;
        }
        console.log("Data inserted into 'orders' collection");
      });
    });

    // Create 'users' collection
    database.createCollection("users", (err, usersCollection) => {
      if (err) {
        console.error("Failed to create 'users' collection:", err);
        return;
      }
      console.log("'users' collection is ready");
      db.users = usersCollection;

      // Insert data into 'users' collection
      const usersData = [
        { "username": "admin", "password": "MindX@2022" },
        { "username": "alice", "password": "MindX@2022" }
      ];
      usersCollection.insertMany(usersData, (insertError, insertResult) => {
        if (insertError) {
          console.error("Failed to insert data into 'users' collection:", insertError);
          return;
        }
        console.log("Data inserted into 'users' collection");
      });
    });
  });
};

module.exports = { connectToDb, db };