const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const ele = document.querySelectorAll(".price");

	let sum=0;
	ele.forEach((el)=>{
		let price = el.innerText;
		let price1 = parseInt(price);
		sum = sum +price1;
	});
  const con = document.createElement("tr");
  const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	td2.id = "ans";
	td1.innerText = "Total:";
	td2.innerText  = `${sum}`;
	con.append(td1,td2);

	document.getElementById('grof').append(con);
};

getSumBtn.addEventListener("click", getSum);

