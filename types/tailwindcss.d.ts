declare module 'tailwindcss/lib/util/flattenColorPalette' {
  function flattenColorPalette(
    colors: Record<string, unknown>
  ): Record<string, string>;
  export default flattenColorPalette;
}

// The plugin types are already provided by tailwindcss/types
