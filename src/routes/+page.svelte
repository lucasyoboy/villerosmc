<script>
  import Toast from '$lib/components/toast.svelte';
  import { notifications } from '$lib/stores';
  import { copy } from 'svelte-copy';

  export let data;
  let discord = data.discord;
  $: data = data.status;
  
</script>
<Toast />
<svelte:head>
  <meta name="title" content="VillerosMC | Servidor de Minecraft">
  <meta name="description" content="Villerosmc es el servidor de Minecraft más popular, con diversas modalidades y una activa comunidad, la elección principal de los jugadores.">
  <meta name="keywords" content="Villerosmc,  Minecraft, Servidor, Paraguay, Comunidad">
  <meta name="robots" content="index, nofollow">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="language" content="Spanish">
</svelte:head>

<div class="container mx-auto bg-cover bg-center rounded-t-lg" style="background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/Images/home.webp)">
  <div class="w-full flex flex-wrap items-center justify-between py-32 px-10">
    <div class="w-full lg:w-3/6 text-left">
      <p class="text-xl text-white">SERVIDOR DE MINECRAFT SURVIVAL</p>
      <h1 class="text-5xl md:text-6xl font-semibold uppercase text-blaze-orange-400">VilleroMC</h1>
      <span class="text-lg text-white">En Paraguay, Villerosmc es el servidor de Minecraft más popular, con diversas modalidades y una activa comunidad, la elección principal de los jugadores.</span>
      <div class="m">
        <button class=" bg-blaze-orange-500 hover:bg-blaze-orange-400 text-white py-2 px-6 text-lg rounded-md border-2 border-mine-shaft-200 m-4 ml-0 w-full lg:w-fit" use:copy={'play.villerosmc.net'} on:svelte-copy={() => notifications.success('Has copiado la IP play.villerosmc.net!', 3000)}>Copiar IP</button>
        <button class=" bg-blaze-orange-300 hover:bg-blaze-orange-400 text-black py-2 px-6 text-lg rounded-md border-2 border-mine-shaft-500 m-4 ml-0 w-full lg:w-fit">Ver mas</button>
      </div>
    </div>
    <div class="w-full lg:w-3/6 justify-end flex flex-col items-center gap-6 mt-10">
     <img alt="logo" class=" w-44 h-44 lg:block hidden" src="/Icons/logo.svg"/>
     <div class="flex flex-col xl:flex-row justify-between bg-mine-shaft-900 p-2 rounded-lg gap-4 w-full">
      <a class="flex flex-row items-center text-white  gap-2" href="https://discord.com/invite/H2dGwz8">
        <img class="w-14 h-14 bg-mine-shaft-600 p-2 rounded-lg" alt="minecraft" src="/Icons/discord.svg"/>
        <div>
          <span class="text-lg font-semibold">DISCORD SERVER</span>
          <p>{discord.approximate_presence_count} enlinea</p>
        </div>
      </a>
      <div class="flex flex-row items-center text-white  gap-2">
        <img class="w-14 h-14 bg-mine-shaft-600 p-2 rounded-lg" alt="minecraft" src="/Icons/minecraft.svg"/>
        <div>
          <span class="text-lg font-semibold">MINECRAFT SERVER</span>
          <p>{data.players.online} enlinea</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class=" bg-mine-shaft-100 flex flex-col md:flex-row items-center justify-center p-5">
    <div class="text-center flex flex-col items-center justify-center my-5">
      <img class="w-16 h-16" alt="ping" src="/Icons/service_ping.webp"/>
      <h3 class="text-2xl font-bold uppercase py-5">Ping Bajo</h3>
      <p class="text-lg">Con servidores fuertes y de alta calidad, garantizamos un PING estable y persistente de menos de 50 ms (cable).</p>
    </div>
    <div class="text-center flex flex-col items-center justify-center my-5">
      <img class="w-16 h-16" alt="ping" src="/Icons/service_surival.webp"/>
      <h3 class="text-2xl font-bold uppercase py-5">SOBREVIVENCIA</h3>
      <p class="text-lg">Juega en uno de los servidores de SOBREVIVENCIA más grandes de Paraguay y crea una economía con plugins buenos y configurados.</p>
    </div>
    <div class="text-center flex flex-col items-center justify-center my-5">
      <img class="w-16 h-16" alt="ping" src="/Icons/service_friends.webp"/>
      <h3 class="text-2xl font-bold uppercase py-5">JUEGA CON AMIGOS</h3>
      <p class="text-lg">El servidor está abierto para todos. Juega ahora con hasta 120 jugadores e invita también a tus AMIGOS. Crea comunidades y permite que otros jugadores tambien te ayuden.</p>
    </div>
  </div>
  <div class="flex flex-row items-center p-10 bg-neutral-800 text-white">
    <img class="w-4/12 h-4/12 hidden md:block" alt="Steve about" src="/Icons/about_steve.webp"/>
    <div>
      <h4 class="text-3xl font-bold mb-4">SOBRE NOSOTROS</h4>
      <hr>
      <p class="mt-4 text-xl leading-10">Si soy honesto, no hay un nosotros. Todavía soy un estudiante regular y quería crear un servidor de Minecraft. Algunos amigos me ayudaron y juntos pudimos crear este servidor. Pero siempre estoy abierto a nuevos ayudantes y me gusta dar la bienvenida a nuevas personas que quieran crear un servidor genial en su tiempo libre.</p>
    </div>
  </div>
</div>

