import Chart from "chart.js/auto";

const temp = document.querySelector("#temp");

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

new Chart(ctx, config);
}
tab1();



async function temperature() {
	const tempAppel = await fetch("http://10.69.0.140:3000/live/temperature", {
		method: "GET",
	})
	const data = await tempAppel.json()
	console.log(data)
	temp.textContent = data.degree + "°C"
}

temperature()
















function tab2() {

const ctx = document.querySelector("#TabHistorique");

const label = [
	"Lundi",
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
			label: "My First Dataset",
			data: [65, 59, 80, 81, 56, 55, 40],
			backgroundColor: [
				"rgb(240, 183, 59)",
				"rgb(240, 183, 59)",
				"rgb(240, 183, 59)",
				"rgb(240, 183, 59)",
				"rgb(240, 183, 59)",
				"rgb(240, 183, 59)",
				"rgb(240, 183, 59)",
			],
			borderWidth: 1,
      borderRadius: 10,
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


tab2()