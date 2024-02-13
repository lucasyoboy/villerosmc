<script>
  import { notifications } from '$lib/stores';
  import { copy } from 'svelte-copy';
  import { Icon } from 'svelte-materialdesign-icons';
</script>


<div class="bg-cover bg-center " style="background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/Images/home.webp)">
  <div class="w-full flex flex-wrap items-center justify-between py-32 px-10 backdrop-blur-sm">
    <div class="w-full lg:w-3/6 text-left">
      <p class="text-xl text-white">SERVIDOR DE MINECRAFT SURVIVAL</p>
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-semibold uppercase text-blaze-orange-400">VilleroMC</h1>
      <span class="text-xl text-white">En Paraguay, Villerosmc es el servidor de Minecraft más popular, con diversas modalidades y una activa comunidad, la elección principal de los jugadores.</span>
      <div class="flex flex-row gap-5 mt-5">
        <input readonly class="p-3 w-4/6 text-xl rounded-md text-white border bg-opacity-20 bg-gray-200 border-gray-400" value="play.villerosmc.net" use:copy={'play.villerosmc.net'} on:svelte-copy={() => notifications.success('Has copiado la IP play.villerosmc.net!', 3000)}/>
      </div>
    </div>
    <div class="w-full lg:w-3/6 justify-end flex flex-col items-center gap-6 mt-10">
     <img alt="logo" class=" w-64 h-64 lg:block hidden" src="/Icons/logo.svg"/>
  </div>
  </div>
</div>
<div class="bg-mine-shaft-950 flex flex-col gap-15">
  <div class="flex flex-col 2xl:flex-row gap-10 p-10">
    <img alt="about us" class="rounded-lg h-52 object-cover" src="https://pt.moyens.net/wp-content/uploads/2021/12/1638866941_Os-5-itens-mais-importantes-para-construir-no-Minecraft-Survival.jpg">
    <div>
      <h1 class="text-4xl text-white font-semibold mb-5 uppercase">Explora, construye y conquista</h1>
      <hr class="border-t-4 border-blaze-orange-600 mb-5">
      <span class=" text-white text-xl ">Ya sea que te guste explorar vastos paisajes, construir impresionantes estructuras o enfrentarte en emocionantes batallas PvP, VillerosMC tiene algo para todos. Nuestros mundos están llenos de desafíos y aventuras esperándote.</span>
    </div>
  </div>
  <div class="flex flex-col 2xl:flex-row gap-10 p-10">
    <div>
      <h1 class="text-4xl text-white font-semibold mb-5 uppercase">Equipo de soporte </h1>
      <hr class="border-t-4 border-blaze-orange-600 mb-5">
      <span class=" text-white text-xl">Nuestro equipo de soporte está siempre disponible para ayudarte, y nos esforzamos por mantener el servidor actualizado con las últimas versiones de Minecraft.</span>
    </div>
    <img alt="about us" class="rounded-lg h-52 object-cover" src="https://help.minecraft.net/hc/static/media/Contact_Us_Form_Banner_Mobile.f4c4f8b76c078d364485.jpg">
  </div>
  <div class="flex flex-col gap-5 p-10 justify-center items-center md:flex-row ">
    <span class="text-blaze-orange-400 text-2xl">Conéctate con nosotros:</span> 
    <a href="https://discord.gg/H2dGwz8"><img alt="discord" src="https://www.svgrepo.com/show/353655/discord-icon.svg" class="h-14"></a>
    <a href="mailto:lucasheide62@gmail.com"><Icon name="email" color="#fff" class="h-14 w-14" /></a>
  </div>
</div>


