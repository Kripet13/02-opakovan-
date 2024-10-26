function zkontrolujVek(datum)
{
    let dnesek = new Date();
    let datumNarozeni = new Date(datum);
    let vek = dnesek.getFullYear() - datumNarozeni.getFullYear();
    let mesic = dnesek.getMonth() - datumNarozeni.getMonth();
    if (mesic < 0 || (mesic === 0 && dnesek.getDate() < datumNarozeni.getDate())) {
        vek--;
    }
    return vek;
}

function odhalVek(datumElement)
{   
    let jeOsm = document.getElementById("jeOsmnact"); 
    if(zkontrolujVek(datumElement.value) >= 18)
    {
        document.getElementById("jednaDeset").hidden = false;
        jednaDeset();
        jeOsm.innerText = "Splňuješ věkovou hranici!";
        jeOsm.style.color = "green";
        document.getElementById("kontejner").hidden = false;
    }
    else
    {
        document.getElementById("jednaDeset").hidden = true;
        jeOsm.innerText = "Nesplňuješ věkovou hranici!!";
        jeOsm.style.color = "red";
        document.getElementById("kontejner").hidden = true;
    }
}
function jednaDeset()
{
    let table = document.getElementById("jednaDeset");

    table.innerHTML = "";

    let tr;
    let td;
    for(let i = 1; i <= 10; i++)
    {
        tr = document.createElement("tr");
        td = document.createElement("td");

        td.innerText = i;

        tr.appendChild(td);
        table.appendChild(tr);
    }
}
function suma(x, y, cil)
{
    cil.value = parseInt(x) + parseInt(y);
    return x+y;
}