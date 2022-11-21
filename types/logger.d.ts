export interface ILogger {
    info(text: string): void
    warn(text: string): void
    error(text: string | Error): void
}