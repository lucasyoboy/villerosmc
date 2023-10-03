<canvas id="chartCanvas"></canvas>
<script>
    import Chart from 'chart.js'
    import { afterUpdate } from 'svelte';
    import { roundTo  } from '$lib/utils';

    export let data;
    let chartCanvas;
    let ctx;

    afterUpdate(async() => {
            ctx = document.getElementById('chartCanvas')
            if(chartCanvas) chartCanvas.destroy();
			chartCanvas = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.csv.data.map(row => Date.parse(row.Time)),
                    datasets: [
                    {
                        label: 'Precio',
                        data: data.csv.data.map(row => roundTo(row.Price, 2)),
                        fill: false,
                        borderColor: '#FFA332', // Add custom color border (Line)
                        backgroundColor: '#FFA332', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                    },
                    {
                        label: 'Stock',
                        hidden: true,
                        data: data.csv.data.map(row => roundTo(row.Stock, 2)),
                        fill: false,
                        borderColor: '#3B82F6', // Add custom color border (Line)
                        backgroundColor: '#3B82F6', // Add custom color background (Points and Fill)
                        borderWidth: 1, // Specify bar border width
                    }
                    ],
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            ticks: {
                                unit: 'day',
                                min: new Date().setDate(new Date().getDate() - 2),
                                max: new Date(),
                                suggestedMin: 10,
                                suggestedMax: 100
                            }
                        }]
                    }
                }
		});
	});
    

</script>