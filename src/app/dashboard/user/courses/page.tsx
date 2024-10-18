import CourseList from '@/components/student/course-list';
import { cosmosClient } from '@/utils/cosmos/client'

export default async function CourseDashboard() {
   
    const { database } = await cosmosClient.databases.createIfNotExists({
        id: "hackpwd_lms"
    })

    const { container } = await database.containers.createIfNotExists({
        id: "courses"
    })

    const { resources } = await container.items.query({
        query: "SELECT * FROM courses"
    }).fetchAll();  // Fetch data from Cosmos DB


    return (
        <div>
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Courses</h1>
                <CourseList courses={resources}/>
            </main>  
        </div>
    )
}