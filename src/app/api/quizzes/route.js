import connectToDB from "../../../../configs/connectToDB";
import quizModel from "../../../../models/Quiz";
import questionModel from "../../../../models/Questions";

export async function GET(req) {
    await connectToDB()

    const quizzesData = await quizModel.find({})

    return Response.json(quizzesData)
}