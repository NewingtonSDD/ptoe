/**
 * Created with JetBrains WebStorm.
 * User: dave
 * Date: 23/05/13
 * Time: 6:18 PM
 * To change this template use File | Settings | File Templates.
 */
ptoe  = [
    { atomicNo: 1, sym: 'H', name: "Hydrogen", family: "hydrogen" },
    { atomicNo: 2, sym: 'He', name: "Helium", family: "noble" },
    { atomicNo: 3, sym: 'Li', name: "Lithium", family: "alkali" },
    { atomicNo: 4, sym: 'Be', name: "", family: "alkaliEarth" },
    { atomicNo: 5, sym: 'B', name: "Boron", family: "other" },
    { atomicNo: 6, sym: 'C', name: "Carbon", family: "other" },
    { atomicNo: 7, sym: 'N', name: "Nitrogen", family: "other" },
    { atomicNo: 8, sym: 'O', name: "Oxygen", family: "other" },
    { atomicNo: 9, sym: 'F', name: "", family: "other" },
    { atomicNo: 10, sym: 'Ne', name: "", family: "noble" },
    { atomicNo: 11, sym: 'Na', name: "", family: "alkali" },
    { atomicNo: 12, sym: 'Mg', name: "Magnesium", family: "alkaliEarth" },
    { atomicNo: 13, sym: 'Al', name: "Aluminium", family: "poor" },
    { atomicNo: 14, sym: 'Si', name: "", family: "other" },
    { atomicNo: 15, sym: 'P', name: "", family: "other" },
    { atomicNo: 16, sym: 'S', name: "", family: "other" },
    { atomicNo: 17, sym: 'Cl', name: "", family: "other" },
    { atomicNo: 18, sym: 'Ar', name: "Argon", family: "noble" },
    { atomicNo: 19, sym: 'K', name: "", family: "alkali" },
    { atomicNo: 20, sym: 'Ca', name: "", family: "alkaliEarth" },
    { atomicNo: 21, sym: 'Sc', name: "", family: "transition" },
    { atomicNo: 22, sym: 'Ti', name: "Titanium", family: "transition" },
    { atomicNo: 23, sym: 'V', name: "", family: "transition" },
    { atomicNo: 24, sym: 'Cr', name: "", family: "transition" },
    { atomicNo: 25, sym: 'Mn', name: "", family: "transition" },
    { atomicNo: 26, sym: 'Fe', name: "", family: "transition" },
    { atomicNo: 27, sym: 'Co', name: "", family: "transition" },
    { atomicNo: 28, sym: 'Ni', name: "Nickel", family: "transition" },
    { atomicNo: 29, sym: 'Cu', name: "Copper", family: "transition" },
    { atomicNo: 30, sym: 'Zn', name: "Zinc", family: "poor" },
    { atomicNo: 31, sym: 'Ga', name: "", family: "poor" },
    { atomicNo: 32, sym: 'Ge', name: "", family: "poor" },
    { atomicNo: 33, sym: 'As', name: "", family: "other" },
    { atomicNo: 34, sym: 'Se', name: "", family: "other" },
    { atomicNo: 35, sym: 'Br', name: "", family: "other" },
    { atomicNo: 36, sym: 'Kr', name: "", family: "noble" },
    { atomicNo: 37, sym: '**', name: "", family: "alkali" },
    { atomicNo: 38, sym: '**', name: "", family: "alkaliEarth" },
    { atomicNo: 39, sym: '**', name: "", family: "" },
    { atomicNo: 40, sym: '**', name: "", family: "" }

];



function drawPTOE() {

    var htmlBuffer = "";

    function showElem(atomicNumber) {
        htmlBuffer += "<td class=" + ptoe[atomicNumber].family + ">" +
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
