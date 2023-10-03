<script>
    export let data;
</script>

<div class="bg-gray-200 flex flex-wrap items-center p-5 gap-4">
    {#each data.items  as item}
        <a class="p-5 has-tooltip flex flex-col items-center" href="/market/{item.namespacedId}">
            <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>{item.name}</span>
            <img alt="Item" src="{item.img}" class="h-20 w-20">
            <span class="text-lg font-medium">{item.name}</span>
        </a>
    {/each}
</div>