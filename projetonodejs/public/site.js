(function(){
    $('#clientes').on('click','.js-delete',function(){
        let botaoclicado = $(this) //recuperar o botao
        $('#btnsim').attr('data-id',botaoclicado.attr('data-id'))
        $('#meumodal').modal('show')//mostra a janela de confirmação
    })

    $('#btnsim').on('click', function(){
        let botaosim = $(this)//recuperando a referencia do botao sim
        let codcliente = botaosim.attr('data-id') //recuperando cod cliente
        //chamada para o backend apagar o cliente
        $.ajax({
            url: '/clientes/delete/' + codcliente,
            method: 'GET',
            success: function(){
                window.location.href = '/clientes'
            }
        })
    })
})()