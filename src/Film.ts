import Director from './Director'
import FilmDetails from './FilmDetails'

class Film {

    private _name:string
    private _isShowing:boolean
    private _trailer:string
    private _synopsis:string

    private _details:FilmDetails
    private _director:Director

    constructor(name:string, isShowing:boolean, trailerURL:string, synopsis:string) {
        this._name = name
        this._isShowing = isShowing
        this._trailer = trailerURL
        this._synopsis = synopsis
    }

    // Detalhes
    set filmDetails(details:FilmDetails) {
        if (details) {
            this._details = details
            return
        }

        console.log('Detalhes inválidos.')
        return
    }
    
    get filmDetails():FilmDetails {
        return this._details
    }

    // Diretor
    set filmDirector(director:Director) {
        if (director) {
            this._director = director
            return
        }

        console.log('Diretor inválido.')
        return
    }
    
    get filmDirector():Director {
        return this._director
    }
}

const film = new Film('Guerra dos Mundos', false, 'https://www.youtube.com/watch?v=2qZUxly1634', '"Guerra dos Mundos" (2005), dirigido por Steven Spielberg, é um filme de ficção científica que segue um pai e seus filhos tentando sobreviver a uma invasão alienígena, quando extraterrestres altamente tecnologicamente avançados atacam a Terra, destruindo cidades e forçando a humanidade a lutar pela sobrevivência.')

const director = new Director('Steven Spielberg')

const filmDetails = new FilmDetails()