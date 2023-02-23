<script>
  import Dropzone from "dropzone";
  import "dropzone/dist/dropzone.css";

  import { onMount } from "svelte";

  onMount(() => {
    const dropzone = new Dropzone("#dropzone", {
      uploadMultiple: false,
      acceptedFiles: "image/*",
      maxFiles: 1,
    });

    dropzone.on("sending", (file, xhr, formData) => {
      formData.append("upload_preset", "key");
      formData.append("timestamp", Date.now() / 1000);
      formData.append("api_key", "api_key");
    });

    dropzone.on("success", (file, response) => {
      console.log(response);
    });

    dropzone.on("error", (file, response) => {
      console.error(response);
    });
  });
</script>

<form
  action="/target"
  id="dropzone"
  class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center"
>
  <button
    class="pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-3"
    >Upload image</button
  >
</form>
