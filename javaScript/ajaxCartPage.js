// 기존에 서버 사이드 렌더링을 통해 작업하던 장바구니를 ajax로 변환 해보았다.
// 막힌 문제점은 ajax가 비동기식이기 때문에 작동 순서에 대한 문제였다.
// 이 부분은 앞으로 자바스크립트 공부를 하면서 집중하도록하고, 
// 두번째 문제점은 처음 지정해 놓은 inputList의 배열 요소가 변경된다는 것이다.
// 처음 로드할 때는 문제 없지만, 항목 제거시 배열요소도 같이 제거해주어야 깔끔하게 동작한다.

const url = window.location.href;
  
if(document.querySelector("#inputUrl") != null) {
    const inputUrl = document.querySelector("#inputUrl");
    inputUrl.value = url.substring(url.indexOf(/bseven/)+8);
}
var inputList = document.querySelectorAll("input[name='cart_no']");
var sales = document.querySelectorAll(".sale")
const totals = document.querySelector("#cartTotalSales");
const counts = document.querySelector("#cartTotalCount");

function handleTotal() {
  let total = 0;
  let count = 0;
  
  cartTotalSales.innerText = '총합: ' + total + "원";
  cartTotalCount.innerText = '총개수: ' + count;  
  
  inputList = document.querySelectorAll("input[name='cart_no']");
  for(var i=0; i<inputList.length; i++){
      if(inputList[i].checked) {
          var cost = sales[i].innerText.substring(0, sales[i].innerText.indexOf("원"));
          cost = cost.replace(/,/g, "");
          total += parseInt(cost);
          count += 1;
      }
  }
  total = total.toLocaleString();
  cartTotalSales.innerText = '총합: ' + total + "원";
  cartTotalCount.innerText = '총개수: ' + count;
}

function deleteCart() {
    
    var cart_no = "";
    inputList = document.querySelectorAll("input[name='cart_no']");
    for(var i=0; i<inputList.length; i++){
        if(inputList[i].checked) {
            cart_no +=  "cart_no=" + inputList[i].getAttribute("value");
    };
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){		  
            alert("장바구니에서 삭제되었습니다.")
            handleTotal()
        }
    }
    xhr.open("post", "./deleteCartProcess", true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(cart_no);
    
    for(var i=0; i<inputList.length; i++){
        if(inputList[i].checked) {
            inputList[i].parentElement.parentElement.remove();
        }
    }
    
}

function refreshCart() {
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState==4&&xhr.status==200){
            var data = JSON.parse(xhr.responseText);
            var cartDataList = data.CartDataList;
            const cart = document.getElementById("cart");
            
            if(data.result == 'Empty') {
                const emptyMention = document.createElement("p");
                emptyMention.innerText = "장바구니가 비었습니다."
                cart.append(emptyMention);
            } else {
                for(var i=0; i<cartDataList.length; i++){
                    const cartBox = document.createElement("div");
                    cartBox.setAttribute("class", "row fs-6 mt-3 pb-2");
                    cartBox.style.borderBottom = "1px solid #dbdbdb";

                        const cartTitle = document.createElement("div");
                        cartTitle.setAttribute("class", "col-3");

                            const inputNo = document.createElement("input");
                            inputNo.setAttribute("type", "checkbox");
                            inputNo.setAttribute("value", cartDataList[i].cartVo.cart_no);
                            inputNo.setAttribute("name", "cart_no");
                            inputNo.setAttribute("onclick", "handleTotal()");
                            cartTitle.append(inputNo, " " + cartDataList[i].courseVo.course_title);
                        
                        const cartCategory = document.createElement("div");
                        cartCategory.setAttribute("class", "col-5");

                            //카테고리 for 문 작성
                            for(var j=0; j<cartDataList[i].categoryName.length; j++){
                                const categoryName = document.createElement("span");
                                categoryName.innerText = cartDataList[i].categoryName[j] + " ";
                                cartCategory.append(categoryName);
                            }

                        const cartTeacher = document.createElement("div");
                        cartTeacher.setAttribute("class", "col-2");
                        cartTeacher.innerText = cartDataList[i].teacherName;

                        const cartPrice = document.createElement("div");
                        cartPrice.setAttribute("class", "col-2 sale");

                        var price = cartDataList[i].courseVo.course_price.toLocaleString();
                        cartPrice.innerText = price + "원";
                    cartBox.append(cartTitle, cartCategory, cartTeacher, cartPrice)
                    cart.append(cartBox);
                }
                inputList = document.querySelectorAll("input[name='cart_no']");
                sales = document.querySelectorAll(".sale");
            } 
        }
    }
    xhr.open("get", "./refreshCart", true);
    xhr.send();
}

function deleteCartNodes(){
    var parent = document.getElementById("cart");
    const count = parent.childElementCount;
    for (var i=0; i<count; i++){
        parent.firstElementChild.remove();
    }
}

window.onload = e => {
    refreshCart()
}