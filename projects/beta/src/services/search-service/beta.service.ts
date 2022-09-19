import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Client, CLIENT_TOKEN } from 'projects/vhap/src/public-api';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, delay, distinctUntilChanged } from 'rxjs/operators';
import { Item, Items } from '../../app/model/model';
import {map} from 'rxjs/operators';
import { SearchResult } from '../../app/model/SearchResult';
import { SearchResults } from '../../app/model/SearchResults';
import { Router } from '@angular/router';

const baseUrl = "https://vhap.usc.edu/VHAP.IWitness.API/eval/api/Test/";

@Injectable({ providedIn: 'root' })
export class BetaService {
  private readonly searchingsubject = new BehaviorSubject<boolean>(false);
  /**
   *
   */
  readonly searching$ = this.searchingsubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor(
    private readonly http: HttpClient,
    @Inject(CLIENT_TOKEN) private readonly client: Client, private router:Router
  ) {}

  /**
   *
   * @returns
   */
  public getVersion(): Observable<string> {
    return of('1').pipe(delay(500));
  }

  /**
   *
   * @param searchTerm
   * @param count
   * @returns
   */
  public getSearchAutoSuggests(
    searchTerm: string,
    count: number
  ): Observable<Items> {
    let queryParams = {params: new HttpParams()
      .set("searchTerm", searchTerm)
      .set("count", count)
    }
    return this.http.get(baseUrl + "GetSearchAutoSuggests", queryParams).pipe(map(
			x => { return new SearchResults(x); }
		)).pipe(
      catchError(this.handleError)  
  );
  }

  /**
   *
   * @param searchTerm
   * @param startIndex
   * @param count
   * @returns
   */
  getSearchResults(
    searchTerm: string,
    startIndex: number,
    count: number
  ): Observable<Items> {
    let queryParams = {params: new HttpParams()
      .set("searchTerm", searchTerm)
      .set("startIndex", startIndex)
      .set("count", count)
    }
    return this.http.get(baseUrl + "GetSearchResults", queryParams).pipe(map(
			x => { return new SearchResults(x); }
		)).pipe(
        catchError(this.handleError)  
    );
  }

  /**
   *
   * @param intCode
   * @returns
   */
  getItem(intCode: number): Observable<Item> {
    let queryParams = {params: new HttpParams()
      .set("intCode", intCode)
    }
    return this.http.get(baseUrl + "GetItem", queryParams).pipe(map(
			x => { return new SearchResult(x); }
		)).pipe(
      catchError(this.handleError)  
  );
  }

  handleError(error: HttpErrorResponse){
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          console.error("Error Event");
      } else {
          console.log(`error status : ${error.status} ${error.statusText}`);
          switch (error.status) {
              case 401:      
                   //TO:DO=> create page for unauthorize this.router.navigateByUrl("/unauthorized");
                  break;
              case 403:     //forbidden
                  //TO:DO=> create page for forbidden this.router.navigateByUrl("/unauthorized");
                  break;
          }
      } 
  } else {
      console.error("Unexpected error occured.");
  }
    return throwError(error);
  }
}
