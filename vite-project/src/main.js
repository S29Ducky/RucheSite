import Chart from "chart.js/auto";

const temp = document.querySelector("#temp");
const flow = document.querySelector("#flow");
const flowMoyenne = document.querySelector("#flowMoyenne");

async function appelTab1() {
	const appel = await fetch("http://10.69.0.140:3000/history/honey", {
		method: "GET",
	});
	const data = await appel.json();
	let newArr = [];

	for (let i = 0; i < 7; i++) {
		newArr.push(data[i].weight);
	}
	console.log(newArr);
	return newArr;
}

async function tab1() {
	const ctx = document.getElementById("myChart");

	const dataHistory = await appelTab2();

	const labels = [
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
		"Dimanche",
	];
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Miel produit (kg)",
				data: dataHistory,
				fill: false,
				borderColor: "rgb(240, 183, 59)",
				tension: 0.1,
				pointRadius: 5,
				pointBackgroundColor: "rgb(240, 183, 59)",
			},
		],
	};

	const config = {
		type: "line",
		data: data,
		options: {
			responsive: true,
			plugins: {
				legend: {
					display: true,
				},
			},
		},
	};
	new Chart(ctx, config);
}

tab1();

async function temperature() {
	const tempAppel = await fetch("http://10.69.0.140:3000/live/temperature", {
		method: "GET",
	});
	const data = await tempAppel.json();
	temp.textContent = data.degree + "°C";

	if (data.degree < 10) {
		temp.style.backgroundColor = "#2e5cb8";
	} else if (data.degree >= 10 && data.degree < 20) {
		temp.style.backgroundColor = "#00cc44";
	} else if (data.degree >= 20 && data.degree < 30) {
		temp.style.backgroundColor = "#e65c00";
	} else {
		temp.style.backgroundColor = "#cc0000";
	}
}
temperature();

async function flowBee() {
	const FlowAppel = await fetch("http://10.69.0.140:3000/live/flow", {
		method: "GET",
	});
	const data = await FlowAppel.json();
	flow.textContent = data.count;
}
flowBee();

async function flowMoyenneBee() {
	const FlowMoyenneAppel = await fetch("http://10.69.0.140:3000/history/flow", {
		method: "GET",
	});
	const data = await FlowMoyenneAppel.json();
	let somme = 0;
	let newArr = [];

	for (let i = 0; i < data.length; i++) {
		newArr.push(data[i].count);
	}

	for (let i = 0; i < newArr.length; i++) {
		somme += newArr[i];
	}
	let result = somme / newArr.length;
	console.log(result);
	flowMoyenne.textContent = `Prédiction: ${result.toFixed(2)}`;
}

flowMoyenneBee();

async function appelTab2() {
	const appel = await fetch("http://10.69.0.140:3000/history/honey", {
		method: "GET",
	});
	const data = await appel.json();
	let newArr = [];

	for (let i = 0; i < data.length; i++) {
		newArr.push(data[i].weight);
	}
	console.log(newArr);
	return newArr;
}

async function tab2() {
	const ctx = document.querySelector("#TabHistorique");

	const dataHistory = await appelTab2();

	console.log(dataHistory);

	const label = [
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
		"Dimanche",
		"lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
		"Dimanche",
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
		"Dimanche",
		"lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
		"Dimanche",
	];

	const data = {
		labels: label,
		datasets: [
			{
				label: "Miel produit (kg)",
				data: dataHistory,
				backgroundColor: [
					"rgb(240, 183, 59)",
					"rgb(240, 183, 59)",
					"rgb(240, 183, 59)",
					"rgb(240, 183, 59)",
					"rgb(240, 183, 59)",
					"rgb(240, 183, 59)",
					"rgb(240, 183, 59)",
					"rgb(204, 0, 0)",
					"rgb(204, 0, 0)",
					"rgb(204, 0, 0)",
					"rgb(204, 0, 0)",
					"rgb(204, 0, 0)",
					"rgb(204, 0, 0)",
					"rgb(204, 0, 0)",
					"rgb(0, 204, 68)",
					"rgb(0, 204, 68)",
					"rgb(0, 204, 68)",
					"rgb(0, 204, 68)",
					"rgb(0, 204, 68)",
					"rgb(0, 204, 68)",
					"rgb(0, 204, 68)",
					"rgb(46, 92, 184)",
					"rgb(46, 92, 184)",
					"rgb(46, 92, 184)",
					"rgb(46, 92, 184)",
					"rgb(46, 92, 184)",
					"rgb(46, 92, 184)",
					"rgb(46, 92, 184)",
				],
				borderWidth: 1,
				borderRadius: 6,
			},
		],
	};
	const config = {
		type: "bar",
		data: data,
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	};

	new Chart(ctx, config);
}

tab2();

let abeilleJour1 = document.querySelector("#nbr-abeille1");
let abeilleJour2 = document.querySelector("#nbr-abeille2");
let abeilleJour3 = document.querySelector("#nbr-abeille3");
let abeilleJour4 = document.querySelector("#nbr-abeille4");
let abeilleJour5 = document.querySelector("#nbr-abeille5");
let abeilleJour6 = document.querySelector("#nbr-abeille6");
let abeilleJour7 = document.querySelector("#nbr-abeille7");

async function flowBeePerDay() {
	const FlowAppel = await fetch("http://10.69.0.140:3000/history/flow", {
		method: "GET",
	});
	const data = await FlowAppel.json();

	let newArr = [];

	for (let i = 0; i < data.length; i++) {
		newArr.push(data[i].count);
	}

	abeilleJour1.textContent = newArr[0];
	abeilleJour2.textContent = newArr[1];
	abeilleJour3.textContent = newArr[2];
	abeilleJour4.textContent = newArr[3];
	abeilleJour5.textContent = newArr[4];
	abeilleJour6.textContent = newArr[5];
	abeilleJour7.textContent = newArr[6];
}
flowBeePerDay();

let mielJour1 = document.querySelector("#nbr-rendement1");
let mielJour2 = document.querySelector("#nbr-rendement2");
let mielJour3 = document.querySelector("#nbr-rendement3");
let mielJour4 = document.querySelector("#nbr-rendement4");
let mielJour5 = document.querySelector("#nbr-rendement5");
let mielJour6 = document.querySelector("#nbr-rendement6");
let mielJour7 = document.querySelector("#nbr-rendement7");

async function honeyPerDay() {
	const FlowAppel = await fetch("http://10.69.0.140:3000/history/honey", {
		method: "GET",
	});
	const data = await FlowAppel.json();

	let newArr = [];

	for (let i = 0; i < data.length; i++) {
		newArr.push(data[i].weight);
	}

	mielJour1.textContent = newArr[0] + " Kg";
	mielJour2.textContent = newArr[1] + " Kg";
	mielJour3.textContent = newArr[2] + " Kg";
	mielJour4.textContent = newArr[3] + " Kg";
	mielJour5.textContent = newArr[4] + " Kg";
	mielJour6.textContent = newArr[5] + " Kg";
	mielJour7.textContent = newArr[6] + " Kg";
}
honeyPerDay();

let mielSemaine = document.querySelector("#mielMoyenne");

async function honeyPerWeek() {
	const FlowAppel = await fetch("http://10.69.0.140:3000/history/honey", {
		method: "GET",
	});
	const data = await FlowAppel.json();
	let somme = 0;
	let newArr = [];

	for (let i = 0; i < 7; i++) {
		newArr.push(data[i].weight);
	}

	for (let i = 0; i < newArr.length; i++) {
		somme += newArr[i];
	}
	let result = somme / newArr.length;
	mielSemaine.textContent = result.toFixed(2) + " Kg";
}
honeyPerWeek();

let abeilleSemaine = document.querySelector("#AbeillesMoyenne");

async function beesPerWeek() {
	const FlowAppel = await fetch("http://10.69.0.140:3000/history/flow", {
		method: "GET",
	});
	const data = await FlowAppel.json();
	let somme = 0;
	let newArr = [];

	for (let i = 0; i < 7; i++) {
		newArr.push(data[i].count);
	}

	for (let i = 0; i < newArr.length; i++) {
		somme += newArr[i];
	}
	let result = somme / newArr.length;
	abeilleSemaine.textContent = result;
}
beesPerWeek();

let tempSemaine = document.querySelector("#TempMoyenne");

async function tempPerWeek() {
	const FlowAppel = await fetch("http://10.69.0.140:3000/history/temperature", {
		method: "GET",
	});
	const data = await FlowAppel.json();
	let somme = 0;
	let newArr = [];

	for (let i = 0; i < 7; i++) {
		newArr.push(data[i].degree);
	}

	for (let i = 0; i < newArr.length; i++) {
		somme += newArr[i];
	}
	let result = somme / newArr.length;
	tempSemaine.textContent = result.toFixed(2) + " °C";
}
tempPerWeek();
