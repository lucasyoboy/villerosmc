<script>
    export let data;
    import {page} from '$app/stores';
    import { Icon } from 'svelte-materialdesign-icons';
    import { afterNavigate, disableScrollHandling } from '$app/navigation';

    afterNavigate(() => {
        disableScrollHandling();
    });
</script>
<div class="bg-[url('/Images/market.webp')] bg-cover bg-bottom text-center rounded-t-lg">
    <h1 class="font-VT323 text-4xl sm:text-6xl md:text-7xl font-bold text-white py-16 px-16">Mercado negro</h1>
</div>
<div class=" flex flex-col lg:flex-row gap-2">
    <section class="w-full lg:w-3/12 py-2">
        <div class="flex flex-col gap-2">
            <a class=" bg-mine-shaft-950 p-3 flex flex-row items-center gap-2 rounded-md" href="/market">
                <img alt="logo" src="/Icons/logo.svg" class="h-12 w-12"/>
                <div class=" bg-mine-shaft-950 flex flex-col items-start text-white">
                    <span class="text-xl font-medium uppercase">mercado negro</span>
                    <p>VillerosMC</p>
                </div>
            </a>
            <div class="bg-gray-200 p-2">
                {#each data.items as item}
                    <a class="p-1 flex flex-row items-center gap-1" class:bg-mine-shaft-950={$page.route.id === '/market/'+item } href="/market/{item.id}">
                        <img src="{item.image}"/>
                        <span>{item.name}</span>
                    </a>
                {/each}
                </div>
            <script>
                
            </script>
            <div class="bg-blaze-orange-400 text-white">
                <a class="p-3 flex flex-row items-center gap-1 justify-center" href="/market">
                    <Icon name="plus" size="30"/>
                    <span class="text-lg">Solicitar mas Items</span>
                </a>
            </div>
        </div>
    </section>
    <section class="w-full lg:w-9/12 py-2 h-full bg-gray-200 mt-2 rounded-md">
        <slot/>
    </section>
</div>