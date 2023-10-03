<script>
  import { MagnifyingGlass, Bars3BottomRight, CheckCircle, Power, Users, ServerStack, ChartBar, Link } from 'svelte-heros-v2';
  import { Icon } from 'svelte-materialdesign-icons';
  import Search from '$lib/components/search.svelte';
  import Mobil from '$lib/components/mobil.svelte';
  import { mobil, search } from '$lib/stores';
  import "../app.css";
  import {page} from '$app/stores';
  import {items} from '$lib/navItems';

  export let data;
</script>
<header class="w-full text-white-700 bg-mine-shaft-950 text-white body-font border-b-4 border-zinc-300">
  <nav class="flex flex-col md:flex-row justify-between md:items-center text-center py-0 px-6 w-full shadow-md shadow-blaze-orange-500 relative">
    <div class="flex-row gap-3 items-center uppercase hidden md:flex h-14">
      {#each items as item}
        <a href="{item.url}" class="flex flex-row items-center text-md no-underline font-normal hover:text-blue-dark ml-2 gap-2 h-full" class:active={$page.url.pathname === item.url}><Icon name="{item.icon}" />{item.name}</a>
      {/each}
    </div>
    <a href="#_" on:click={() => (search.set(true))} class="hidden md:block"><MagnifyingGlass size="30"/></a>
    <div class="flex flex-row justify-between items-center md:hidden">
      <div>
        <a href="#_" on:click={() => (search.set(true))}><MagnifyingGlass size="30"/></a>
      </div>
      <div class="bg-mine-shaft-950 rounded-full p-4 -mb-8 shadow-md shadow-mine-shaft-950">
        <img class="h-14 w-14" alt="Inicio" src="/Icons/logo.svg"/>
      </div>
      <div>
        <a href="#_" on:click={() => (mobil.set(true))}><Bars3BottomRight size="30"/></a>
      </div>
    </div>
  </nav>
  <div hidden class="bg-[url('/Images/background.webp')] bg-cover bg-center md:block">
    <div class="flex justify-center items-center py-28">
      <div class="flex flex-row gap-3 bg-mine-shaft-950 p-5 w-5/12 lg:w-4/12 -mr-7 justify-start rounded-md">
        <img class="h-14 w-14" alt="Inicio" src="/Icons/discord.svg"/>
        <div class="flex justify-center flex-col text-left">
          <span class="uppercase font-bold text-md">discord server</span>
          <span class="uppercase text-sm">visitar comunidad</span>
        </div>
      </div>
      <div class="bg-mine-shaft-950 rounded-full p-8">
        <img class="h-20 w-20" alt="Inicio" src="/Icons/logo.svg"/>
      </div>
      <div class="flex flex-row gap-3 bg-mine-shaft-950 p-5 w-5/12 lg:w-4/12 -ml-7 justify-end rounded-md">
        <div class="flex justify-center flex-col text-right">
          <span class="uppercase font-bold text-md">play.villerosmc.net</span>
          <span class="uppercase text-sm">copiar direction</span>
        </div>
        <img class="h-14 w-14" alt="Inicio" src="/Icons/minecraft.svg"/>
      </div>
    </div>
  </div>
</header>

<!-- Header Menu Right -->
<body class="font-kanit">
  <Search/>
  <Mobil/>
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
        <a class="bg-red-500 flex flex-row justify-center items-center p-4 text-white gap-2 text-xl rounded-md" href="https://www.buymeacoffee.com/villerosmc">
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