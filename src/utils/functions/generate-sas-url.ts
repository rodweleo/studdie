import { BlobServiceClient, StorageSharedKeyCredential, BlobSASPermissions, BlockBlobClient, generateBlobSASQueryParameters, BlobGenerateSasUrlOptions, SASProtocol } from "@azure/storage-blob";
import { BlobStorageConfig } from "../cosmos/config";
export const generateSasUrl = async (blockBlobClient: BlockBlobClient) => {

    // const sharedKeyCredential = new StorageSharedKeyCredential(BlobStorageConfig.accountName, BlobStorageConfig.accountKey);
    // const blobServiceClient = new BlobServiceClient(`https://${BlobStorageConfig.accountName}.blob.core.windows.net`, sharedKeyCredential);
    // const containerClient = blobServiceClient.getContainerClient("hackpwd");
    // const blobClient = containerClient.getBlobClient(blockBlobClient.name);
    // return blobClient.generateSasUrl({
    //     permissions: new BlobSASPermissions({ read: true }),
    //     expiresOn: new Date(Date.now() + 86400 * 1000),
    // })

    // Set permissions and expiry for the SAS token
    // const sasToken = generateBlobSASQueryParameters({
    //     containerName: "hackpwd",
    //     blobName: blockBlobClient.name,
    //     permissions: BlobSASPermissions.parse("r"), // Read permissions
    //     expiresOn: new Date(new Date().valueOf() + 3600 * 1000) // Expires in 1 hour
    // });

    // // Return the full URL with the SAS token
    // return `${blockBlobClient.url}?${sasToken}`;

    const expiration = 3 * 60 * 1000;
    const dateNow = new Date();
    const startsOn = new Date(dateNow.valueOf() - expiration);
    const expiresOn = new Date(dateNow.valueOf() + expiration);

    const sasOptions: BlobGenerateSasUrlOptions = {
        permissions: BlobSASPermissions.parse("racwd"),
        protocol: SASProtocol.HttpsAndHttp,
        startsOn: startsOn,
        expiresOn: expiresOn,
    }

    //get url public
    const publicUrl = await blockBlobClient.generateSasUrl(sasOptions);
    return publicUrl;
};