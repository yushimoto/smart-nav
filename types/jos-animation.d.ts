declare module 'jos-animation' {
  interface JOSOptions {
    passive?: boolean;
    once?: boolean;
    animation?: string;
    timingFunction?: string;
    threshold?: number;
    delay?: number;
    duration?: number;
    scrollDirection?: string;
    rootMargin?: string;
  }

  interface JOS {
    init(options?: JOSOptions): void;
    refresh(): void;
  }

  const JOS: JOS;
  export default JOS;
}
