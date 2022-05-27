document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  // const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?personChoice=${personChoice}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personChoice").textContent = data.throwResult
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}