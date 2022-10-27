const covid = async () => {
  try {
    let inputboxes = document.getElementById("inputbox").value;
    const covid_fetch = await fetch(
      `https://api.covid19api.com/dayone/country/${inputboxes}`
    );
    const data = await covid_fetch.json();
    console.log(data);
    const tablediv = document.getElementById("tablediv");
    tablediv.innerHTML = "";
    const table = document.createElement("table");
    const trhead = document.createElement("tr");
    heading = ["Date", "Active", "Confirmed", "Deaths"];
    heading.forEach((str) => {
      const th = document.createElement("th");
      th.innerHTML = str;
      trhead.append(th);
    });
    table.appendChild(trhead);
    data.forEach(({ Date, Confirmed, Active, Deaths }) => {
      const trbody = document.createElement("tr");
      const thdate = document.createElement("th");
      thdate.innerText = Date.slice(0, 10);
      const thActive = document.createElement("th");
      thActive.innerText = Active;
      const thConfirmed = document.createElement("th");
      thConfirmed.innerText = Confirmed;
      const thDeath = document.createElement("th");
      thDeath.innerText = Deaths;
      trbody.append(thdate);
      trbody.append(thActive);
      trbody.append(thConfirmed);
      trbody.append(thDeath);
      table.appendChild(trbody);
    });
    tablediv.appendChild(table);
  } catch (err) {
    console.log(err);
  }
};
covid();
