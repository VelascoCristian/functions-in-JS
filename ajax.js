const $axiosAsync = document.getElementById("axios-async"),
  $fragment = document.createDocumentFragment();

axios.get("https://jsonplaceholder.typicode.com/users");

async function getData() {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
      json = await res.data;

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $axiosAsync.appendChild($fragment);
  } catch (err) {
    let message = err.response.statusText || "Opps It's look like an error";
    $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
  } finally {
    //console.log("Always execute");
  }
}

getData();
