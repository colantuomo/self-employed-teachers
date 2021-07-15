<script lang="ts">
  import WordsPanel from "../components/WordsPanel.svelte";
  import { wordsItems } from "../stores/localStore";
</script>

<div>
  <div class="flex flex-wrap gap-4 py-14">
    <WordsPanel panelName="verbs" wordsItem={$wordsItems.verbs} />
    <WordsPanel panelName="vocabularies" wordsItem={$wordsItems.vocabularies} />
    <WordsPanel panelName="grammars" wordsItem={$wordsItems.grammars} />
    <WordsPanel panelName="expressions" wordsItem={$wordsItems.expressions} />
  </div>
</div>
