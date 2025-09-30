;(()=>{
  const links = [
    {
      title: "Spotify",
      url: "https://www.spotify.com/",
      description: "description",
      summary: "summary",
      cover: "res/cover/cover.webp"
    },
    {
      title: "SoundCloud",
      url: "https://soundcloud.com/",
      description: "description",
      summary: "summary",
      cover: "res/cover/cover.webp"
    }
  ];
  window.linkStore = window.linkStore || {};
  window.linkStore['music'] = links;
})();
