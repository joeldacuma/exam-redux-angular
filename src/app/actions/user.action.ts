import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

 
export enum ActionTypes {
  LOAD = "[User] Loading",
  LOAD_SUCCESS = "[User] SUCCESS"
}

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;
}

export class LoadUserAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: User[]) {}
}

export type Actions = LoadAction | LoadUserAction;