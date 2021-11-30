class simplesharer {
  constructor(media, url, target) {
    this.media = media;
    this.url = url || window.location.href;
    this.target = target || "_blank";
    this.hashtags = [];
    this.text = "";
    this.title = "";
  }

  static Facebook(info = {}) {
    let url = info.url || window.location.href;
    if (!url) {
      return "URL is required";
    }
    shareWindow(`https://www.facebook.com/sharer.php?u=${url}`);
  }
  static Whatsapp(info = {}) {
    let url = info.url || window.location.href;
    if (!url) {
      return "URL is required";
    }
    shareWindow(`whatsapp://send?text=${url}`);
  }
  static Reddit(info = {}) {
    let temp = {};
    temp.url = info.url || window.location.href;
    temp.title = info.title || "";
    if (!temp.url) {
      return "URL is required";
    }
    shareWindow(
      `https://reddit.com/submit?url=${temp.url}&title=${temp.title || ""}`
    );
  }
  static Twitter(info = {}) {
    let temp = {};
    temp.url = info.url || window.location.href;
    temp.text = info.text || "";
    temp.hashtags = info.hashtags || [];
    if (!temp.url) {
      return "URL is required";
    }
    shareWindow(
      `https://twitter.com/intent/tweet?url=${
        temp.url
      }&text=${temp.text.substring(0, 100)}&hashtags=${temp.hashtags.join()}`
    );
  }
  static copy(urlText) {
    let url = urlText || window.location.href;
    if (!url) {
      return "URL is required";
    }
    navigator.clipboard.writeText(url);
  }

  share(media) {
    this[media || this.media]();
  }
  verifyUrl() {
    if (!this.url) {
      return "URL is required";
    }
  }
  facebook() {
    this.verifyUrl();
    this.shareWindow(`https://www.facebook.com/sharer.php?u=${this.url}`);
  }
  reddit() {
    this.verifyUrl();
    this.shareWindow(
      `https://reddit.com/submit?url=${this.url}&title=${this.title}`
    );
  }
  whatsapp() {
    this.verifyUrl();
    this.shareWindow(`whatsapp://send?text=${this.url}`);
  }
  twitter() {
    this.verifyUrl();
    this.shareWindow(
      `https://twitter.com/intent/tweet?url=${
        this.url
      }&text=${this.text.substring(0, 100)}&hashtags=${this.hashtags.join()}`
    );
  }
  copy() {
    this.verifyUrl();
    navigator.clipboard.writeText(this.url);
  }
  shareWindow(url) {
    window.open(
      url,
      this.target,
      this.target === "_blank" &&
        "location,status,scrollbars,resizable,width=500, height=500"
    );
  }
}

function shareWindow(url) {
  window.open(
    url,
    "_blank",
    "location,status,scrollbars,resizable,width=500, height=500"
  );
}

module.exports = {
  simplesharer,
};
