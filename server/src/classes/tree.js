const prompt = require('prompt-sync')();
const ListNode = require('./listNode');


class List {

    constructor() {
        this.root = new ListNode('null', 'Bolo de Chocolate');
        this.root.next = new ListNode('Massa', 'Lasanha');
    }

    searchCaracteristica(node, prato) {

        /* Todo Node terá uma lista de caracteristicas, e um prato
        caso não tenha mais caracteristicas na lista atual, será perguntado se foi o prato que foi pensado.
        Caso o usuario tenha pensado em um prato com uma caracteristica listada, será feito uma busca no 
        node nested (node dentro de um node)
        */

        if (node.next !== 'null') {

            console.log(`O prato que você pensou é ${node.next.caracteristica}?`);
            var input_2 = prompt();

            if (input_2 === 's') {
                if (node.next.nested == 'null') {
                    node.next.nested = new ListNode('null', node.next.prato);
                }
                this.searchCaracteristica(node.next.nested, node.next.prato);
            }

            else if (input_2 == 'n') {
                this.searchCaracteristica(node.next, prato);
            }

        } else {

            console.log(`O prato que você pensou é ${prato}?`);
            var input = prompt();

            if (input == 's') {
                return console.log('Acertei de novo!\n');
            }
            else if (input == 'n') {
                console.log('Qual prato você pensou?')
                const novoPrato = prompt();
                console.log(`${novoPrato} é ____ mas ${prato} não.`);
                const novaCaracteristica = prompt();
                node.next = new ListNode(novaCaracteristica, novoPrato);
                return node;
            }

        }


    }
}

module.exports = List;