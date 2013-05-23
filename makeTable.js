/**
 * Created with JetBrains WebStorm.
 * User: dave
 * Date: 23/05/13
 * Time: 6:18 PM
 * To change this template use File | Settings | File Templates.
 */
ptoe  = [
    { atomicNo: 1, sym: 'H', name: "Hydrogen" },
    { atomicNo: 2, sym: 'He', name: "Helium" },
    { atomicNo: 3, sym: 'Li', name: "Lithium" },
    { atomicNo: 4, sym: 'Be', name: "" },
    { atomicNo: 5, sym: 'B', name: "Boron" },
    { atomicNo: 6, sym: 'C', name: "Carbon" },
    { atomicNo: 7, sym: 'N', name: "Nitroge" },
    { atomicNo: 8, sym: 'O', name: "Oxygen" },
    { atomicNo: 9, sym: 'F', name: "" },
    { atomicNo: 10, sym: 'Ne', name: "" },
    { atomicNo: 11, sym: 'Na', name: "" },
    { atomicNo: 12, sym: 'Mg', name: "Magnesium" },
    { atomicNo: 13, sym: 'Al', name: "Aluminium" },
    { atomicNo: 14, sym: 'Si', name: "" },
    { atomicNo: 15, sym: 'P', name: "" },
    { atomicNo: 16, sym: 'S', name: "" },
    { atomicNo: 17, sym: 'Cl', name: "" },
    { atomicNo: 18, sym: 'Ar', name: "Argon" },
    { atomicNo: 19, sym: 'K', name: "" },
    { atomicNo: 20, sym: 'Ca', name: "" },
    { atomicNo: 21, sym: 'Sc', name: "" },
    { atomicNo: 22, sym: 'Ti', name: "Titanium" },
    { atomicNo: 23, sym: 'V', name: "" },
    { atomicNo: 24, sym: 'Cr', name: "" },
    { atomicNo: 25, sym: 'Mn', name: "" },
    { atomicNo: 26, sym: 'Fe', name: "" },
    { atomicNo: 27, sym: 'Co', name: "" },
    { atomicNo: 28, sym: 'Ni', name: "Nickel" },
    { atomicNo: 29, sym: 'Cu', name: "Copper" },
    { atomicNo: 30, sym: 'Zn', name: "Zinc" },
    { atomicNo: 31, sym: 'Ga', name: "" },
    { atomicNo: 32, sym: 'Ge', name: "" },
    { atomicNo: 33, sym: 'As', name: "" },
    { atomicNo: 34, sym: 'Se', name: "" },
    { atomicNo: 35, sym: 'Br', name: "" },
    { atomicNo: 36, sym: 'Kr', name: "" },
    { atomicNo: 37, sym: 'Co', name: "" },
    { atomicNo: 38, sym: 'Ni', name: "" },
    { atomicNo: 39, sym: 'Cu', name: "" },
    { atomicNo: 40, sym: 'Zn', name: "" }

];



function drawPTOE() {

    var htmlBuffer = "";

    function showElem(atomicNumber) {
        htmlBuffer += "<td>" +
                        ptoe[atomicNumber].atomicNo +
                        "<br/><h2>" +
                        ptoe[atomicNumber].sym +
                        "</h2><br/>" +
                        ptoe[atomicNumber].name +
            "</td>";
    }

    var p = 0;

    htmlBuffer = "<table><tr>";

    for(i=0 ;i<2; i++) {

        showElem(p++);

        if(i==0) for(k=0; k<16; k++) htmlBuffer += "<td class='invis'></td>";
    }

    for(j=0; j<2; j++) {

        htmlBuffer += "</tr><tr>";

        for(i=0;i<8; i++) {

            showElem(p++);

            if(i==1) for(k=0; k<10; k++) htmlBuffer += "<td class='invis'></td>";
        }

    }

    for(j=0; j<1; j++) {

        htmlBuffer += "</tr><tr>";

        for(i=0;i<18; i++) {
            showElem(p++);
        }

    }

    htmlBuffer += "</tr><table>";

    setByID("ptoe", htmlBuffer);

}

function setByID(id, content) {
    document.getElementById(id).innerHTML = content;
}
