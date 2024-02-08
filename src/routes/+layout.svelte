<script>
  import Header from '$lib/partials/header.svelte';
  import Toast from '$lib/components/toast.svelte';
  import { MetaTags } from 'svelte-meta-tags'; // Import the MetaTags component.
  import { page } from '$app/stores'; // Import the page store to access route-specific data.
  import { Icon } from 'svelte-materialdesign-icons';

  // Create a reactive statement to compute meta tags.
  $: metaTags = {
    titleTemplate: '%s | VillerosMC', // Default title template.
    description: 'Villerosmc es el servidor de Minecraft más popular, con diversas modalidades y una activa comunidad, la elección principal de los jugadores.', // Default description.
    ...$page.data.metaTagsChild // Override with child page meta tags if they exist.
  };


  export let data;
</script>

<MetaTags {...metaTags} />
<Header/>
<Toast />
<body class="font-kanit">
  <div class="container mx-auto">
    <div class="flex flex-col lg:flex-row gap-6 my-6 px-5 md:px-0">
      <section class="w-full lg:w-9/12 rounded-l-lg">
          <slot />
      </section>
      <section class="w-full lg:w-3/12">
        <div class=" bg-gray-300 mb-4 border-l-4 border-blaze-orange-600 rounded-r-md">
          <div class=" text-blaze-orange-600 font-normal text-2xl uppercase p-4">
            <span>Estado</span>
          </div>
          <div class="pb-4 px-4 flex gap-3 flex-col text-lg">
            <div class="flex flex-row justify-between items-center text-mine-shaft-950 uppercase">
              <span>Lobby Servidor</span> <img alt="estado" src="https://status.lucasdev.app/api/badge/14/status"/>
           </div>
           <div class="flex flex-row justify-between items-center text-mine-shaft-950 uppercase">
             <span>Base de Datos</span> <img alt="estado" src="https://status.lucasdev.app/api/badge/15/status"/>
          </div>
          </div>
        </div>
        <div class=" bg-gray-300 mb-4 border-l-4 border-blaze-orange-600 rounded-r-md">
          <div class=" text-blaze-orange-600 font-normal text-2xl uppercase p-4">
            <span>Jugadores enlinea</span>
          </div>
          <div class="pb-4 px-4 flex gap-3 flex-col text-lg">
            <div class="flex flex-row justify-between items-center text-mine-shaft-950 uppercase">
              <span>Minecraft</span> <span class="bg-blaze-orange-400 px-2 rounded-md">{data.status.players.online}/{data.status.players.max}</span>
            </div>
          <div class="flex flex-row justify-between items-center text-mine-shaft-950 uppercase">
             <span>Discord</span><span class="bg-blaze-orange-400 px-2 rounded-md">{data.discord.approximate_presence_count}</span>
          </div>
          </div>
        </div>
        <div class=" bg-gray-300 mb-4 border-l-4 border-blaze-orange-600 rounded-r-md">
          <div class=" text-blaze-orange-600 font-normal text-2xl uppercase p-4">
            <span>Buscar Jugadores</span>
          </div>
          <div class="pb-4 px-4 flex gap-3 flex-col text-lg">
            <div class="flex flex-row justify-between items-center text-mine-shaft-950 uppercase">
              <input class="p-3 w-full text-xl rounded-md text-gray-400 bg-gray-200 border-gray-400" placeholder="Lucas_yoboy"/>
           </div>
          </div>
        </div>
        
        <a class="p-4 bg-white flex flex-row w-full items-center justify-between rounded-lg" href="https://discord.gg/H2dGwz8">
          <div class="flex flex-row w-full items-center">
            <img alt="discord logo" class="w-16 h-16" src="/Icons/discord.png"/>
            <span class="text-3xl">ZonaEpica</span>
          </div>
          <Icon name="chevron-right" color="black" />
        </a>
        
      </section>
      
    </div>  
  </div>
  <div class="bg-mine-shaft-950 flex items-center justify-center h-14 text-white text-lg">
    <span>Copyright © 2024 VillerosMC</span>
  </div>
</body>

  
<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>