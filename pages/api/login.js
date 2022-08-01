import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "POST") {
        return await addUser(req, res);
    } else {
        return res
            .status(405)
            .json({ message: "Method not allowed", success: false });
    }
}

async function addUser(req, res) {
    const body = req.body;
    try {
        const newEntry = await prisma.User.create({
            data: {
                name: body.name,
                email: body.email,
            },
        });
        return res
            .status(200)
            .json(newEntry, {
                success: true,
                messaeg: "User created successfully",
                statusCode: 200,
            });
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({
            error: "Error creating user",
            success: false,
            statusCode: 500,
        });
    }
}