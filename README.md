# vhap.eval

This assignment is part of the candidate selection process for an Angular development position with the USC Shoah Foundation.

### Instructions:

- clone this repository
- add angular material
- add ngrx

#### ⭐ Utilizing Angular Material and NgRx, reproduce to some degree the sample application at:

https://vhap.usc.edu/eval

The application:  
'HOME' just a landing page  
'DASH' a page where you can enter a search term, see some auto-suggestions for existing 'index terms', and upon  
enter/select a search term, see results of matching 'Tape' items.

You can reproduce to whatever level that you feel demonstrates your competency level  
(for example, you may choose to forego implementing the results table).  
Should reproduce the colors and general look-and-feel of the reference application.  
Should have responsive layout for small screen (ex. 600px wide breakpoint).  
It is not necessary to be 'pixel-perfect'.  
You can spend as much time as you feel is appropriate for the complexity of the application and your skill level.  
⭐ When finished, please make your project available to our team for review. We should be able to run it via _$ npm install_ and _$ ng serve_.  
⭐ Please also let us know how many hours you spent to create the reproduction.

##### _NOTE: Should update your package and global versions of Node,Typescript and RxJS according to Angular V17 requirements. Also, npm should be 8.+ or later._

---

### API endpoints:

- https://vhap.usc.edu/VHAP.IWitness.API/eval/api/Test/GetSearchAutoSuggests  
   GET  
   <u>request</u>  
   query parameters:

  ```
   searchTerm: string
   count: number
  ```

  <u>response</u>

  ```
    {
      Items: string[];
      TotalCount: number;
      ResultCount: number;
    }
  ```

- https://vhap.usc.edu/VHAP.IWitness.API/eval/api/Test/GetSearchResults  
  GET  
   <u>request</u>  
   query parameters:

  ```
  searchTerm: string
  startIndex: number;
  count: number
  ```

  <u>response</u>

  ```
    {
      Items: {
        ExperienceGroups: string;
        ImageURL: string;
        IntCode: number;
        TapeLabel: string;
      }[];
      TotalCount: number;
      ResultCount: number;
    }
  ```

API calls shall include supplied API KEY as Bearer in Authorization request headers  
API calls shall include 'x-csrf' : '1' in request headers

##### _NOTE: the API endpoints are served from a non-optimize domain ... so http response times may be poor ... do not worry about this as far as reflecting on your implementation._
