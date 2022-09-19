import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BetaService } from '../../services/search-service/beta.service';
import { SearchResult } from '../model/SearchResult';
import { Observable} from 'rxjs';
import {debounceTime, map, startWith, switchMap} from 'rxjs/operators';
import { Item } from '../model/model';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchResultComponent } from '../dialog-search-result/dialog-search-result.component';

const max_autoSuggest = 10;

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AutocompleteComponent implements OnInit {

  searchResults :Partial<Item>[] = [];
  result : SearchResult=new SearchResult();
  value:string = "";

  myControl = new FormControl('');
  options: string[] = []; 
  finalSearchResults: Array<Partial<Item>>; 
  filteredOptions: Observable<string[]>; 

  constructor(private searchService:BetaService, private dialog: MatDialog)
  {
    this.filteredOptions = new Observable<string[]>();
    this.finalSearchResults = new Array<Partial<Item>>();
   }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      switchMap(value => this._filter("value" || ''))
    );   
  }

  private _filter(value: string): Observable<string[]> {
      this.options = [];
      if(this.value == "") return new Observable<string[]>();
      return this.searchService.getSearchAutoSuggests(this.value, max_autoSuggest).pipe(map(
        x => {
          x.Items.forEach(value => {
            this.options.push(value.toString());
          });
          return this.options;
        }
      ));
  }

  GetSearchResults(){
    this.finalSearchResults = [];

    this.searchService.getSearchResults(this.value, 0, 100).subscribe(
      x => {
        x.Items.forEach(val=> {
          this.finalSearchResults = [...this.finalSearchResults, val];
        });
      }
      
    );
  }
  openDialog(item:Item){
    this.dialog.open(DialogSearchResultComponent, {
      height: '440px',
      width: '400px',
      data:  item.IntCode 
    });
  }
}
