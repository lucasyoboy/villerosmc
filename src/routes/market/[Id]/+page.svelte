<script>
    import Chart from '$lib/components/chart.svelte';
    export let data;
    import { roundTo  } from '$lib/utils';

    console.log(data.csv.data)
</script>

<div class="p-5">
    <div class="flex flex-col md:flex-row gap-4">
        <div class="flex w-full md:w-4/6">
            <div class="flex flex-col items-start gap-2">
                <h2 class="text-5xl font-medium border-b-2">{data.item.name}</h2>
                <hr class=" bg-gray-400 w-full my-2 h-px border-0" />
                <p class="text-lg">{data.item.description}</p>
                <div class="flex flex-wrap gap-4 my-4">
                    <span class=" bg-mine-shaft-950 rounded-lg text-white py-1 ps-1 text-sm">Precio actual <em class="bg-blaze-orange-400 p-2 rounded-lg font-semibold text-md">{roundTo(data.csv.data[data.csv.data.length - 2].Price, 2)} $</em></span>
                    <span class=" bg-mine-shaft-950 rounded-lg text-white py-1 ps-1 text-sm">Stock actual <em class="bg-blue-500 p-2 rounded-lg font-semibold text-md">{roundTo(data.csv.data[data.csv.data.length - 2].Stock, 2)}</em></span>
                </div>
            </div>
        </div>
        <div class="flex w-full md:w-2/6 items-center justify-center border-2 border-gray-400">
            <div class="flex flex-col gap-2 p-2 items-center justify-center w-full">
                <p>{data.item.namespacedId}</p>
                <img alt="image" src="{data.item.image}" class="h-16 w-16"/>
                <table class="w-full table-auto text-sm">
                    <thead>
                        <tr class="text-sm leading-normal">
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-grey-lighter border-b-2 border-gray-300">
                            <td class="py-2 px-4 border-b border-grey-light">Stack cantidad</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">{data.item.stackSize}</td>
                        </tr>
                        <!-- Añade más filas aquí como la anterior para cada autorización pendiente -->
                        <tr class="hover:bg-grey-lighter border-b-2 border-gray-300">
                            <td class="py-2 px-4 border-b border-grey-light">Renovable</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">{data.item.renewable}</td>
                        </tr>
                    </tbody>
            </div>
        </div>
    </div>
    <div class="mt-6">
        <Chart data={data}/>
    </div>
</div>