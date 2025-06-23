import Chart from "chart.js/auto";

const temp = document.querySelector("#temp");
const flow = document.querySelector("#flow");
const flowMoyenne = document.querySelector("#flowMoyenne");

function tab1() {
	const ctx = document.getElementById("myChart");

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
				data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
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

	async function AppelTb1() {
		const appel = await fetch("http://10.69.0.140:3000/history/honey", {
			method: "GET",
		});
		const data = await appel.json();
	}

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
	flowMoyenne.textContent = `Prédiction: ${data.count}`;
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
		somme += nombres[i];
	}
	let newSomme = 
	// flowMoyenne.textContent = `Prédiction: ${data.count}`;
}

flowMoyenneBee();

async function appelTab2() {
	const appel = await fetch("http://10.69.0.140:3000/history/honey", {
		method: "GET",
	});
	const data = await appel.json();
	let newArr = [];

	for (let i = 0; i < data.length; i++) {
		newArr.push(data[i].weigth);
	}
}

function tab2() {
	appelTab2();

	const ctx = document.querySelector("#TabHistorique");

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
				data: [
					0, 2, 4, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,
					34, 36, 38, 40, 42, 44, 46, 48, 50,
				],
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
