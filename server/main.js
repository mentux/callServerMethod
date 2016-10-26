import {Meteor} from 'meteor/meteor';


Meteor.startup(() => {
    console.log('Start application');
})
;

Meteor.methods({
    contadorConsole: function () {
        for (var count = 0; count <= 10; count++) {
            console.log('Contador - iteração: ' + count);
        }
    },
    parametroConsole: function (arg) {
        console.log('Valor do parametro enviado: ' + arg);
    },
    retornoMetodo: function (arg) {
        console.log(arg);
        console.log(isNaN(arg));
        if (isNaN(arg)) {
            throw new Meteor.Error(000, 'Error 000: O valor informado não é um número', 'Valor informado não é número');
        }
        return (parseFloat(arg) * 100);
    }

});


/**/