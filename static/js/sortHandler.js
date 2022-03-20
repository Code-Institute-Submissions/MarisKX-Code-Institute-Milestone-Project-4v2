$('#sort-selector').change(function() {
    var selector = $(this);
    var currentUrl = new URL(window.location);

    var selectedVal = selector.val();
    if(selectedVal != "reset"){
        var sortName = selectedVal.split("_")[0];
        if (sortName == "size"){
          sort = "size__full_size_sort";
          }
        else if (sortName == "manufacturer"){
          sort = "manufacturer__name";
          }
        else {
          sort = sortName;
        }
          var direction = selectedVal.split("_").pop();

          currentUrl.searchParams.set("sort", sort);
          currentUrl.searchParams.set("direction", direction);

          window.location.replace(currentUrl);
    } else {
        currentUrl.searchParams.delete("sort");
        currentUrl.searchParams.delete("direction");

        window.location.replace(currentUrl);
    }
})