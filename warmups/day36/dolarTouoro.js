$( document ).ready(function() {
      $.ajax({
        url: 'http://api.fixer.io/latest?base=USD',
        type: 'GET',
        success: function (data) {
           initCurrency(data.rates);

       }
        })

});

function initCurrency(arryCur){
    console.log(arryCur);
     Object.keys(arryCur).forEach(function (key) {
         $('#selectMoney').append( '<option value="'+arryCur[key]+'">'+key+'</option>' );
});
    
}

$("#btn").click(function(){
    var currency= $('#selectMoney').val();
    var amount= $('#money').val();
})