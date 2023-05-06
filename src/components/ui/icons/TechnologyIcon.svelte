<script lang="ts">
  import DockerIcon from "./tech/DockerIcon.svelte";
  import FastifyIcon from "./tech/FastifyIcon.svelte";
  import GhActionIcon from "./tech/GhActionIcon.svelte";
  import GolangIcon from "./tech/GolangIcon.svelte";
  import MongoDbIcon from "./tech/MongoDBIcon.svelte";
  import NestJsIcon from "./tech/NestJSIcon.svelte";
  import NextJsIcon from "./tech/NextJSIcon.svelte";
  import NodeIcon from "./tech/NodeIcon.svelte";
  import RustIcon from "./tech/RustIcon.svelte";
  import SvelteIcon from "./tech/SvelteIcon.svelte";
  import TypeScriptIcon from "./tech/TypeScriptIcon.svelte";

  export let technology: string;
  export let className: string = "";
  export let style: string = "";

  const technologiesIcons = [
    {
      name: "node",
      icon: NodeIcon,
    },
    {
      name: "typescript",
      icon: TypeScriptIcon,
    },
    {
      name: "gh-actions",
      icon: GhActionIcon,
    },
    {
      name: "docker",
      icon: DockerIcon,
    },
    {
      name: "mongodb",
      icon: MongoDbIcon,
    },
    {
      name: "golang",
      icon: GolangIcon,
    },
    {
      name: "sveltekit",
      icon: SvelteIcon,
    },
    {
      name: "rust",
      icon: RustIcon,
    },
    {
      name: "nextjs",
      icon: NextJsIcon,
    },
    {
      name: "fastify",
      icon: FastifyIcon,
    },
    {
      name: "nestjs",
      icon: NestJsIcon,
    },
    {
      name: "svelte",
      icon: SvelteIcon,
    },
  ];
  const technologyIcon = technologiesIcons.find(
    (tech) => tech.name === technology
  );
</script>

<svelte:component this={technologyIcon.icon} class={className} {style} />
