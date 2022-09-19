import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CLIENT_TOKEN, VHAPModule } from 'projects/vhap/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BETA } from './beta';
import { HomeComponent } from './home/home.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AuthInterceptor } from './interceptor/interceptor';
import { DialogSearchResultComponent } from './dialog-search-result/dialog-search-result.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AutocompleteComponent, DialogSearchResultComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    FlexLayoutModule,

    MatTooltipModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    ScrollingModule,
    MatDialogModule,

    VHAPModule,

    AppRoutingModule,
    ScrollingModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [{ provide: CLIENT_TOKEN, useValue: BETA },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {}}],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
