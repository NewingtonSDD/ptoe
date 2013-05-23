/**
 * Created with JetBrains WebStorm.
 * User: dave
 * Date: 23/05/13
 * Time: 6:18 PM
 * To change this template use File | Settings | File Templates.
 */
ptoe  = [
    { atomicNo: 1, sym: 'H'},
    { atomicNo: 2, sym: 'He'},
    { atomicNo: 3, sym: 'Li'},
    { atomicNo: 4, sym: 'Be'},
    { atomicNo: 5, sym: 'B'},
    { atomicNo: 6, sym: 'C'},
    { atomicNo: 7, sym: 'N'},
    { atomicNo: 8, sym: 'O'},
    { atomicNo: 9, sym: 'F'},
    { atomicNo: 10, sym: 'Ne'},
    { atomicNo: 11, sym: 'Na'},
    { atomicNo: 12, sym: 'Mg'},
    { atomicNo: 13, sym: 'Al'},
    { atomicNo: 14, sym: 'P'},
    { atomicNo: 15, sym: 'P'},
    { atomicNo: 16, sym: 'S'},
    { atomicNo: 17, sym: 'Cl'},
    { atomicNo: 18, sym: 'Ar'},
    { atomicNo: 19, sym: 'K'},
    { atomicNo: 20, sym: 'Ca'},
    { atomicNo: 21, sym: 'Sc'},
    { atomicNo: 22, sym: 'Ti'},
    { atomicNo: 23, sym: 'V'},
    { atomicNo: 24, sym: 'Cr'},
    { atomicNo: 25, sym: 'Mn'},
    { atomicNo: 26, sym: 'Fe'},
    { atomicNo: 27, sym: 'Co'},
    { atomicNo: 28, sym: 'Ni'},
    { atomicNo: 29, sym: 'Cu'},
    { atomicNo: 30, sym: 'Zn'},
    { atomicNo: 31, sym: 'Ga'},
    { atomicNo: 32, sym: 'Ge'},
    { atomicNo: 33, sym: 'As'},
    { atomicNo: 34, sym: 'Se'},
    { atomicNo: 35, sym: 'Br'},
    { atomicNo: 36, sym: 'Kr'},
    { atomicNo: 37, sym: 'Co'},
    { atomicNo: 38, sym: 'Ni'},
    { atomicNo: 39, sym: 'Cu'},
    { atomicNo: 40, sym: 'Zn'}

];

var htmlBuffer = "";

function drawPTOE() {

    var i = 0;

    htmlBuffer = "<table><tr>";

    for(;i<2; i++) {
        htmlBuffer += "<td>" + ptoe[i].sym + "</td>";
    }

    htmlBuffer += "</tr><table>";

    setByID("ptoe", htmlBuffer);

}



function getByID(id) {
    return document.getElementById(id);
}

function setByID(id, content) {
    document.getElementById(id).innerHTML = content;
}

function addByID(id, content) {
    document.getElementById(id).innerHTML += content;
}