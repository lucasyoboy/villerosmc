<script>
  import { CheckCircle, Power, Users, ServerStack, ChartBar, Link } from 'svelte-heros-v2';
  import { Icon } from 'svelte-materialdesign-icons';
  import Header from '$lib/partials/header.svelte';
  import Toast from '$lib/components/toast.svelte';
  import { MetaTags } from 'svelte-meta-tags'; // Import the MetaTags component.
  import { navigating, page } from '$app/stores'; // Import the page store to access route-specific data.
  import { SyncLoader } from 'svelte-loading-spinners';

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
  <div class="container mx-auto px-5">
    <div class="flex flex-col lg:flex-row gap-6 my-10">
      <section class="w-full lg:w-9/12 rounded-t-lg">
          <slot />
      </section>
      <section class="w-full lg:w-3/12">
        <div class=" bg-mine-shaft-950 rounded-t-lg mb-5">
          <div class="bg-gray-300 text-mine-shaft-950 font-black text-xl uppercase p-4 rounded-t-lg">
            <span>Estado</span>
          </div>
          <div class="flex flex-row items-center p-4 text-gray-300 mb-5">
            {#if data.status.online}
              <CheckCircle size="30" variation="solid" class="text-green-500 "/>
              <span class="uppercase text-green-500 font-bold text-lg">&nbsp;Servidor enlinea</span>
              {:else}
              <Power size="30" variation="solid" class="text-red-500 "/>
              <span class="uppercase text-red-500 font-bold text-lg">&nbsp;Servidor apagado</span>
            {/if}
          </div>
        </div>
        {#if data.status.online}
        <div class=" bg-mine-shaft-950 rounded-t-lg mb-5">
          <div class="bg-gray-300 text-mine-shaft-950 font-black text-xl uppercase p-4 rounded-t-lg">
            <span>Informacion</span>
          </div>
          <div class="p-4 text-gray-300 mb-5 line flex flex-col gap-3">
            <div class="flex flex-row items-center ">
              <Link size="20" variation="solid" class="text-white-500 "/>
              <span class="text-white font-medium text-md">&nbsp;Ip publica: <em>{data.status.hostname}</em></span>
            </div>
            <div class="flex flex-row items-center ">
              <Users size="20" variation="solid" class="text-white-500 "/>
              <span class="text-white font-medium text-md">&nbsp; Jugadores: <em>{data.status.players.online}/{data.status.players.max}</em></span>
            </div>
            <div class="flex flex-row items-center ">
              <ServerStack size="20" variation="solid" class="text-white-500 "/>
              <span class="text-white font-medium text-md">&nbsp;Software: <em>{data.status.software}</em></span>
            </div>
            <div class="flex flex-row items-center ">
              <ChartBar size="20" variation="solid" class="text-white-500 "/>
              <span class="text-white font-medium text-md">&nbsp;Version: <em>{data.status.version}</em></span>
            </div>
          </div>
        </div>
        {/if}
        <a href="https://discord.gg/H2dGwz8">
          <img src="https://discord.com/api/guilds/740701758178984036/widget.png?style=banner2" alt="Discord Banner 2" class="w-full my-4 rounded-md"/>
        </a>
        <a class=" bg-blue-400 flex flex-row justify-center items-center p-4 text-white gap-2 text-xl rounded-md" href="https://servidoresdeminecraft.es/server/vote/BEBgTqnX/play.villerosmc.net">
          <Icon name="vote" size="30"/>
          <span> Votar</span>
        </a>
        <a class="bg-red-500 flex flex-row justify-center items-center p-4 text-white gap-2 text-xl rounded-md my-4" href="https://www.buymeacoffee.com/villerosmc">
          <Icon name="hand-heart" size="30"/>
          <span> Donacion</span>
        </a>
      </section>
    </div>  
  </div>
</body>

  
<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>