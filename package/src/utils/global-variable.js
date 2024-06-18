import root from 'window-or-global'

export const globalsVar = {
    window: typeof window === 'undefined' ? null : root.window,
    document: typeof document === 'undefined' ? null : root.document
}
