class simplesharer {
  constructor(media, url, target) {
    this.media = media;
    this.append = "";
    this.url = url || CurrentURL();
    this.target = target || "_blank";
    this.hashtags = [];
    this.text = "";
    this.title = "";
  }
  share(media) {
    let temp = media || this.media;
    temp = temp.toLowerCase();
    temp = temp[0].toUpperCase() + temp.substring(1, temp.length);
    this[temp]();
  }
  verifyUrl() {
    if (Boolean(this.append)) {
      this.url = `${this.url}${this.append}`;
    }
    if (!this.url) {
      console.error("URL is required");
      return;
    }
  }
  Facebook() {
    this.verifyUrl();
    this.shareWindow(`https://www.facebook.com/sharer.php?u=${this.url}`);
  }
  Reddit() {
    this.verifyUrl();
    this.shareWindow(
      `https://reddit.com/submit?url=${this.url}&title=${this.title}`
    );
  }
  Whatsapp() {
    this.verifyUrl();
    this.shareWindow(`whatsapp://send?text=${this.url}`);
  }
  Twitter() {
    this.verifyUrl();
    this.shareWindow(
      `https://twitter.com/intent/tweet?url=${
        this.url
      }&text=${this.text.substring(0, 100)}&hashtags=${this.hashtags.join()}`
    );
  }
  Linkedin() {
    this.verifyUrl();
    this.shareWindow(
      `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`
    );
  }
  Copy() {
    this.verifyUrl();
    navigator.clipboard.writeText(this.url);
  }
  shareWindow(url) {
    if (typeof window !== "undefined") {
      window.open(
        url,
        this.target,
        this.target === "_blank" &&
          "location,status,scrollbars,resizable,width=500, height=500"
      );
    }
  }
}

function Verify(info) {
  const temp = {};
  temp.url = info.url || CurrentURL();
  if (info.append) {
    temp.url = `${temp.url}${info.append}`;
  }
  if (!temp.url) {
    console.error("URL is required");
    return;
  }
  return temp;
}

function Facebook(info = {}) {
  const temp = Verify(info);
  shareWindow(`https://www.facebook.com/sharer.php?u=${temp.url}`);
}
function Linkedin() {
  const temp = Verify(info);
  shareWindow(
    `https://www.linkedin.com/sharing/share-offsite/?url=${temp.url}`
  );
}
function Whatsapp(info = {}) {
  const temp = Verify(info);
  shareWindow(`whatsapp://send?text=${temp.url}`);
}
function Reddit(info = {}) {
  const temp = Verify(info);
  temp.title = info.title || "";
  shareWindow(`https://reddit.com/submit?url=${temp.url}&title=${temp.title}`);
}
function Twitter(info = {}) {
  const temp = Verify(info);
  temp.text = info.text || "";
  temp.hashtags = info.hashtags || [];
  shareWindow(
    `https://twitter.com/intent/tweet?url=${
      temp.url
    }&text=${temp.text.substring(0, 100)}&hashtags=${temp.hashtags.join()}`
  );
}
function Copy(info = {}) {
  const temp = Verify(info);
  navigator.clipboard.writeText(temp.url);
}
function CurrentURL() {
  if (typeof window !== "undefined") {
    return window.location.href;
  }
}

function shareWindow(url) {
  if (typeof window !== "undefined") {
    window.open(
      url,
      "_blank",
      "location,status,scrollbars,resizable,width=500, height=500"
    );
  }
}

module.exports = {
  simplesharer,
  Facebook,
  Twitter,
  Reddit,
  Whatsapp,
  Copy,
};
