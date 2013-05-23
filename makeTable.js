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
    { atomicNo: 4, sym: 'Be', name: "Beryllium", family: "alkaliEarth" },
    { atomicNo: 5, sym: 'B', name: "Boron", family: "other" },
    { atomicNo: 6, sym: 'C', name: "Carbon", family: "other" },
    { atomicNo: 7, sym: 'N', name: "Nitrogen", family: "other" },
    { atomicNo: 8, sym: 'O', name: "Oxygen", family: "other" },
    { atomicNo: 9, sym: 'F', name: "Fluorine", family: "other" },
    { atomicNo: 10, sym: 'Ne', name: "Neon", family: "noble" },
    { atomicNo: 11, sym: 'Na', name: "Sodium", family: "alkali" },
    { atomicNo: 12, sym: 'Mg', name: "Magnesium", family: "alkaliEarth" },
    { atomicNo: 13, sym: 'Al', name: "Aluminium", family: "poor" },
    { atomicNo: 14, sym: 'Si', name: "Silicon", family: "other" },
    { atomicNo: 15, sym: 'P', name: "Phosphorus", family: "other" },
    { atomicNo: 16, sym: 'S', name: "Sulfur", family: "other" },
    { atomicNo: 17, sym: 'Cl', name: "Chlorine", family: "other" },
    { atomicNo: 18, sym: 'Ar', name: "Argon", family: "noble" },
    { atomicNo: 19, sym: 'K', name: "Potassium", family: "alkali" },
    { atomicNo: 20, sym: 'Ca', name: "Calcium", family: "alkaliEarth" },
    { atomicNo: 21, sym: 'Sc', name: "Scandium", family: "transition" },
    { atomicNo: 22, sym: 'Ti', name: "Titanium", family: "transition" },
    { atomicNo: 23, sym: 'V', name: "Vanadium", family: "transition" },
    { atomicNo: 24, sym: 'Cr', name: "Chromium", family: "transition" },
    { atomicNo: 25, sym: 'Mn', name: "Manganese", family: "transition" },
    { atomicNo: 26, sym: 'Fe', name: "Iron", family: "transition" },
    { atomicNo: 27, sym: 'Co', name: "Cobalt", family: "transition" },
    { atomicNo: 28, sym: 'Ni', name: "Nickel", family: "transition" },
    { atomicNo: 29, sym: 'Cu', name: "Copper", family: "transition" },
    { atomicNo: 30, sym: 'Zn', name: "Zinc", family: "poor" },
    { atomicNo: 31, sym: 'Ga', name: "Gallium", family: "poor" },
    { atomicNo: 32, sym: 'Ge', name: "Germanium", family: "poor" },
    { atomicNo: 33, sym: 'As', name: "Arsenic", family: "other" },
    { atomicNo: 34, sym: 'Se', name: "Selenium", family: "other" },
    { atomicNo: 35, sym: 'Br', name: "Bromine", family: "other" },
    { atomicNo: 36, sym: 'Kr', name: "Krypton", family: "noble" },
    { atomicNo: 37, sym: 'Rb', name: "Rubidium", family: "alkali" },
    { atomicNo: 38, sym: 'Sr', name: "Strontium", family: "alkaliEarth" },
    { atomicNo: 39, sym: 'Y', name: "Yttrium", family: "transition" },
    { atomicNo: 40, sym: 'Zr', name: "Zirconium", family: "transition" },
    { atomicNo: 41, sym: 'Nb', name: "Niobium", family: "transition" },
    { atomicNo: 42, sym: 'Mo', name: "Molybdenum", family: "transition" },
    { atomicNo: 43, sym: 'Tc', name: "Technetium", family: "transition" },
    { atomicNo: 44, sym: 'Ru', name: "Ruthenium", family: "transition" },
    { atomicNo: 45, sym: 'Rh', name: "Rhodium", family: "transition" },
    { atomicNo: 46, sym: 'Pd', name: "Palladium", family: "transition" },
    { atomicNo: 47, sym: 'Ag', name: "Silver", family: "transition" },
    { atomicNo: 48, sym: 'Cd', name: "Cadmium", family: "poor" },
    { atomicNo: 49, sym: 'In', name: "Indium", family: "poor" },
    { atomicNo: 50, sym: 'Sn', name: "Tin", family: "poor" },
    { atomicNo: 51, sym: 'Sb', name: "Antimony", family: "poor" },
    { atomicNo: 52, sym: 'Te', name: "Tellurium", family: "other" },
    { atomicNo: 53, sym: 'I', name: "Iodine", family: "other" },
    { atomicNo: 54, sym: 'Xe', name: "Xenon", family: "noble" }

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

    for(j=0; j<2; j++) {

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
