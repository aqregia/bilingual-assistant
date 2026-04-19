const sourceText = document.getElementById("sourceText");
const translatedText = document.getElementById("translatedText");
const translateBtn = document.getElementById("translateBtn");
const clearBtn = document.getElementById("clearBtn");
const swapBtn = document.getElementById("swapBtn");
const leftTitle = document.getElementById("leftTitle");
const rightTitle = document.getElementById("rightTitle");

let mode = "zh-en";

function updateTitles() {
  if (mode === "zh-en") {
    leftTitle.textContent = "中文输入";
    rightTitle.textContent = "English Output";
    sourceText.placeholder = "先在这里输入你想说的话";
  } else {
    leftTitle.textContent = "English Input";
    rightTitle.textContent = "中文输出";
    sourceText.placeholder = "Type what you want to say here first";
  }
}

translateBtn.addEventListener("click", async () => {
  const text = sourceText.value.trim();
  if (!text) {
    translatedText.textContent = "请先输入内容";
    return;
  }

  // 现在先放占位逻辑，下一步再接真实翻译
  if (mode === "zh-en") {
    translatedText.textContent = "[待接入翻译] " + text;
  } else {
    translatedText.textContent = "[待接入翻译] " + text;
  }
});

clearBtn.addEventListener("click", () => {
  sourceText.value = "";
  translatedText.textContent = "翻译结果会显示在这里";
});

swapBtn.addEventListener("click", () => {
  mode = mode === "zh-en" ? "en-zh" : "zh-en";
  sourceText.value = "";
  translatedText.textContent = "翻译结果会显示在这里";
  updateTitles();
});

updateTitles();