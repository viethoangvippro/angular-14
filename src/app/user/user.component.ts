import { Component } from '@angular/core';
import axios from 'axios';
import { Action, createAction, createReducer, on, props } from '@ngrx/store';

import { User } from './user';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UserService } from './user.service';
import { Injectable } from '@angular/core';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

}


