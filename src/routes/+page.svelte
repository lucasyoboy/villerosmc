<script>
  import Search from '$lib/components/search.svelte'
</script>

<!-- Header Menu Right -->
<body class="font-kanit">
  <Search/>
  <div class="container mx-auto px-5">
    <div class="flex flex-col lg:flex-row gap-6 mt-10">
      <section class="w-full lg:w-9/12 rounded-t-lg">
        <div class="bg-[url('/Images/banner.webp')] bg-center text-center  rounded-t-lg">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white py-32 px-16">VILLEROSMC EL MEJOR SERVIDOR DE PY.</h1>
        </div>
        <div class=" bg-gray-300 flex flex-col md:flex-row items-center justify-center p-5">
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
            <p class="mt-4 text-xl">Si soy honesto, no hay un nosotros. Todavía soy un estudiante regular y quería crear un servidor de Minecraft. Algunos amigos me ayudaron y juntos pudimos crear este servidor. Pero siempre estoy abierto a nuevos ayudantes y me gusta dar la bienvenida a nuevas personas que quieran crear un servidor genial en su tiempo libre.</p>
          </div>
        </div>
      </section>
      <section class="w-full lg:w-3/12">
        <div class=" bg-neutral-800 rounded-t-lg">
          <div class="bg-gray-300 text-neutral-800 font-black text-xl uppercase p-4 rounded-t-lg">
            <span>Estado</span>
          </div>
          <div class="p-4 text-gray-300">
            <p>Proximamente</p>
          </div>
        </div>
      </section>
    </div>  
  </div>
</body>
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>