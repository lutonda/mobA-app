let request = require('request')
const axios = require('axios');

let config = {
    xe: {
        url: 'http://data.fixer.io/api/latest?access_key=73aec86fd31ba205e1a5f924e542fd43',
        endpoint: 'latest',
        access_key: '73aec86fd31ba205e1a5f924e542fd43'
    }
}

export class Source {
    //field
    engine: string;
    config = {
        xe: {
            url: 'http://data.fixer.io/api/latest?access_key=73aec86fd31ba205e1a5f924e542fd43',
            endpoint: 'latest',
            access_key: '73aec86fd31ba205e1a5f924e542fd43'
        }
    }
    //constructor
    constructor(engine: string) {
        this.engine = engine
    }

    //function
    getOne(): void {
        console.log("Engine is  :   " + this.engine)
    }


    //function
    async getAll() {
        let final = 'NOTHING DONE'

        let res = await axios.get(config.xe.url);

        final=res.data
        console.log('done');
        console.log("Engine is  :   " + this.engine)

        return  final;
    }
}


