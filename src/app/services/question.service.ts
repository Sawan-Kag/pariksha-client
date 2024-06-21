import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private _http: HttpClient) {}

  public getQuestionsOfQuiz(qid: any) {
    return this._http.get(`${baseUrl.base}/api/user/question/quiz/all/${qid}`);
  }

  public getQuestionsOfQuizForTest(qid: any) {
    return this._http.get(`${baseUrl.base}/api/user/question/quiz/all/${qid}`);
  }

  //add question
  public addQuestion(question: any) {
    // console.log(question);
    return this._http.post(`${baseUrl.base}/api/user/question`, question);
  }
  //delete question
  public deleteQuestion(questionId: any) {
    return this._http.delete(`${baseUrl.base}/api/user/question/${questionId}`);
  }

  //eval quiz
  public evalQuiz(questions: any) {
    return this._http.post(
      `${baseUrl.base}/api/user/question/eval-quiz`,
      questions
    );
  }
}
