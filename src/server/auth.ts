import {
    getServerSession,
    type NextAuthOptions,
  } from "next-auth";
import { UserService } from "./services/UserService";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({token, account, profile}) {
        if(account && account.type === "credentials"){
          token.userId = account.providerAccountId
        }
        return token;
    },
    async session({session, token, user}){
      session.user.id = token.userId
      return session;
    }
  },
  pages: {
    signIn: "/auth/sign-in"
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          type: "text",
          placeholder: "username"
        },
        password: {
          label: "password",
          type: "passpord"
        }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
         username: string
         password: string
        };

       return UserService.authenticate(username, password); //(5) 
     }
    })
  ]
}

export const getServerAuthSession = () => getServerSession(authOptions);
  
