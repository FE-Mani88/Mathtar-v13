import React from 'react'
import connectToDB from '../../../../configs/connectToDB'
import quizModel from '../../../../models/Quiz'
import { redirect } from 'next/navigation'
import { DIFFICULTY_COLORS } from '@/utils/constants'
import { Clock, BookOpen, GraduationCap, BarChart, List } from 'lucide-react'
import Navbar from '@/components/modules/Navbar/Navbar'
import Link from 'next/link'
import { ActiveQuiz } from '@/components/modules/ActiveQuiz/ActiveQuiz'
import StartQuizButton from '@/components/modules/StartQuizButton/StartQuizButton'
import AllTemplate from '@/components/templates/Quiz/AllTemplate/AllTemplate'

export default async function page({ params }) {

    const isQuizStarted = null

    await connectToDB()

    console.log(await params.QuizName)

    // Pure data
    const mainQuizMongo = await quizModel.findOne({ id: await params.QuizName })

    const mainQuiz = JSON.parse(JSON.stringify(mainQuizMongo))

    if (!mainQuiz) {
        redirect('/select')
    }

    function getRandomQuestions(questions, num) {
        const shuffled = questions.sort(() => 0.5 - Math.random())

        return shuffled.slice(0, num)
    }

    const randomQuestions = getRandomQuestions(mainQuiz.questions, 5)

    // console.log(randomQuestions)

    /////Active Quiz
    // if (isQuizStarted) {
    //     return <ActiveQuiz quiz={foundQuiz} />;
    // }

    return (
        <>
            <Navbar isUserRegistered={true} />
            <AllTemplate {...mainQuiz} questions={randomQuestions} />
        </>
    )
}
