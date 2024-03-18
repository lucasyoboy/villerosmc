<script>

import { Icon } from 'svelte-materialdesign-icons';
import Error from '$lib/components/error.svelte'

export let data;
// Holds table sort state.  Initialized to reflect table sorted by id column ascending.
let sortBy = {col: "player_kills", ascending: true};

$: sort = (column) => {
    
    if (sortBy.col == column) {
        sortBy.ascending = !sortBy.ascending
    } else {
        sortBy.col = column
        sortBy.ascending = true
    }
    
    // Modifier to sorting function for ascending or descending
    let sortModifier = (sortBy.ascending) ? 1 : -1;
    
    let sort = (a, b) => 
        (a[column] < b[column]) 
        ? -1 * sortModifier 
        : (a[column] > b[column]) 
        ? 1 * sortModifier 
        : 0;
    
    data.leaderboard = data.leaderboard.sort(sort);
}

function isOnline(n) {
        if(n === 'yes'){
            return ''
        }else{
            return '<span class="bg-green-600 text-xs text-gray-200 px-1 rounded-md">ONLINE</span>'
        }
    }

</script>


<div class=" bg-mine-shaft-950">
    <div class="w-full flex h-48 bg-cover bg-[url('https://png.pngtree.com/background/20230610/original/pngtree-large-mansion-in-minecraft-with-lights-picture-image_3054531.jpg')] bg-bottom">
        <div class="m-5 text-blaze-orange-500">
            <a href="/">/ inicio</a>&nbsp;/&nbsp;<a href="/leaderboards">clasificaciónes</a>
        </div>
    </div>
    <div class="md:mx-10 bg-mine-shaft-900 md:rounded-md">
        <div class="-mt-10 flex flex-row items-center justify-between p-5">
            <div class="flex flex-row items-center justify-center w-full gap-2">
                <Icon name="podium" class="w-14 h-14 text-blaze-orange-500"/>
                <h1 class="text-4xl uppercase text-gray-300  font-semibold">Clasificaciónes</h1>
            </div>
        </div>
    </div>
    <div class="mx-5 md:mx-10 text-gray-300">
        <div class="py-5">
            <span>Clasificaciones de todos los Top 10 jugadores del servidor actualizadas através de nuestra base de datos. 
            En caso de encontrar información incorrecta, por favor, <a class="text-blaze-orange-400 font-semibold" href="mailto:lucasheide62@gmail.com">contáctenos.</a></span>
        </div>
        <div class="pb-5">
            {#if data.leaderboard.error}
            <Error/>
            {:else}
                <table class="w-full table-fixed">
                    <thead>
                        <tr class="bg-mine-shaft-700 text-gray-300">
                            <th class="w-fit py-4 px-2 sm:px-4 text-left uppercase">Nombre</th>
                            <th on:click={sort("PLAYER_KILLS")} class="w-fit  py-4 px-2 sm:px-4 text-right uppercase cursor-pointer hover:text-blaze-orange-400">Kills</th>
                            <th on:click={sort("DEATHS")} class="w-fit  py-4 px-2 sm:px-4 text-right uppercase cursor-pointer hover:text-blaze-orange-400">Muertes</th>
                        </tr>
                    </thead>
                    <tbody class="bg-mine-shaft-900">
                        {#each data.leaderboard as row}
                        <tr>
                            <td class="py-4 px-4"><a class="flex flex-row items-center gap-3 hover:text-blaze-orange-400" href="/profile/{row.USERNAME}"><img alt="profile" src="https://mc-heads.net/avatar/475939fb-b5af-3dac-9de7-a601389da505" class="w-8 rounded-md hidden sm:block"/>{row.USERNAME}{@html isOnline(row.player_is_online)}</a></td>
                            <td class="py-4 px-2 sm:px-4 border-gray-200 truncate text-right">{row.player_kills}</td>
                            <td class="py-4 px-4 sm:px-4 border-gray-200 truncate text-right">{row.player_deaths}</td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            {/if}
        </div>
    </div>
</div>