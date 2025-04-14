/// <reference types="react-scripts" />


// Для стандартных форматов (png, jpg, jpeg, gif)
declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  declare module '*.gif' {
    const value: string;
    export default value;
  }
  
  // Для SVG (можно добавить поддержку React-компонентов)
  declare module '*.svg' {
    const content: string;
    export default content;
  }
  
  // Для webp
  declare module '*.webp' {
    const value: string;
    export default value;
  }