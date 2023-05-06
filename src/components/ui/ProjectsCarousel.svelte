<script lang="ts">
  import Carousel from "svelte-carousel";
  import projects from "../../data/projects.json";

  import TechnologyIcon from "./icons/TechnologyIcon.svelte";
  import LinkIcon from "./icons/LinkIcon.svelte";

  let carousel: Carousel;
  let currentPageIndex: number = 0;
</script>

<div class="w-[22rem] lg:w-[75rem] lg:h-[520px]">
  <div class="flex flex-row justify-center">
    <div class="hidden lg:flex items-center mr-5">
      <!-- todo: possibly make a separate component for these buttons -->
      <button
        on:click={() => carousel.goToPrev()}
        class="flex items-center justify-center bg-white w-7 h-7 rounded-full"
      >
        <svg
          class="w-6 h-6 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>

    <Carousel
      on:pageChange={(event) => (currentPageIndex = event.detail)}
      bind:this={carousel}
      dots={false}
      arrows={false}
    >
      {#each projects as project}
        <div
          style="background-color: {project.color}; {project.fontColor
            ? `color: ${project.fontColor};`
            : ''}"
          class="flex flex-row rounded-3xl h-[520px] text-left"
        >
          <div class="p-8">
            <h1 class="font-syne font-bold text-4xl lg:text-5xl pb-5">
              {project.name}
            </h1>

            {#each project.description as description}
              <p class="text-base lg:text-lg">{description}</p>
            {/each}

            <h3 class="font-bold text-xl pt-5">Technologies</h3>
            <div class="flex flex-row">
              {#each project.technologies as technology}
                <TechnologyIcon
                  {technology}
                  style={project.fontColor
                    ? `fill: ${project.fontColor};`
                    : "fill: white;"}
                  className="w-6 h-6 mr-2 rounded-sm"
                />
              {/each}
            </div>

            <div class="font-bold pt-8">
              {#each project.links as link}
                <a class="mr-10" href={link.url}>
                  {link.name}
                  <LinkIcon
                    class="inline h-4 w-4"
                    style={project.fontColor
                      ? `stroke: ${project.fontColor};`
                      : "stroke: white;"}
                  />
                </a>
              {/each}
            </div>
          </div>
          {#if project.banner}
            <div>
              <img
                class="hidden lg:inline lg:w-[41rem] lg:h-full"
                src={project.banner}
                alt={project.name}
              />
            </div>
          {/if}
        </div>
      {/each}
    </Carousel>

    <!-- todo: possibly make a separate component for these buttons -->
    <div class="hidden lg:flex items-center ml-5">
      <button
        on:click={() => carousel.goToNext()}
        class="flex items-center justify-center bg-white w-7 h-7 lg:w-10 lg:h-10 rounded-full"
      >
        <svg
          class="w-6 h-6 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>

  {#each projects as _, index}
    {#if currentPageIndex === index}
      <button
        on:click={() => carousel.goTo(index)}
        class="bg-white w-2 h-2 mr-3 mt-5 rounded-[50%]"
      />
    {:else}
      <button
        on:click={() => carousel.goTo(index)}
        class="bg-[#272727] w-2 h-2 mr-3 mt-5 rounded-[50%]"
      />
    {/if}
  {/each}
</div>
