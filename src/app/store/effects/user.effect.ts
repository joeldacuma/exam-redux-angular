
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserService } from '../../api/user.service';

import { map, switchMap } from 'rxjs/operators';
import * as DataActions from '../../actions/user.action';


@Injectable()
export class DataEffects {

  constructor(private actions: Actions,
              private userService: UserService) {}
  
  @Effect()
  loadData = this.actions.pipe(
    ofType(DataActions.ActionTypes.LOAD),
    switchMap(() => {
      return this.userService.getAllUsers().pipe(
        map(data => new DataActions.LoadUserAction(data))
      ) 
    })
  )
}