import Actor from './Actor'

export default class FilmDetails {

    private _description:string
    private _duration:number
    private _casting:Actor[]

    constructor(description:string, duration:number, casting:string[]) {
        this._description = description
        this._duration = duration
        this._casting = casting
    }
}