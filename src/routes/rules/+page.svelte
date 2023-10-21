<script>
  import snarkdown from 'snarkdown'
  export let data;
  let mark = data.content
</script>
<div class="bg-[url('/Images/rules.webp')] bg-cover bg-center text-center rounded-t-lg">
    <h1 class="font-VT323 text-4xl sm:text-6xl md:text-7xl font-bold text-white py-16 px-16">Reglas Generales</h1>
</div>
<div class="w-full py-2 bg-gray-200 mt-2 rounded-md text-center text-xl">
  {@html snarkdown(mark)}
</div>