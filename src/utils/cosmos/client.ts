
import { CosmosClient } from "@azure/cosmos";
import { BlobServiceClient } from "@azure/storage-blob";
import { CosmosConfig, BlobStorageConfig } from "./config";

export const cosmosClient = new CosmosClient({
    endpoint: CosmosConfig.endpoint,
    key: CosmosConfig.key
})

export const blobServiceClient = BlobServiceClient.fromConnectionString(BlobStorageConfig.connectionString)