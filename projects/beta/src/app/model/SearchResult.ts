import { Item } from "./model";

export class SearchResult implements Item{
    Length: string;
    TapeLabel: string;
    GrantStatement: string;
    ExperienceGroup: string;
    LanguageLabel: string;
    OrganizationName: string;
    ImageURL: string;
    IntCode: number;

    constructor(obj?: any){
		this.Length = obj && obj.Length || null;
		this.TapeLabel = obj && obj.TapeLabel || null;
		this.GrantStatement = obj && obj.GrantStatement || null;
		this.ExperienceGroup = obj && obj.ExperienceGroup || null;
		this.OrganizationName = obj && obj.OrganizationName || null;
		this.LanguageLabel = obj && obj.LanguageLabel || null;
		this.ImageURL = obj && obj.ImageURL || null;
		this.IntCode = obj && obj.IntCode || null;
	}
}