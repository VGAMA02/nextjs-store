import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate";
import {cookies} from "next/headers";

export const createAccessToken = async (email: string,password:string) => {
    const cookiesStore = cookies();
    const GraphQLClient = GraphQLClientSingleton.getInstance().getClient();
    const {customerAccessTokenCreate} = await GraphQLClient.request(customerAccessTokenCreateMutation,{
        "email":email,
        "password":password
    });

    const  {accessToken, expiresAt} = customerAccessTokenCreate?.customerAccessToken;

    if(accessToken){

       
        (await cookiesStore).set("accessToken",accessToken,{
            path: "/",
            expires: new Date(expiresAt),
            httpOnly: true,
            sameSite: "strict"
        })

    }
}

