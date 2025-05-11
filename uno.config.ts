import {presetWind3} from '@unocss/preset-wind3'
import { defineConfig } from 'unocss'


export default defineConfig({
    presets: [
        presetWind3({
            dark: "class"
        }),
    ],
    theme: {
        breakpoints: {
            xxs: '0px',
            xs: '320px',
            sm: '480px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1600px',
        },
    },
    shortcuts: [{}]
});
