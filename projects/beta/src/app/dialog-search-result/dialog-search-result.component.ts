import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BetaService } from '../../services/search-service/beta.service';
import { Item } from '../model/model';
import { SearchResult } from '../model/SearchResult';

@Component({
  selector: 'app-dialog-search-result',
  templateUrl: './dialog-search-result.component.html',
  styleUrls: ['./dialog-search-result.component.scss']
})
export class DialogSearchResultComponent implements OnInit {

  item:Item;

  constructor(
    public dialogRef: MatDialogRef<DialogSearchResultComponent>,
    @Inject(MAT_DIALOG_DATA) public itemId: number, private searchService:BetaService) { 
      this.item = new SearchResult();
    }
  
  onCancel(): void {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.searchService.getItem(this.itemId).subscribe(
      x => {
        this.item = x;
      }
    );
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }


}
