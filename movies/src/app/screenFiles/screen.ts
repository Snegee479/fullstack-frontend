import { Movies } from "../movieFiles/movies";
import { Theater } from "../theaterFiles/theater";

export class Screen {
    screenId : number;
	screenName : String;
	totalNoOfSeats: number;
	availableNoOfSeats:number;
	theater: Theater = new Theater();
	movie: Movies = new Movies(); 
}
 