import * as blogServices from "../services/blogServices.js";



export const handleGetAllBlogs = async (req, res) => {
    try {


        const users = await blogServices.gettAllBlogs();

    } catch (error) {

        throw error

    }

}