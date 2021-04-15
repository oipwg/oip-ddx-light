# oip-ddx-light
platform to publish oip types

## Adding enviornment variables
Navigate to the **/backend** directory in the root of the project. Add a new file in **/backend** called **.env**.

Inside the **.env** file you just created, copy and paste the code below:

```bash
MONGO_URL=<YOUR MONGO URL HERE>
NODE_ENV=development
JWT_SECRET=<YOUR JWT SECRET HERE>
```

Make sure to replace text contained between < > with your URL/keys

## Creating a free MongoDB atlas cluster and connecting oip-ddx-light
If you need to a database in which to store information about the application and its users, consider signing up for MongoDB Atlas.
Navigate to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account.

Once you have created your account:
1. Find the **Clusters** tab on the left hand side of the screen:
![Figure 1](/README_images/MongoExample1.png)

2. Within your newly created cluster, click on **CONNECT**
3. Of the options provided, click on **Connect your application**
![Figure 2](/README_images/MongoExample2.png)

4. Copy and paste the provided URL into your **.env** file, within the **MONGO_URL** variable (make sure to edit your password and name to the corresponding values)
![Figure 3](/README_images/MongoExample3.png)

5. Make sure to save your files!
