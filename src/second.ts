interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

 interface CreateStory{
    createStory():void
 }

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class Youtube implements TakePhoto, CreateStory{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) {}
    createStory(): void {
        console.log('story was creared');
    }
}