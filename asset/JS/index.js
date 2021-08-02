   // =================Variable Declarations and Assignments=======================
  const colorVariants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const btn = document.getElementById("btn");
  const Color = document.querySelector(".color");

  //=========================== Creation of random hex variations of colors================================
btn.addEventListener("click", () => {
  let variantItems = "#";
  for (let item = 0; item < 6; item++) {
    variantItems += colorVariants[randomizeItems()];
  }
  //============================ Assigning various colors to the body element========================
  Color.textContent = variantItems;
  document.body.style.backgroundColor = variantItems;
});

//=========================== Creation of random variations of colors================================
randomizeItems = () => {
  return Math.floor(Math.random() * colorVariants.length);
}

// ===============Adding action listener and callback function resetAction to reset button============
document.getElementById("reset").addEventListener("click", ()=>{
  resetAction();
});

//============ Definition and assignment of callback function resetAction============================
resetAction = () => {
  document.body.style.backgroundColor ="hsl(205,90%,88%)" ;
  Color.textContent = "Start Again!!!";
  document.querySelector("h2 span").style.color ="hsl(125, 71%, 66%)" ;
}


