import { Item, Items } from "./model";

export class SearchResults implements Items{
  Items: Partial<Item>[];
  ResultCount: number;
  TotalCount: number;

  constructor(obj?: any){
		this.Items = obj && obj.Items || null;
		this.ResultCount = obj && obj.ResultCount || null;
		this.TotalCount = obj && obj.TotalCount || null;
	}
}