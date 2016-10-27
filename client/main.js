import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

/*
* Método utilizado para prover helpers ao template "simpleMethod"
* */
Template.simpleMethod.helpers({
    //empty method
});

/*
 * Método utilizado para fazer o BIND dos eventos ao template "simpleMethod"
 * */
Template.simpleMethod.events({
    //bind do clique do botão para o template simpleMethod
    'click button'(event, instance) {
        //chamada do método do lado servidor: contadorConsole
        Meteor.call('contadorConsole');
    },
});

/*
 * Método utilizado para prover helpers ao template "paramMethod"
 * */
Template.paramMethod.helpers({
    //empty method
});

/*
 * Método utilizado para fazer o BIND dos eventos ao template "paramMethod"
 * */
Template.paramMethod.events({
    //bind do clique do botão para o template paramMethod
    'click button'(event, instance) {
        //recuperando o valor do input com base na "instance", a "instance" é a instância do template "paramMethod"
        var valorParametro = instance.find('#valor').value;
        //chamada do método do lado servidor: parametroConsole. Passagem do parâmetro junto à chamada do método: valorParametro
        Meteor.call('parametroConsole',valorParametro);
    },
});

/*
 * Método utilizado para prover helpers ao template "returnMethod"
 * */
Template.returnMethod.helpers({
    //empty method
});

/*
 * Método utilizado para fazer o BIND dos eventos ao template "returnMethod"
 * */
Template.returnMethod.events({
    //bind do clique do botão para o template returnMethod
    'click button'(event, instance) {
        //recuperando o valor do input com base na "instance", a "instance" é a instância do template "returnMethod"
        var numero = instance.find('#numero').value;
        /*
            chamada do método do lado servidor: retornoMetodo.
            Passagem do parâmetro junto à chamada do método: numero.
            Definição de função para tratamento do retorno do método.
             - A funcao obrigatóriamente deve ter dois parametros de entrada, um para tratamento de possíveis erros
             do lado servidor e o outro para receber o retorno do servidor.
        */
        Meteor.call('retornoMetodo',numero, function(erro, retorno){
            //caso não possua retorno com erro do lado servidor
            if(erro == undefined){
                //popula o valor da DIV "resultado" com o valor do retorno
                instance.find('#resultado').innerHTML = retorno;
            }else{
                //popula o valor da DIV "resultado" com a mensagem
                instance.find('#resultado').innerHTML = "Erro no servidor. Confira o console do navegador.";
                //lança no console do navegador o objeto do erro
                console.log(erro);
            }
        });
    },
});
