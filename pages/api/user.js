import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "POST") {
        return await addUser(req, res);
    } else if (req.method === "GET") {
        return await getUser(req, res);
    } else {
        return res
            .status(405)
            .json({ message: "Method not allowed", success: false });
    }
}

async function addUser(req, res) {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                error: "Please fill all required fields",
            });
        }

        // const salt = bcrypt.getSalt(10);
        const hashpass = await bcrypt.hash(password, 10);

        console.log(hashpass)

        const newEntry = await prisma.User.create({
            data: {
                name: name,
                email: email,
                password: hashpass,
            },
        });
        return res.status(200).json(newEntry, {
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

async function getUser(req, res) {
    const { email } = req.query;

    try {
        if (!email) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                error: "Please fill all required fields",
            });
        }

        const user = await prisma.User.findUnique({
            where: {
                email: email,
            },
        });

        res.status(200).json({ success: true, statusCode: 200, data: user });
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({
            error: "Error getting user",
            success: false,
            statusCode: 500,
        });
    }
}
