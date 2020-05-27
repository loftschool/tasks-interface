<template>
  <div class="blocks-coloring-container">
    <div class="controls">
      <input type="number" class="amount-selector" />
      <input type="color" class="color-selector" />
    </div>
    <div class="blocks"></div>
  </div>
</template>

<script>
const createBlocksMarkup = amount => {
  let markup = "";
  for (let i = 0; i < amount; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML;
  }

  return markup;
};

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
};

const solution = () => {
  const container = document.querySelector(".blocks-coloring-container");
  const amountSelector = container.querySelector(".amount-selector");
  const colorSelector = container.querySelector(".color-selector");
  const blocksContainer = container.querySelector(".blocks");

  amountSelector.addEventListener("change", e => {
    const amount = e.target.value;

    const blocksMarkup = createBlocksMarkup(amount);

    blocksContainer.innerHTML = blocksMarkup;
  });

  let changed = false;

  colorSelector.addEventListener("change", e => {
    const color = e.target.value;
    const items = blocksContainer.querySelectorAll(".item");

    changed = !changed;

    for (let i = 0; i < items.length; i++) {
      const blockNumber = i + 1;
      const currentBlock = items[i];

      if (changed) {
        if (blockNumber % 2 !== 0) {
          colorTheBlock(currentBlock, color);
        } else {
          colorTheBlock(currentBlock, "#fff");
        }
      } else {
        if (blockNumber % 2 === 0) {
          colorTheBlock(currentBlock, color);
        } else {
          colorTheBlock(currentBlock, "#ffffff");
        }
      }
    }
  });
};

export default {
  mounted() {
    solution();
  }
};
</script>

<style scoped lang="scss">
.controls {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.amount-selector {
  margin-right: 10px;
}

.blocks {
  display: flex;
  flex-wrap: wrap;

  &::v-deep .item {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid black;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>