import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';
import { QuizService } from '../../../services/quiz.service';

@Component({
  standalone: true,
  imports: [
    MatSlideToggleModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
  ],
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories: { title: string; cid: string }[] = [];

  quizData: {
    title: string;
    description: string;
    maxMarks: string;
    numberOfQuestions: string;
    active: boolean;
    category: {
      cid: string;
    };
  } = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: false,
    category: {
      cid: '',
    },
  };

  constructor(
    private _cat: CategoryService,
    private _snack: MatSnackBar,
    private _quiz: QuizService
  ) {
    this.quizData.active = true;
  }

  ngOnInit(): void {
    this._cat.categories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
      error: (err: any) => {
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      },
    });
  }
  //
  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }

    this._quiz.addQuiz(this.quizData).subscribe({
      next: (data: any) => {
        Swal.fire('Success', 'quiz is added', 'success');
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: {
            cid: '',
          },
        };
      },
      error: (err: any) => {
        Swal.fire('Error!! ', 'Error while adding quiz', 'error');
      },
    });
  }
}
