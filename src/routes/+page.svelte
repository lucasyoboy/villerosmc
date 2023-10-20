<script>
  import { notifications } from '$lib/stores';
  import { Icon } from 'svelte-materialdesign-icons';
  import { copy } from 'svelte-copy';

  export let data;
  let discord = data.discord;
  $: data = data.status;
</script>


<div class="container mx-auto bg-cover bg-center rounded-t-lg rounded-b-lg" style="background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/Images/home.webp)">
  <div class="w-full flex flex-wrap items-center justify-between py-32 px-10">
    <div class="w-full lg:w-3/6 text-left">
      <p class="text-xl text-white">SERVIDOR DE MINECRAFT SURVIVAL</p>
      <h1 class="text-5xl md:text-6xl font-semibold uppercase text-blaze-orange-400">VilleroMC</h1>
      <span class="text-lg text-white">En Paraguay, Villerosmc es el servidor de Minecraft más popular, con diversas modalidades y una activa comunidad, la elección principal de los jugadores.</span>
      <div>
        <button class=" bg-blaze-orange-500 hover:bg-blaze-orange-400 text-white py-2 px-6 text-lg rounded-md border-2 border-mine-shaft-200 m-4 ml-0 w-full lg:w-fit inline-block" use:copy={'play.villerosmc.net'} on:svelte-copy={() => notifications.success('Has copiado la IP play.villerosmc.net!', 3000)}><Icon class="inline-block" name="ip"/> Copiar IP</button>
        <a href="/rules" class=" bg-blaze-orange-300 hover:bg-blaze-orange-400 text-black py-2 px-6 text-lg rounded-md border-2 border-mine-shaft-500 m-4 ml-0 w-full inline-block lg:w-fit text-center"><Icon class="inline-block" name="bookmark"/> Reglas</a>
      </div>
    </div>
    <div class="w-full lg:w-3/6 justify-end flex flex-col items-center gap-6 mt-10">
     <img alt="logo" class=" w-44 h-44 lg:block hidden" src="/Icons/logo.svg"/>
     <div class="flex flex-col xl:flex-row justify-between bg-mine-shaft-900 p-2 rounded-lg gap-4 w-full">
      <a class="flex flex-row items-center text-white gap-2" href="https://discord.com/invite/H2dGwz8">
        <img class="w-14 h-14 bg-mine-shaft-600 p-2 rounded-lg" alt="minecraft" src="/Icons/discord.svg"/>
        <div>
          <span class="text-lg font-semibold">DISCORD SERVER</span>
          <p><strong class=" text-blaze-orange-400">{discord.approximate_presence_count} Capo/s</strong> enlinea</p>
        </div>
      </a>
      <a href="#!" class="flex flex-row items-center text-white  gap-2" use:copy={'play.villerosmc.net'} on:svelte-copy={() => notifications.success('Has copiado la IP play.villerosmc.net!', 3000)}>
        <img class="w-14 h-14 bg-mine-shaft-600 p-2 rounded-lg" alt="minecraft" src="/Icons/minecraft.svg"/>
        <div>
          <span class="text-lg font-semibold">MINECRAFT SERVER</span>
          {#if (data.players)}
          <p><strong class=" text-blaze-orange-400">{data.players.online} Capo/s</strong> enlinea</p>
          {/if}
        </div>
      </a>
    </div>
  </div>
  </div>
  <div class="!bg-mine-shaft-950 h-28 m-auto overflow-hidden relative w-full slider rounded-b-lg">
    <div class="slide-track">
      <div class="slide flex items-center justify-center text-mine-shaft-400">
        <Icon class="inline-block" name="bitcoin" width="50" height="50"/> <h1 class="text-4xl">&nbspECONOMIA</h1>
      </div>
      <div class="slide flex items-center justify-center text-mine-shaft-400">
        <Icon class="inline-block" name="pine-tree" width="50" height="50"/> <h1 class="text-4xl">&nbspSURVIVAL</h1>
      </div>
      <div class="slide flex items-center justify-center text-mine-shaft-400">
        <Icon class="inline-block" name="city" width="50" height="50"/> <h1 class="text-4xl">&nbspCITYBUILD</h1>
      </div>
      <div class="slide flex items-center justify-center text-mine-shaft-400">
        <Icon class="inline-block" name="pickaxe" width="50" height="50"/> <h1 class="text-4xl">&nbspSHOP</h1>
      </div>
      <div class="slide flex items-center justify-center text-mine-shaft-400">
        <Icon class="inline-block" name="bitcoin" width="50" height="50"/> <h1 class="text-4xl">&nbspECONOMIA</h1>
      </div>
      <div class="slide flex items-center justify-center text-mine-shaft-400">
        <Icon class="inline-block" name="pine-tree" width="50" height="50"/> <h1 class="text-4xl">&nbspSURVIVAL</h1>
      </div>
      <div class="slide flex items-center justify-center text-mine-shaft-400">
        <Icon class="inline-block" name="city" width="50" height="50"/> <h1 class="text-4xl">&nbspCITYBUILD</h1>
      </div>
      <div class="slide flex items-center justify-center text-mine-shaft-400">
        <Icon class="inline-block" name="pickaxe" width="50" height="50"/> <h1 class="text-4xl">&nbspSHOP</h1>
      </div>
    </div>
  </div>
</div>

