class Simplesharer {
  constructor(socialSite, url, target) {
    this.socialSite = socialSite;
    this.target = target || "_blank";
    this.hashtags = [];
    this.text = "";
    this.title = "";
    if (typeof window !== "undefined") {
      this.url = url || window.location.href;
    }
  }
  share(socialSite) {
    let temp = socialSite || this.socialSite;
    temp = temp.toLowerCase();
    try {
      this[temp]();
    } catch (e) {
      console.error("Invalid parameter");
    }
  }
  verifyUrl() {
    if (!this.url) {
      console.error("URL is required");
      return;
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
  linkedin() {
    this.verifyUrl();
    this.shareWindow(
      `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`
    );
  }

  copy() {
    this.verifyUrl();
    const elem = document.createElement("textarea");
    elem.value = this.url;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  }

  shareWindow(url) {
    if (typeof window !== "undefined") {
      const y = window.top.outerHeight / 2 + window.top.screenY - 500 / 2;
      const x = window.top.outerWidth / 2 + window.top.screenX - 500 / 2;
      window.open(
        url,
        this.target,
        this.target === "_blank" &&
          `location,status,scrollbars,resizable,width=500,height=500,left=${x},top=${y}`
      );
    }
  }
}

function verify(info) {
  const temp = {};
  if (typeof window !== "undefined") {
    temp.url = info.url || window.location.href;
  }
  if (!temp.url) {
    console.error("URL is required");
    return;
  }
  return temp;
}

function cleanString(url) {
  return url
    .replace(/[^A-Za-z|0-9|\s|/]/g, "")
    .replace(/\s/g, "-")
    .toLowerCase();
}

function facebook(info = {}) {
  const temp = verify(info);
  shareWindow(`https://www.facebook.com/sharer.php?u=${temp.url}`);
}
function linkedin(info = {}) {
  const temp = verify(info);
  shareWindow(
    `https://www.linkedin.com/sharing/share-offsite/?url=${temp.url}`
  );
}
function whatsapp(info = {}) {
  const temp = verify(info);
  shareWindow(`whatsapp://send?text=${temp.url}`);
}
function reddit(info = {}) {
  const temp = verify(info);
  temp.title = info.title || "";
  shareWindow(`https://reddit.com/submit?url=${temp.url}&title=${temp.title}`);
}
function twitter(info = {}) {
  const temp = verify(info);
  temp.text = info.text || "";
  temp.hashtags = info.hashtags || [];
  shareWindow(
    `https://twitter.com/intent/tweet?url=${
      temp.url
    }&text=${temp.text.substring(0, 100)}&hashtags=${temp.hashtags.join()}`
  );
}
function copy(url) {
  if (typeof window !== "undefined") {
    url = url || window.location.href;
    try {
      navigator.clipboard.writeText(url);
      const elem = document.createElement("textarea");
      elem.value = url;
      document.body.appendChild(elem);
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
    } catch (e) {
      navigator.clipboard.writeText(url);
    }
  }
}

function shareWindow(url) {
  if (typeof window !== "undefined") {
    const y = window.top.outerHeight / 2 + window.top.screenY - 500 / 2;
    const x = window.top.outerWidth / 2 + window.top.screenX - 500 / 2;
    window.open(
      url,
      this.target,
      this.target === "_blank" &&
        `location,status,scrollbars,resizable,width=500,height=500,left=${x},top=${y}`
    );
  }
}

module.exports = {
  Simplesharer,
  facebook,
  twitter,
  reddit,
  whatsapp,
  copy,
  linkedin,
  cleanString,
};
