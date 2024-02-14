<script>
    import { Icon } from 'svelte-materialdesign-icons';
    import { notifications } from '$lib/stores';
    import { copy } from 'svelte-copy';
    export let data;

    function toHoursAndMinutes(total) {
        const seconds = Math.floor(total / 20);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        return hours
    }
    function isOnline(n) {
        if(n == 0){
            return '<div><span class="text-red-500">🔴 OFFLINE</span>&nbsp;&nbsp;<span class="text-gray-300 bg-mine-shaft-500 px-1 rounded-md">hace '+calculateTimePassed(data.stats.lastlogin)+'</span></div>'
        }else{
            return '<span class="text-green-500">🟢 ONLINE</span>'
        }
    }

    function calculateTimePassed(epochTime) {
        const elapsed = Math.floor((Date.now() - epochTime) / 1000);
        return elapsed < 60
            ? `${elapsed} segundo/s`
            : elapsed < 3600
            ? `${Math.floor(elapsed / 60)} minuto/s`
            : elapsed < 86400
                ? `${Math.floor(elapsed / 3600)} hora/s`
                : `${Math.floor(elapsed / 86400)} dia/s`;
    }
</script>
{#if data.stats.error}
    <div class=" bg-mine-shaft-950">
        <div class="w-full flex h-48 bg-cover bg-[url('/Images/market.webp')] bg-right-bottom">
            <div class="m-5 text-blaze-orange-500">
                <a href="/">/ inicio</a>&nbsp;/&nbsp;<a href="/search">cuenta</a>&nbsp;/&nbsp;<a href="/">{data.username}</a>
            </div>
        </div>
        <div class="md:mx-10 bg-mine-shaft-900 md:rounded-md">
            <div class="-mt-10 flex flex-row items-center justify-between p-5">
                <div class="flex flex-row items-center justify-center w-full">
                    <Icon name="alert" class="w-8 h-8 text-red-500"/>
                    <span class="text-md text-gray-300 font-normal">&nbsp;No pudimos encontrar este jugador</span>
                </div>
            </div>
        </div>
    </div>
{:else}
{#if data.stats.player_uuid == undefined}
<div class=" bg-mine-shaft-950">
    <div class="w-full flex h-48 bg-cover bg-[url('/Images/market.webp')] bg-right-bottom">
        <div class="m-5 text-blaze-orange-500">
            <a href="/">/ inicio</a>&nbsp;/&nbsp;<a href="#!">cuenta</a>&nbsp;/&nbsp;<a href="/profile/{data.username}">{data.username}</a>
        </div>
    </div>
    <div class="md:mx-10 bg-mine-shaft-900 md:rounded-md">
        <div class="-mt-16 flex flex-row items-center justify-between p-5">
            <div class="flex flex-row items-center gap-5">
                <img alt="avatar" src="https://mc-heads.net/head/{data.stats.player_uuid}" class="bg-gray-300 w-20 md:w-28 rounded-md p-2"/>
                <div class="flex flex-col gap-2">
                    <h1 class="text-2xl sm:text-2xl text-gray-300 font-semibold md:text-5xl">{data.username}</h1>
                    {#if data.stats.isLogged >= 0}
                        {@html isOnline(data.stats.isLogged)}
                    {/if}
                </div>
            </div>
        </div>
        </div>
        <div class="py-5 mx-5 md:mx-10 flex flex-col gap-5">
            <div class="bg-mine-shaft-800 rounded-md flex flex-wrap items-center p-2 w-full justify-center text-center">
                <Icon name="alert" class="w-8 h-8 text-red-500"/>
                <span class="text-md text-gray-300 font-normal">&nbsp;No se encontró suficiente información</span>
            </div>
        </div>
    </div>
{:else}
<div class=" bg-mine-shaft-950">
    <div class="w-full flex h-48 bg-cover bg-[url('/Images/market.webp')] bg-right-bottom">
        <div class="m-5 text-blaze-orange-500">
            <a href="/">/ inicio</a>&nbsp;/&nbsp;<a href="/search">cuenta</a>&nbsp;/&nbsp;<a href="/">{data.username}</a>
        </div>
    </div>
    <div class="md:mx-10 bg-mine-shaft-900 md:rounded-md">
        <div class="-mt-16 flex flex-row items-center justify-between p-5">
            <div class="flex flex-row items-center gap-5">
                <img alt="avatar" src="https://mc-heads.net/head/{data.stats.player_uuid}" class="bg-gray-300 w-20 md:w-28 rounded-md p-2"/>
                <div class="flex flex-col gap-2">
                    <h1 class="text-2xl sm:text-2xl text-gray-300 font-semibold md:text-5xl">{data.username}</h1>
                    {@html isOnline(data.stats.isLogged)}
                </div>
            </div>
        </div>
            <div class="flex flex-wrap gap-2 uppercase p-5 pt-0">
                <a href="#!" use:copy={''+data.stats.player_uuid+''} on:svelte-copy={() => notifications.success('Copiado UUID de Lucas_yoboy', 3000)} class="bg-blaze-orange-300 px-1 rounded-lg bg-opacity-40 border font-light border-blaze-orange-600 text-mine-shaft-100">{data.stats.player_uuid}</a> 
            </div>
        </div>
        <div class="py-5 mx-5 md:mx-10 flex flex-col gap-5">
            <div class="flex flex-wrap sm:flex-nowrap gap-5 text-center">
                <div class="bg-mine-shaft-800 rounded-md flex flex-col items-center p-2 w-full justify-center">
                    <Icon name="currency-usd" class="w-20 h-20 text-blaze-orange-500"/>
                    <span class="text-2xl text-mine-shaft-200 font-semibold">{data.stats.money} $</span>
                    <p class="text-md text-mine-shaft-400 font-semibold uppercase -mt-2">Dinero</p>
                </div>
                <div class="bg-mine-shaft-800 rounded-md flex flex-col items-center p-2 w-full justify-center">
                    <Icon name="chevron-triple-up" class="w-20 h-20 text-blaze-orange-500"/>
                    <span class="text-2xl text-mine-shaft-200 font-semibold">{data.stats.primary_group}</span>
                    <p class="text-md text-mine-shaft-400 font-semibold uppercase -mt-2">Rango</p>
                </div>
                <div class="bg-mine-shaft-800 rounded-md flex flex-col items-center p-2 w-full justify-center">
                        <Icon name="skull" class="w-20 h-20 text-blaze-orange-500"/>
                        <span class="text-2xl text-mine-shaft-200 font-semibold">{data.stats.PLAYER_KILLS}</span>
                        <p class="text-md text-mine-shaft-400 font-semibold uppercase -mt-2">Kills</p>
                </div>
                <div class="bg-mine-shaft-800 rounded-md flex flex-col items-center p-2 w-full justify-center">
                    <Icon name="timer-sand-full" class="w-20 h-20 text-blaze-orange-500"/>
                        <span class="text-2xl text-mine-shaft-200 font-semibold">{toHoursAndMinutes(data.stats.PLAY_ONE_MINUTE)} Horas</span>
                        <p class="text-md text-mine-shaft-400 font-semibold uppercase -mt-2">Tiempo jugado</p>
                </div>
            </div>
            <div class="w-full bg-mine-shaft-800 p-5 text-mine-shaft-200 rounded-md">
                <div class="uppercase w-full pb-3 flex justify-between">
                    <span class="text-xl">Muertes</span>
                    <span class="text-blaze-orange-500 text-lg">{data.stats.DEATHS}</span>
                </div>
                <div class="uppercase w-full pb-3 flex justify-between">
                    <span class="text-xl">kills de Mob</span>
                    <span class="text-blaze-orange-500 text-lg">{data.stats.MOB_KILLS}</span>
                </div>
                <div class="uppercase w-full pb-3 flex justify-between">
                    <span class="text-xl">Daño hecho</span>
                    <span class="text-blaze-orange-500 text-lg">{data.stats.DAMAGE_DEALT}</span>
                </div>
                <div class="uppercase w-full pb-3 flex justify-between">
                    <span class="text-xl">Daño recibido</span>
                    <span class="text-blaze-orange-500 text-lg">{data.stats.DAMAGE_TAKEN}</span>
                </div>
                <div class="uppercase w-full flex justify-between">
                    <span class="text-xl">Items encantados</span>
                    <span class="text-blaze-orange-500 text-lg">{data.stats.ITEM_ENCHANTED}</span>
                </div>
            </div> 
        </div>
    </div>
{/if}
{/if}
