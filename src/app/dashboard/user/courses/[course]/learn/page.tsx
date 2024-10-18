
import CourseSidebar from '@/components/student/course-sidebar'
import LearnCourseDashboard from '@/components/student/learn-course-dashboard'
import { blobServiceClient } from '@/utils/cosmos/client'
import { generateSasUrl } from '@/utils/functions/generate-sas-url'

interface IBlobItem {
  name: string,
  url: string
}
export default async function CourseTabs() {

  const fetchBlobs = async () => {
    const containerClient = blobServiceClient.getContainerClient("hackpwd");

    const blobs: IBlobItem[] = [];
    // List the blob(s) in the container.
    for await (const blob of containerClient.listBlobsFlat()) {
      // Get Blob Client from name, to get the URL
      const blockBlobClient = containerClient.getBlockBlobClient(blob.name);
      const sasUrl = await generateSasUrl(blockBlobClient);
      const blobItem = {
        name: blob.name,
        url: sasUrl
      }
      if (!blobs.includes(blobItem)){
        blobs.push(blobItem);
      }

    }

    return blobs
  }

  const blobs = await fetchBlobs();

  return (
    <div className="flex">
      <CourseSidebar />
      <LearnCourseDashboard courseResource={blobs} />
    </div>
  )
}
