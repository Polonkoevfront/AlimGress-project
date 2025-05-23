declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
declare module "*.css" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';