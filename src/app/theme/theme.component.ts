export interface Theme {
  name: string;
  properties: any;
}

// #6A6A6B,#504D4D,#838383,#FF9A00

export const light: Theme = {
  name: "light",
  properties: { 
    "--foreground-default": "#fff",
    "--foreground-secondary": "#686767",
    "--foreground-tertiary": "#797C80",
    "--foreground-quaternary": "#f5a34e",
    "--foreground-light": "#686767",
    "--foreground-input":"#8e8c8c",
    "--foreground-ul-li-i":"#686767",
    "--foreground-ul-li-active":"#fff",
    
    "--background-toolbar":"#fff",
    "--background-sidebar":"#fff",
    "--background-default": "#ececec  ",
    "--background-secondary": "#fff",
    "--background-tertiary": "#fff",
    "--background-buttons":"#f5564e",
    "--background-light": "#FFFFFF",
    "--background-input":"#f3f3f3",
    "--background-ul-li":"#fff",
    "--background-ul-hover": "#f5a34e",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#B2FFE7",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--foreground-default":"#fff",
    "--foreground-secondary": "#fff",
    "--foreground-tertiary": "#F97676",
    "--foreground-quaternary": "#f5a34e",
    "--background-buttons":"#fd5e53",
    "--foreground-light": "#fff",
    "--foreground-input":"#8e8c8c",
    "--foreground-white":"#fff",
    "--foreground-ul-li-i":"#686767",
    "--foreground-ul-li-active":"#fff",

    "--background-sidebar":"#2E3130",

    "--background-default": "#272727" ,
    "--background-secondary": "#424242",
    "--background-tertiary": "#2E3130",
    "--background-light": "#FF9A00",
    "--background-input":"#f3f3f3",
    "--background-ul-li":"#686767",
    "--background-ul-hover": "#3a3a39",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#B2FFE7",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
  }
};