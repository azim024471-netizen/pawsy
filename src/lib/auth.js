
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db('Pawsy');
export const auth = betterAuth({
 
     emailAndPassword: { 
    enabled: true, 
  }, 

  database: mongodbAdapter(db, {
    
    client
  }),
  
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },

       plugins: [
        jwt(), 
    ],

    session : {
      cookieCache :{
        enabled : true,
        strategy : 'jwt',
        maxAge : 7 * 24 * 60 * 60
      }
    }
  
});