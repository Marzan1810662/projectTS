abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia() :void
    getReelTime():number{
        // some complex calculation
        return 8
    }
}

// const marzan = new TakePhoto("test",'test1')

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst :number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log(`Sepia`);
    }

}
const marzan = new Instagram("test",'test1',3)

export{}
