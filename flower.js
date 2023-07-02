onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

    // Show the back button after a 4.5 seconds delay
    setTimeout(function() {
      document.getElementById('backButton').style.display = 'block';
    }, 7500);