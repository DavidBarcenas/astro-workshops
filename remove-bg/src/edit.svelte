<script lang="ts">
  import "two-up-element";
  import { modifiedImage, originalImage } from "./store";
</script>

<two-up>
  <img src={$originalImage} alt="Original image" />
  <img src={$modifiedImage} alt="Image without bg" />
</two-up>

<a download href="/"> Download image without bg </a>
