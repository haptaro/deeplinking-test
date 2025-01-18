export function redirectSystemPath({ path, initial }: { path: string, initial: boolean }): string {
    // manipurate the path before passing it to native
    if (initial) {
        console.log('>>> Initial path:', path)
        return path
      }
    
      // Need to write unit test for this function
      return handleUniversalLink(path)
  }

  // Need to write unit test for this function
  function handleUniversalLink(urlString: string): string {  
    console.log('>>> Universal link:', urlString)
    try {
      // do some validatoin here

      return urlString
    } catch (error) {
      return '+not-found';
    }
  }
