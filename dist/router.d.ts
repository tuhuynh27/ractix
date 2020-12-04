export declare class Router {
    private routes;
    static params: Record<string, string>;
    route(path: string, fn: () => string): void;
    private static getPath;
    private match;
    render(selector: string): void;
}