const inputList = document.querySelectorAll("input[name='checkedBox']");
const sales = document.querySelectorAll(".sale")
const totals = document.querySelector("#totals");
const counts = document.querySelector("#counts");

function handleTotal() {
  let total = 0;
  let count = 0;
  
  for(var i=0; i<inputList.length; i++){
      if(inputList[i].checked) {
          var cost = sales[i].innerText.substring(0, sales[i].innerText.indexOf("원"));
          cost = cost.replaceAll(",", "");
          total += parseInt(cost);
          count += 1;
      }
  }
  total = total.toLocaleString();
  totals.innerText = `total: ${total}원`;
  counts.innerText = `총 : ${count} 개`;
}

for(var i=0; i<inputList.length; i++){
  inputList[i].addEventListener("click", handleTotal)
}

// 체크하면 이벤트리스너가 handleTotal을 실행하고 체그여부를 확인하고 ture면 값이 변한다.