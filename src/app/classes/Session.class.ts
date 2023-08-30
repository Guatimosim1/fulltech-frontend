import { SessionPost } from "./session-post.class";

export class Session {
    public id : number = 0;
    public startingTime : string = "00:00";
    public endingTime : string = "00:00";
    public movieName : string = "";

    // public ID(id : number) : Session {
    //     this.id = id; return this;
    // }

    // public STARTING_TIME(startingTime : string) : Session {
    //     this.startingTime = startingTime; return this;
    // }

    // public ENDING_TIME(endingTime : string) : Session {
    //     this.endingTime = endingTime; return this;
    // }

    // public MOVIE_NAME(movieName : string) : Session {
    //     this.movieName = movieName; return this;
    // }

    // public toPost() : SessionPost {
    //     return new SessionPost(this);
    // }

}