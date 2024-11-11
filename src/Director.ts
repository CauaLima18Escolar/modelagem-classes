export default class Director {

    private _name:string

    constructor(name:string) {
        this._name = name
    }

    get name():string {
        return this._name
    }

    set name(directorName:string) {
        if (directorName.length > 0) {
            this._name = directorName
            return
        }

        console.log('Nome inválido.')
        return
    }
}