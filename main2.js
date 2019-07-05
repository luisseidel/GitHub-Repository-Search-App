var inputNome = document.getElementById('inputNome');
var buttonAdd = document.getElementById('buttonAdd');
var nomeUsuario = document.getElementById('nomeUsuario');
var listRepo = document.getElementById('listRepo');

function buscarNomeUsuarioGit(){
    listRepo.innerHTML = '';
    var nomeUser = inputNome.value;
    var urlNome = 'https://api.github.com/users/' + nomeUser;
    var urlRepo = 'https://api.github.com/users/' + nomeUser + '/repos';

    axios.get(urlNome)
        .then( function(response) {
            nomeUsuario.innerText = 'Repositorios do usuário ' + response.data.name;
        })
        .catch( function(reject) {
            console.log(reject);
        });

    axios.get(urlRepo)
        .then( function(response) {
            var listaObj = response.data;
            for(obj of listaObj){
                var linhaElement = document.createElement('li');
                var repositorio = document.createTextNode(obj.name);
                linhaElement.appendChild(repositorio);
                listRepo.appendChild(linhaElement);
            }
        })
        .catch( function(reject) {
            console.log(reject);
        });

    inputNome.value = '';
}