export class Recipe {
    constructor(
        public id : number,
        public description : String,
        public instruction : String,
        public visibility : String,
        public duration : number,
        public difficulty : String
    ){}
}