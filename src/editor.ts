export class Editor {
    private buffer: Buffer;
    public jumpHeight = 75;
    
    public load(buffer: Buffer) {
        this.buffer = buffer;
        // TODO: Read save data.
    }

    public save(): Buffer {
        // TODO: Write save data.
        return this.buffer;
    }
}