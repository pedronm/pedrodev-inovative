import { RESUMO } from './estaticos';

var grid = document.getElementById("gridonaBolada"),
    elem = document.createElement("div"),
    arrowClick,
    worker, 
    list = new Rx.BehaviorSubject([]);

//Ao carregar a pagina
window.onload = () => {
    
    startResumo()

    worker = new Worker('expertiseGenerator.js');
    worker.postMessage('')
    worker.onmessage = ({data}) => {
        list.next(data)
    }
}

list.subscribe( (retorno) => {
    retorno.map(
        (especialidade) => {
            renderExpertiseTela(especialidade)
        }
        
    )
   
},
error => {
    console.log(error)
})

function renderExpertiseTela(especialidade){
    var template = `
                <div class="__especialidade ">
                    <input id="btnCheck_${especialidade.id}" type="checkbox"/>
                    <h2 class="__title">${especialidade.titulo}
                        <label for="btnCheck_${especialidade.id}" class="arrow spin"></label>
                    </h2>
                    <div id="conteudo" class="__conteudo flex">
                        <p class="__desc">${especialidade.descricao}</p>                        
                        <h3 class="__sub-title">Algumas Tecnologias </h3>
                        <p class="__keys">${getBreads(especialidade.keys)}</p>
                    </div>
                </div>
            `
    var exprArea = document.querySelector('main>.about>.__especialidades')
    exprArea.innerHTML += template
}

function getBreads(breads){
    var lista = '';
    breads.map( bread => {
        if(bread !== ''
            && bread != null
            && bread != undefined)
        {
            lista += ` <span class="__breadcrumb"> ${bread}</span>  `
        }
        
    })
    return lista
}

function startResumo(){
    var titulo = document.querySelector('.main>.about>.__resume>.__title')
    var texto = document.querySelector('.main>.about>.__resume>.__text')

    titulo.innerHTML = RESUMO.titulo
    texto.innerHTML = RESUMO.texto 
}

