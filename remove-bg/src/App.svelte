<script lang="ts">
  import CloudinaryLogo from "./cloudinary-logo.svelte";
  import Upload from "./Upload.svelte";
</script>

<div class="max-w-xl m-auto grid w-full h-screen p-4">
  <header class="flex justify-center py-10">
    <h1 class="text-3xl font-bold text-blue-900 tracking-tighter">
      remove<span class="text-blue-600">bg</span>
    </h1>
  </header>

  <main>
    <Upload />
  </main>

  <footer class="flex justify-center items-center gap-x-2 font-semibold pt-10">
    Hecho con <a href="https://cloudinary" target="_blank" rel="noreferrer">
      <CloudinaryLogo />
    </a>
  </footer>
</div>
