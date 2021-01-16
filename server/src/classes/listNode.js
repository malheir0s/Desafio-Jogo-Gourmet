class ListNode{

    constructor(caracteristica, prato){

        this.prato = prato;
        this.caracteristica = caracteristica;
        this.next = 'null'; // contem referencia a proximos nodes
        this.nested = 'null'; // contem referencia a um node dentro de um node

    }

}

module.exports = ListNode;