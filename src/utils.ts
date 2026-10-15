const UNITS = ['KB', 'MB', 'GB', 'TB'];

export function formatFileSize(bytes: number): string {
    if (
        !Number.isFinite(bytes) ||
        bytes < 1024
    ) return `${bytes} B`;

    let value = bytes / 1024;
    let index = 0;

    while (value >= 1024 && index < UNITS.length - 1) {
        value /= 1024;
        index++;
    }

    return `${value.toFixed(1)} ${UNITS[index]}`;
}