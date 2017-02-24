class Api{
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json',
            'X-Requested-With': 'XMLHttpRequest',
        }
    }

    static get(route){
        return this.xhr(route, null, 'GET');
    }

    static put(route){
        return this.xhr(route, params, 'PUT');
    }

    static post(route){
        return this.xhr(route, params, 'POST');
    }

    static delete(route){
        return this.xhr(route, params, 'DELETE');
    }

    static xhr(route, params, verb){
        const host = 'http://www.recipepuppy.com';
        const url = `${host}${route}`;
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)}: null);
        options.headers = Api.headers()
        return fetch(url, options).then( resp => {
           let json = resp.json();
           if (resp.ok){
               return json;
           }
           return json.then(err => {throw err});
        });
    }
}

export default Api
/*  Recipe Puppy API Instructions

The api is accessible at http://www.recipepuppy.com/api/.

    For example:
    http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3

        Optional Parameters:
    i : comma delimited ingredients
q : normal search query
p : page
format=xml : if you want xml instead of json
*/