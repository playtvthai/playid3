$(document).ready(function () {
  // Init Video.js Player
  const player = videojs("videoPlayer", {
    fluid: true,
    autoplay: true,
    controls: true
  });

  $.getJSON("playlist.json", function (data) {
    const tabs = $("#categoryTabs");
    const content = $("#categoryContent");

    data.categories.forEach((cat, index) => {
      const isActive = index === 0 ? "active" : "";
      tabs.append(`
        <li class="nav-item">
          <a class="nav-link ${isActive}" data-toggle="tab" href="#${cat.id}" role="tab">
            ${cat.name}
          </a>
        </li>
      `);

      let channelList = "";
      cat.channels.forEach(ch => {
        channelList += `
          <li class="list-group-item channel-link" data-url="${ch.url}">
            ▶ ${ch.name}
          </li>
        `;
      });

      content.append(`
        <div class="tab-pane fade ${isActive ? "show active" : ""}" id="${cat.id}" role="tabpanel">
          <ul class="list-group">${channelList}</ul>
        </div>
      `);
    });

    // Auto play first channel
    if (data.categories[0].channels.length > 0) {
      player.src({ src: data.categories[0].channels[0].url, type: "application/x-mpegURL" });
    }

    // Change channel on click
    $(document).on("click", ".channel-link", function () {
      const url = $(this).data("url");
      player.src({ src: url, type: "application/x-mpegURL" });
      player.play();
    });
  });
});