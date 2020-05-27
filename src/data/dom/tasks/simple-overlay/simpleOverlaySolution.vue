<template>
  <div class="simple-overlay-container">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem magnam ratione quasi alias adipisci molestias doloribus, provident eum natus rerum, numquam delectus cum at nobis consectetur deserunt perspiciatis eveniet temporibus.</p>
    <button class="btn" id="openOverlay">открыть</button>
    <script type="template" id="overlayTemplate">
      <div class="modal-container">
        <a class="close" href="#">x</a>
        <div class="content"></div>
      </div>
    </script>
  </div>
</template>

<script>
const solution = () => {
  const openButton = document.querySelector("#openOverlay");
  const successOverlay = createOverlay("Привет, <b>loftschool</b>!");
  const body = document.querySelector(".simple-overlay-container");

  openButton.addEventListener("click", function() {
    body.appendChild(successOverlay);
  });

  function createOverlay(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    overlayElement.addEventListener("click", function(e) {
      if (e.target === overlayElement) {
        closeElement.click();
      }
    });

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");
    contentElement.innerHTML = content;

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";
    closeElement.addEventListener("click", function(e) {
      e.preventDefault();
      body.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);

    return overlayElement;
  }
};

const solution2 = () => {
  const openButton = document.querySelector("#openOverlay");
  const successOverlay = createOverlay("Привет, <b>loftschool</b>!");
  const body = document.querySelector(".simple-overlay-container");

  openButton.addEventListener("click", function() {
    body.appendChild(successOverlay);
  });

  function createOverlay(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    const template = document.querySelector("#overlayTemplate");
    overlayElement.innerHTML = template.innerHTML;
    overlayElement.addEventListener("click", function(e) {
      if (e.target === overlayElement) {
        closeElement.click();
      }
    });

    const closeElement = overlayElement.querySelector(".close");
    closeElement.addEventListener("click", function(e) {
      e.preventDefault();
      body.removeChild(overlayElement);
    });

    const contentElement = overlayElement.querySelector(".content");
    contentElement.innerHTML = content;

    return overlayElement;
  }
};

export default {
  mounted: () => solution2()
};
</script>

<style lang="scss" scoped>
.simple-overlay-container {
  height: 500px;
  position: relative;

  &::v-deep {
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fdf6e380;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    }

    .modal-container {
      position: relative;
    }

    .content {
      width: 400px;
      background: #444;
      border-radius: 5px;
      padding: 10px;
      color: #fff;
      margin: 0;
    }

    .close {
      color: #fff;
      position: absolute;
      right: -5px;
      top: -10px;
      background: #d00;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      text-decoration: none;

      &:hover {
        background: #d33;
      }
    }
  }
}

.btn {
  background: #a492e6;
  color: #fff;
  border-radius: 5px;
  padding: 10px 18px;
  outline: none;

  &:hover {
    opacity: .8;
  }
}
</style>