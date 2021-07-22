<script lang="ts">
  import WordsPanel from "../components/WordsPanel.svelte";
  import { wordsItems } from "../stores/localStore";
  export let id: string;
  console.log(id);
</script>

<div>
  <div class="container mx-auto flex flex-wrap gap-4 pb-14 px-4">
    <WordsPanel panelName="verbs" wordsItem={$wordsItems.verbs} />
    <WordsPanel panelName="vocabularies" wordsItem={$wordsItems.vocabularies} />
    <WordsPanel panelName="grammars" wordsItem={$wordsItems.grammars} />
    <WordsPanel panelName="expressions" wordsItem={$wordsItems.expressions} />
  </div>
</div>
