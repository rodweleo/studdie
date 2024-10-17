import { CosmosClient } from "@azure/cosmos";

export const cosmosClient = new CosmosClient({
    endpoint: "https://hackpwd.documents.azure.com",
    key: "ro7rSSyK922pPUhdSkbY5Pnms7Q1vP1hdhhsU9XEmYZItjlsXBljac4ELGMDUwbxhSahcebEhV6aACDbOKJmew=="
})