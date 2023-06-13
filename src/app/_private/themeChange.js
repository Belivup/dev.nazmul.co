'use client'


export default function themeChange(isDark){

    const root = document.querySelector(':root');

    // root.style.setProperty('--mainBlue', isDark? 'hsl(227,97%,46%)' : 'hsl(218 100% 49.8%)');
    root.style.setProperty('--lightBlue', isDark? 'rgba(24,183,218,0.44)' : 'hsl(218 100% 49.8% / 20%)');
    // root.style.setProperty('--secondYellow', isDark? 'hsl(200, 100%, 100%)' : 'hsl(26 100% 52.94%)');

    root.style.setProperty('--colorWhite', isDark? 'hsl(237,42%,18%)' : 'hsl(0 0% 100%)');
    root.style.setProperty('--colorBack', isDark? 'hsl(0,10%,86%)' : 'hsl(0, 0%, 0%)');
    root.style.setProperty('--colorGrey', isDark? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 97%)');

    root.style.setProperty('--textBlue', isDark? 'hsl(200, 0%, 100%)' : 'hsl(219, 59%, 13%)');

}
