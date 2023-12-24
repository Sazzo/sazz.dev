<script lang="ts">
  export let slug: string;
  export let name: string;
  export let shortDescription: string;
  export let coverImage: string;
</script>

<a href="/projects/{slug}" class="hover:opacity-80">
  <div
    class="flex flex-col rounded-lg md:w-[420px] md:h-[330px] bg-[#121212] border border-[#2B2B2B]"
  >
    <img
      src="/projects/{coverImage}"
      alt="Project Cover for {name}"
      class="w-full rounded-tl-lg rounded-tr-lg"
    />
    <div class="flex flex-col gap-2 border-t border-[#2B2B2B] px-3 py-5">
      <h1 class="font-bold text-lg">{name}</h1>
      <p class="text-sm">
        {shortDescription}
      </p>
    </div>
  </div>
</a>
