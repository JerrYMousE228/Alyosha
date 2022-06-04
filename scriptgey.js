function checkSymbol(kc) /* Передаємо функції код натиснутої клавіші */ {/* Символ “0” має код 48, символ “9” – код 57. Коди всіх десяткових цифр попадають у діапазон від 48 до 57. Якщо kc не попадає в зазначений діапазон, то kc не є кодом цифри, а тому функція повертає значення false. */

   if (kc < 48 || kc > 57)

      return false;

   return true;

}



const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

const normalizePozition = (mouseX, mouseY) => {
   // ? compute what is the mouse position relative to the container element (scope)
   let {
      left: scopeOffsetX,
      top: scopeOffsetY,
   } = scope.getBoundingClientRect();

   scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
   scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

   const scopeX = mouseX - scopeOffsetX;
   const scopeY = mouseY - scopeOffsetY;

   // ? check if the element will go out of bounds
   const outOfBoundsOnX =
      scopeX + contextMenu.clientWidth > scope.clientWidth;

   const outOfBoundsOnY =
      scopeY + contextMenu.clientHeight > scope.clientHeight;

   let normalizedX = mouseX;
   let normalizedY = mouseY;

   // ? normalize on X
   if (outOfBoundsOnX) {
      normalizedX =
         scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
   }

   // ? normalize on Y
   if (outOfBoundsOnY) {
      normalizedY =
         scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
   }

   return { normalizedX, normalizedY };
};


scope.addEventListener("contextmenu", (event) => {
   event.preventDefault();

   const { clientX: mouseX, clientY: mouseY } = event;

   const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

   contextMenu.classList.remove("visible");

   contextMenu.style.top = `${normalizedY}px`;
   contextMenu.style.left = `${normalizedX}px`;

   setTimeout(() => {
      contextMenu.classList.add("visible");
   });
});

scope.addEventListener("click", (e) => {
   // ? close the menu if the user clicks outside of it
   if (e.target.offsetParent != contextMenu) {
      contextMenu.classList.remove("visible");
   }
});




function doAction(actionType) {

   switch (actionType) {

      case "copy":
         var text = window.getSelection().toString();
         navigator.clipboard.writeText(text);
         contextMenu.classList.remove("visible");
         break;

      case "close":
         contextMenu.classList.remove("visible");
         break;

      case "fontIncrease":
         changeFontSize(2);
         contextMenu.classList.remove("visible");
         break;

      case "fontDecrease":
         changeFontSize(-2);
         contextMenu.classList.remove("visible");
         break;

      case "changeBg":
         var x = Math.floor(Math.random() * 256);
         var y = Math.floor(Math.random() * 256);
         var z = Math.floor(Math.random() * 256);
         var bgColor = "rgb(" + x + "," + y + "," + z + ")";

         $('body').css('background', bgColor);

         contextMenu.classList.remove("visible");
         break;

   }

}

var $affectedElements = $("p, h1, h2, h3, h4, h5, h6");
$affectedElements.each(function () {
   var $this = $(this);
   $this.data("orig-size", $this.css("font-size"));
});


function changeFontSize(direction) {
   $affectedElements.each(function () {
      var $this = $(this);
      $this.css("font-size", parseInt($this.css("font-size")) + direction);
   });
}