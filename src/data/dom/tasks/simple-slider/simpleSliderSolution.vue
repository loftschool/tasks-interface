<template>
  <div class="simple-slider-container">
    <a class="arrow" id="left" href="#">←</a>
    <div class="slider">
      <div class="items" id="items">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
      </div>
    </div>
    <a class="arrow" id="right" href="#">→</a>
  </div>
</template>

<script>
const solution = () => {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const items = document.querySelector("#items");
  const computed = window.getComputedStyle(items);

  right.addEventListener("click", function(e) {
    e.preventDefault();
    let currentRight = parseInt(computed.right);

    if (!currentRight) {
      currentRight = 0;
    }

    if (currentRight < 500) {
      items.style.right = currentRight + 100 + "px";
    }
  });

  left.addEventListener("click", function(e) {
    e.preventDefault();
    let currentRight = parseInt(computed.right);

    if (!currentRight) {
      currentRight = 0;
    }

    if (currentRight > 0) {
      items.style.right = currentRight - 100 + "px";
    }
  });
};

const solution2 = () => {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const items = document.querySelector("#items");
  const computed = window.getComputedStyle(items);

  const minRight = 0;
  const maxRight = 500;
  const step = 100;
  let currentRight = 0;

  items.style.right = currentRight;

  right.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentRight < maxRight) {
      currentRight += step;
      items.style.right = currentRight + "px";
    }
  });

  left.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentRight > minRight) {
      currentRight -= step;
      items.style.right = currentRight + "px";
    }
  });
};

const solution4 = () => {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const itemsList = document.querySelector("#items");
  const computed = window.getComputedStyle(itemsList);
  const items = document.querySelectorAll(".item");

  const minRight = 0;
  const step = parseInt(getComputedStyle(items[0]).width);
  const preShownItems = 300 / step;
  const maxRight = (items.length - preShownItems) * step;

  let currentRight = 0;

  itemsList.style.right = currentRight;

  right.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentRight < maxRight) {
      currentRight += step;
      itemsList.style.right = currentRight + "px";
    }
  });

  left.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentRight > minRight) {
      currentRight -= step;
      itemsList.style.right = currentRight + "px";
    }
  });
};

const solution3 = () => {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const items = document.querySelector("#items");

  right.addEventListener("click", function(e) {
    loop("right", e);
  });

  left.addEventListener("click", function(e) {
    loop("left", e);
  });

  function loop(direction, e) {
    e.preventDefault();
    if (direction === "right") {
      items.appendChild(items.firstElementChild);
    } else {
      items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
  }
};

export default {
  mounted: () => solution2()
};
</script>

<style lang="scss" scoped>
a,
a:visited,
a:active,
a:focus {
  color: #0091d9;
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  color: #ff6163;
}

.simple-slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  font-size: 30px;
}

.slider {
  display: flex;
  width: 300px;
  overflow: hidden;
  margin: 0 10px;
}

.items {
  display: flex;
  position: relative;
  color: #444;
  font-size: 30px;
  will-change: right;
  transition: right 0.3s;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: papayawhip;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 1px solid #444;
}
</style>