//formula = inversion + inversion * taza interes

function valorCuenta(principal, taza, year){
    return(principal*(Math.pow(1 + taza, year))).toFixed(2);
}

function getTable(){
    let taza1 = document.getElementById("rate1").value * .01;
    let taza2 = document.getElementById("rate2").value * .01;
    let taza3 = document.getElementById("rate3").value * .01;
    let taza4 = document.getElementById("rate4").value * .01;

    let return1 = [...Array(5).keys()].map(x =>valorCuenta(1, taza1, x));
    let return2 = [...Array(5).keys()].map(x =>valorCuenta(1, taza2, x));
    let return3 = [...Array(5).keys()].map(x =>valorCuenta(1, taza3, x));
    let return4 = [...Array(5).keys()].map(x =>valorCuenta(1, taza4, x));

    var tableArea = document.getElementById("interest-tbl");

    var tablaInversion = document.createElement('table');
    tablaInversion.setAttribute('class', 'table table-striped');

    var thead = document.createElement('thead');
    var theadTR = document.createElement('tr');
    var th1 = theadTR.appendChild(document.createElement('th'));
    var th2 = theadTR.appendChild(document.createElement('th'));
    var th3 = theadTR.appendChild(document.createElement('th'));
    var th4 = theadTR.appendChild(document.createElement('th'));
    var th5 = theadTR.appendChild(document.createElement('th'));


    th1.innerHTML = 'Año';
    th2.innerHTML = Math.floor((taza1 * 100)) + '%';
    th3.innerHTML = Math.floor((taza2 * 100)) + '%';
    th4.innerHTML = Math.floor((taza3 * 100)) + '%';
    th5.innerHTML = Math.floor((taza4 * 100)) + '%';


    theadTR.prepend(th1, th2, th3, th4, th5);
    thead.appendChild(theadTR);

    var tbody = document.createElement('tbody');
    for(var i = 1; i < 5; i++){
        var tbodyTR = document.createElement('tr');
        var tbodyth1 = tbodyTR.appendChild(document.createElement('th'));
        var tbodyth2 = tbodyTR.appendChild(document.createElement('th'));
        var tbodyth3 = tbodyTR.appendChild(document.createElement('th'));
        var tbodyth4 = tbodyTR.appendChild(document.createElement('th'));
        var tbodyth5 = tbodyTR.appendChild(document.createElement('th'));

        tbodyth1.innerHTML = i;
        tbodyth2.innerHTML = return1[i];
        tbodyth3.innerHTML = return2[i];
        tbodyth4.innerHTML = return3[i];
        tbodyth5.innerHTML = return4[i];

        tbodyTR.prepend(tbodyth1,tbodyth2, tbodyth3, tbodyth4, tbodyth5);
        tbody.appendChild(tbodyTR);
    }

    tablaInversion.appendChild(thead);
    tablaInversion.appendChild(tbody);
    var tableDiv = document.getElementById("interest-tbl");
    tableDiv.appendChild(tablaInversion);

}