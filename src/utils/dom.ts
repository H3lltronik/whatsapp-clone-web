export const handleKeyEnter = (e: any, cb: () => void) => {
    if (e.key === 'Enter' && cb) {
      cb ()
    }
}