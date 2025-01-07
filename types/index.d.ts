type ExecuteCommandCallback = (result: string) => void;

declare class AndroidShell {
    public static executeCommand(command: string, callback: ExecuteCommandCallback): void;
    public static executeCommand(command: string): Promise<string>;
    public static executeCommand(commands: string[]): Promise<string>;
}
