<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import ProfileHeader from "../components/ProfileHeader.svelte";
  import WordsPanel from "../components/WordsPanel.svelte";
  import { DEFAULT_ITEMS, wordsItems } from "../stores/localStore";
  export let id: string;

  function clearAllWords() {
    wordsItems.update(() => DEFAULT_ITEMS);
  }

  onMount(() => {
    clearAllWords();
  });

  onDestroy(() => {
    clearAllWords();
  });
</script>

<ProfileHeader userId={id} />
<div class="pb-36" />
<div id="classroom">
  <div class="container mx-auto flex flex-wrap gap-4 pb-14 px-4">
    <WordsPanel panelName="verbs" wordsItem={$wordsItems.verbs} />
    <WordsPanel panelName="vocabularies" wordsItem={$wordsItems.vocabularies} />
    <WordsPanel panelName="grammars" wordsItem={$wordsItems.grammars} />
    <WordsPanel panelName="expressions" wordsItem={$wordsItems.expressions} />
  </div>
</div>
