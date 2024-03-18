<script>
    import { Icon } from 'svelte-materialdesign-icons';
    import { notifications } from '$lib/stores';
    import { copy } from 'svelte-copy';
    export let data;

    function formatDate(dateString) {
        var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        var date = new Date(dateString);
        
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        
        return day + ". " + months[monthIndex] + " " + year;
    }

</script>

<div class=" bg-mine-shaft-950">
    <div class="w-full bg-cover bg-[url('/Images/account.webp')] bg-right-bottom">
        <div class="w-full h-full backdrop-blur-sm p-5 sm:p-10">
            <div class="flex flex-row items-center justify-between py-1">
                <div class="flex flex-row items-center gap-5">
                    <img alt="avatar" src="https://mc-heads.net/head/.stats.player_uuid}" class="bg-gray-300 w-16 sm:w-20 md:w-22 rounded-md p-2"/>
                    <div class="flex flex-col text-gray-300 ">
                        <span class="text-2xl sm:text-3xl font-semibold md:text-4xl">{data.user.username}</span>
                        <p class="font-light text-sm sm:text-md md:text-lg">Miembro deste {formatDate(data.user.created)}</p>
                    </div>
                </div>
                <div class="flex flex-col justify-between h-full">
                    <a href="#!" class="border-2 border-mine-shaft-400 bg-mine-shaft-700 bg-opacity-50 p-0.5 rounded-md text-sm text-gray-300">Copiar enlace de cuenta</a>
                    <button>Discord</button>
                </div>
            </div>
        </div>
        <div class="bg-mine-shaft-950 px-5">
            <h1>Helo</h1>
        </div>
    </div>
</div>