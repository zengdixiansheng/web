;(()=>{
  const links = [
    {
      title: "YouTube",
      url: "https://www.youtube.com/",
      description: "description",
      summary: "summary",
      cover: "res/cover/cover.webp"
    },
    {
      title: "Bilibili",
      url: "https://www.bilibili.com/",
      description: "description",
      summary: "summary",
      cover: "res/cover/cover.webp"
    }
  ];
  window.linkStore = window.linkStore || {};
  window.linkStore['video'] = links;
})();
