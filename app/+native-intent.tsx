import { handleUniversalLink } from '@/utils/handleUniversalLink'

export function redirectSystemPath({ path, initial }: { path: string, initial: boolean }): string {
    // manipurate the path before passing it to native
    if (initial) {
        console.log('>>> Initial path:', path)
        return path
      }
    
      return handleUniversalLink(path)
  }
