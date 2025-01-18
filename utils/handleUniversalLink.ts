export function handleUniversalLink(urlString: string): string {  
    console.log('>>> Universal link:', urlString)
    try {
      // do some validatoin here
      if (urlString.includes("abcde")) {
        return "my-deeplinking-app://test"
      } else {
        return urlString
      }

      return urlString
    } catch (error) {
      return '+not-found';
    }
  }
