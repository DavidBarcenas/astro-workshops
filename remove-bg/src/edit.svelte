<script lang="ts">
  import "two-up-element";
  import { modifiedImage, originalImage } from "./store";

  let processingImage = true;
  const loadImage = (url: string) => {
    const img = new Image();
    img.src = $modifiedImage;
    img.onload = () => {
      processingImage = false;
    };
    img.onerror = () => {
      setTimeout(() => loadImage(url), 1000);
    };
  };

  $: {
    loadImage($modifiedImage);
  }
</script>

<two-up>
  <img src={$originalImage} alt="Original image" />
  {#if processingImage}
    <div class="flex flex-col justify-center items-center">
      <p class="text-center mt-4">Procesando imagen...</p>
    </div>
  {:else}
    <img src={$modifiedImage} alt="Image without bg" />
  {/if}
</two-up>

<a download href="/"> Download image without bg </a>
