<script lang="ts">
  import Dropzone from "dropzone";
  import "dropzone/dist/dropzone.css";

  import { onMount } from "svelte";
  import { ImageStatus } from "../types.d";
  import { imageStatus, originalImage } from "./store";

  const cloudinaryURL = import.meta.env.VITE_URL;

  onMount(() => {
    const dropzone = new Dropzone("#dropzone", {
      uploadMultiple: false,
      acceptedFiles: "image/*",
      maxFiles: 1,
    });

    dropzone.on("sending", (file, xhr, formData) => {
      imageStatus.set(ImageStatus.UPLOADING);
      formData.append("upload_preset", import.meta.env.VITE_NAME);
      formData.append("timestamp", Date.now() / 1000);
      formData.append("api_key", import.meta.env.VITE_API_KEY);
    });

    dropzone.on("success", (file, response) => {
      imageStatus.set(ImageStatus.DONE);
      const { secure_url } = response;
      originalImage.set(secure_url);
      console.log(response);
    });

    dropzone.on("error", (file, response) => {
      console.error(response);
    });
  });
</script>

<form
  action={cloudinaryURL}
  id="dropzone"
  class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex flex-col items-center justify-center"
>
  {#if $imageStatus === ImageStatus.READY}
    <button
      class="pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-3"
      >Upload image</button
    >

    <strong class="text-lg mt-4 text-gray-400">or drop a file</strong>
  {/if}
  {#if $imageStatus === ImageStatus.UPLOADING}
    <strong class="text-lg mt-4 text-gray-400">Uploading files...</strong>
  {/if}
</form>
