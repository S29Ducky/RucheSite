import Chart from "chart.js/auto";

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
				"rgb(255, 159, 64)",
				"rgb(255, 159, 64)",
				"rgb(255, 159, 64)",
				"rgb(255, 159, 64)",
				"rgb(255, 159, 64)",
				"rgb(255, 159, 64)",
				"rgb(255, 159, 64)",
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