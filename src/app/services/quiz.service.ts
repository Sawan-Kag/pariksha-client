import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private _http: HttpClient) {}

  public quizzes() {
    return this._http.get(`${baseUrl.quezzUrl}`);
  }

  //add quiz
  public addQuiz(quiz: any) {
    return this._http.post(`${baseUrl.quezzUrl}`, quiz);
  }

  //delete quiz
  public deleteQuiz(qId: any) {
    return this._http.delete(`${baseUrl.quezzUrl}/${qId}`);
  }

  //get the single quiz

  public getQuiz(qId: any) {
    return this._http.get(`${baseUrl.quezzUrl}/${qId}`);
  }

  //update quiz
  public updateQuiz(quiz: any) {
    return this._http.put(`${baseUrl.quezzUrl}`, quiz);
  }

  //get quizzes of category
  public getQuizzesOfCategory(cid: any) {
    return this._http.get(`${baseUrl.quezzUrl}/category/${cid}`);
  }
  //qet active quizzes
  public getActiveQuizzes() {
    return this._http.get(`${baseUrl.quezzUrl}/active`);
  }

  //get active quizzes of category
  public getActiveQuizzesOfCategory(cid: any) {
    return this._http.get(`${baseUrl.quezzUrl}/category/active/${cid}`);
  }
}
