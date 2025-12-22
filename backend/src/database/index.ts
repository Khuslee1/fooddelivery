import {connect} from "mongoose"

export const connectToDatabase = async () => {
    await connect('mongodb+srv://admins:qrk8YwdPlXvufjjP@cluster0.f3ckqou.mongodb.net/?appName=Cluster0')
}