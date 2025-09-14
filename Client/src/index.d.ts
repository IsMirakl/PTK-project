// Декларация css модулей для типобезопасности
declare module '*.module.css' {
const classes: { [key: string]: string };
export default classes;
}