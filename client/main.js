import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.simpleMethod.helpers({});

Template.simpleMethod.events({
    'click button'(event, instance) {
        Meteor.call('contadorConsole');
    },
});

Template.paramMethod.helpers({});

Template.paramMethod.events({
    'click button'(event, instance) {
        var valorParametro = instance.find('#valor').value;
        Meteor.call('parametroConsole',valorParametro);
    },
});

Template.returnMethod.helpers({});

Template.returnMethod.events({
    'click button'(event, instance) {
        var numero = instance.find('#numero').value;
        Meteor.call('retornoMetodo',numero, function(erro, retorno){
            if(erro == undefined){
                instance.find('#resultado').innerHTML = retorno;
            }else{
                instance.find('#resultado').innerHTML = "Erro no servidor. Confira o console do navegador.";
                console.log(erro);
            }
        });
    },
});
