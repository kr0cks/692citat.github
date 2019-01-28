function get() {
    var jesper = prompt("Vad är jesper för nåt?");
    if (jesper == "get" || jesper == "En get" || jesper == "Get") {
        alert("Det är rätt, han är en get!");
      } else {
         alert("APAPAP Det var visst fel!");
         window.location.href = "https://www.youtube.com/watch?v=EaqJgQOVZ9k"
      }
}
get();
