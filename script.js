function clearBtnVisibility(input) {
    const clearBtn = input.nextElementSibling;
    if (input.value.length > -1) {
      clearBtn.style.display = 'block';
    } else {
      clearBtn.style.display = 'none';
    }
  }

  function clearSearch() {
    const input = document.querySelector('.search-box input[type="text"]');
    input.value = '';
    input.focus();
    clearBtnVisibility(input);
  }

  function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-button" and remove the class "active"
    var tablinks = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it to open the default tab
document.getElementById("defaultOpen").click();
