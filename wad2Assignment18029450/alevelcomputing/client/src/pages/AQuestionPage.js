import React, {useEffect, useState} from 'react'
import axios from 'axios';
import QuestionSection from '../components/QuestionSection'
import HintsSection from '../components/HintsSection'
import {useParams, useNavigate, Link} from 'react-router-dom';
import AnswerPage from '../pages/AnswerPage'
import AnswerSection from '../components/AnswerSection'


function AQuestionPage() {
    let navigate = useNavigate();
    const [title, setTitle] = useState(null)
    const [questionText, setQuestionText] = useState(null)
    const [answers, setAnswers] = useState(null)
    const {aqid} = useParams()

    useEffect(() => {
        if (aqid) {
            axios.post('http://localhost:4040/api/aquestions/aquestion', {"urltitle": aqid})
                .then(function (response) {
                    if (response?.data?.success) {
                        setTitle(response.data.question.fulltitle)
                        setQuestionText(response.data.question.qtext)
                        setAnswers(response.data.question.answers) // set the answers state here

                    }
                })
                .catch(function (error) {
                    navigate("/")
                });
        } else {
            navigate("/")
        }
    }, [])

    return (
        <div className="container">
            {title && <h1 className="text-center mt-3">{title}</h1>}
            <div className="row">
                <QuestionSection questionText={questionText}/>
            </div>
            <div className="row">
                {window.parent !== window ?
                    <AnswerPage answers={answers} qid={aqid}/> :
                    <Link to={`/answer/${aqid}`}>Answer question</Link>
                }
            </div>
        </div>
    );
}

export default AQuestionPage;