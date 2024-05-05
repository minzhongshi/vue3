import { Plugin } from "postcss";
declare const Options: {
    viewportWidth: number;
};
interface Options {
    viewportWidth?: number;
}
export declare const PostcssPxToViewport: (options?: Options) => Plugin;
export {};
