function urlCheck(url) {
    let OldRegex = new RegExp(
      "^(https?|ftp)://" + // protocol
        "([A-Za-z0-9.-]+)" + // domain name
        "(:\\d+)?" + // Optional port number
        "(\\/([A-Za-z0-9.-_~!$&'()*+,;=]+)*)?" + // Path (optional)
        "(\\?[A-Za-z0-9&=_%-]*)?" + // Query string (optional)
        "(#[A-Za-z0-9_-]*)?$" // Fragment identifier (optional)
    ); // Match the full URL
  
    if (OldRegex.test(url)) {
      return true;
    } else {
      return false;
    }
  }
  
  export { urlCheck };
  
