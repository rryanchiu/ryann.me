import {defineConfig, presetAttributify, presetIcons, presetWind3} from 'unocss';


export default defineConfig({
    presets: [
        presetWind3({
            dark: 'class'
        }),
        presetAttributify(),
        presetIcons(),
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
});
