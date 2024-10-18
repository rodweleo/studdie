"use server"

import { cosmosClient } from '@/utils/cosmos/client'

export const fetchAllCourses = async () => {
    const { database } = await cosmosClient.databases.createIfNotExists({
        id: "hackpwd_lms"
    })

    const { container } = await database.containers.createIfNotExists({
        id: "courses"
    })

    const { resources } = await container.items.query({
        query: "SELECT * FROM courses"
    }).fetchAll();

    return resources
}