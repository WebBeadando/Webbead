const API_URL = "http://webprogbead.nhely.hu/AjaxApi.php";
const CODE = "KLNK5Labcd123"; // Saját Neptun+azonosítód

function validateInputs(name, height, weight) {
	return name && height && weight && name.length <= 30 && height.length <= 30 && weight.length <= 30;
}

function getData() {
	fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: `op=read&code=${CODE}`
	})
	.then(res => res.json())
	.then(data => {
		let output = "";
		let total = 0, max = 0;

		data.list.forEach(p => {
			output += `ID: ${p.id}<br>Név: ${p.name}<br>Magasság: ${p.height}<br>Súly: ${p.weight}<br><br>`;
			const h = parseInt(p.height) || 0;
			total += h;
			if (h > max) max = h;
		});

		const avg = (total / data.list.length).toFixed(2);
		document.getElementById("dataList").innerHTML = output;
		document.getElementById("stats").innerHTML = `Összeg: ${total}, Átlag: ${avg}, Legnagyobb: ${max}`;
	});
}

function createData() {
	const name = document.getElementById("createName").value;
	const height = document.getElementById("createHeight").value;
	const weight = document.getElementById("createWeight").value;

	if (!validateInputs(name, height, weight)) {
		document.getElementById("createMsg").innerText = "Érvénytelen adat!";
		return;
	}

	const body = `op=create&name=${name}&height=${height}&weight=${weight}&code=${CODE}`;
	sendRequest(body, "createMsg", "Sikeres létrehozás!");
}

function getDataForId() {
	const id = document.getElementById("updateId").value;

	fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: `op=read&code=${CODE}`
	})
	.then(res => res.json())
	.then(data => {
		const item = data.list.find(p => p.id === Number(id));
		if (item) {
			document.getElementById("updateName").value = item.name;
			document.getElementById("updateHeight").value = item.height;
			document.getElementById("updateWeight").value = item.weight;
		} else {
			alert("Nincs ilyen ID.");
		}
	});
}

function updateData() {
	const id = document.getElementById("updateId").value;
	const name = document.getElementById("updateName").value;
	const height = document.getElementById("updateHeight").value;
	const weight = document.getElementById("updateWeight").value;

	if (!validateInputs(name, height, weight)) {
		document.getElementById("updateMsg").innerText = "Érvénytelen adat!";
		return;
	}

	const body = `op=update&id=${id}&name=${name}&height=${height}&weight=${weight}&code=${CODE}`;
	sendRequest(body, "updateMsg", "Sikeres módosítás!");
}

function deleteData() {
	const id = document.getElementById("deleteId").value;
	const body = `op=delete&id=${id}&code=${CODE}`;
	sendRequest(body, "deleteMsg", "Sikeres törlés!");
}

function sendRequest(body, elementId, successMsg) {
	fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body
	})
	.then(res => res.text())
	.then(response => {
		document.getElementById(elementId).innerText = response.includes("1") ? successMsg : "Hiba történt!";
		getData();
	})
	.catch(err => {
		document.getElementById(elementId).innerText = "Hiba történt!";
		console.error(err);
	});
}