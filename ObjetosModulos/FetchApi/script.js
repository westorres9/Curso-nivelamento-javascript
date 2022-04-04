const cep = "38407270";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
 console.log(fetchResult);   
    

fetchResult
    .then(response => {
        console.log("SUCESSO NO FETCH", response);
        const json = response.json();
        json
            .then(result => {
                console.log("SUCESSO JSON", result);
            })
            .catch(error => {
                console.log("ERRO NO JSON", error);
            })
        
}).catch(error => {
    console.log("ERRO NO FETCH", error);
});



console.log("A");
console.log("B");
